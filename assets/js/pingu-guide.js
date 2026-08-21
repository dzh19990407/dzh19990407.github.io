(function () {
  "use strict";

  const initPinguGuide = function () {
    const guide = document.querySelector("[data-pingu-guide]");
    if (!guide || guide.getAttribute("data-pingu-ready") === "true") return;

    const panel = guide.querySelector("#pingu-guide-panel");
    const trigger = guide.querySelector("[data-pingu-trigger]");
    const closeButton = guide.querySelector("[data-pingu-close]");
    const nextButton = guide.querySelector("[data-pingu-next]");
    const nextLabel = guide.querySelector("[data-pingu-next-label]");
    const status = guide.querySelector("[data-pingu-status]");
    const hint = guide.querySelector("[data-pingu-hint]");
    const sprite = guide.querySelector("[data-pingu-sprite]");
    const links = Array.from(guide.querySelectorAll("[data-pingu-target]"));

    if (!panel || !trigger || !closeButton || !nextButton || !links.length) return;

    guide.setAttribute("data-pingu-ready", "true");

    let currentIndex = 0;
    let isOpen = false;
    let hintTimer = null;
    let scrollFrame = null;
    let spriteFrameTimer = null;
    let spriteActionTimer = null;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const spriteActions = {
      idle: { row: 0, frames: 7, frameDuration: 240 },
      "running-right": { row: 1, frames: 8, frameDuration: 95 },
      "running-left": { row: 2, frames: 8, frameDuration: 95 },
      waving: { row: 3, frames: 4, frameDuration: 170 },
      waiting: { row: 6, frames: 6, frameDuration: 230 }
    };

    const clearSpriteTimers = function () {
      window.clearInterval(spriteFrameTimer);
      window.clearTimeout(spriteActionTimer);
      spriteFrameTimer = null;
      spriteActionTimer = null;
    };

    const drawSpriteFrame = function (action, frame) {
      if (!sprite) return;

      sprite.style.backgroundPosition =
        (frame / 7) * 100 + "% " + (action.row / 10) * 100 + "%";
    };

    const playSprite = function (name, options) {
      if (!sprite || !spriteActions[name]) return;

      const settings = Object.assign({ cycles: 0, next: "idle" }, options || {});
      const action = spriteActions[name];
      let frame = 0;

      clearSpriteTimers();
      guide.setAttribute("data-pingu-action", name);
      drawSpriteFrame(action, frame);

      if (reducedMotion) return;

      spriteFrameTimer = window.setInterval(function () {
        frame = (frame + 1) % action.frames;
        drawSpriteFrame(action, frame);
      }, action.frameDuration);

      if (settings.cycles > 0) {
        spriteActionTimer = window.setTimeout(function () {
          playSprite(settings.next);
        }, action.frameDuration * action.frames * settings.cycles);
      }
    };

    const sectionLabel = function (index) {
      const label = links[index] && links[index].querySelector(".pingu-guide__link-label");
      return label ? label.textContent.trim() : "this section";
    };

    const rememberVisit = function () {
      try {
        window.sessionStorage.setItem("pingu-guide-seen-v1", "true");
      } catch (error) {
        // Storage may be disabled; the guide still works without persistence.
      }
    };

    const hasVisited = function () {
      try {
        return window.sessionStorage.getItem("pingu-guide-seen-v1") === "true";
      } catch (error) {
        return true;
      }
    };

    const hideHint = function () {
      window.clearTimeout(hintTimer);
      guide.classList.remove("is-hinting");
    };

    const showHint = function (message, duration) {
      if (!hint || isOpen) return;

      const hintText = hint.querySelector("span");
      if (hintText && message) hintText.textContent = message;

      window.clearTimeout(hintTimer);
      guide.classList.add("is-hinting");
      hintTimer = window.setTimeout(function () {
        guide.classList.remove("is-hinting");
      }, duration || 4600);
    };

    const setOpen = function (nextOpen, options) {
      const settings = Object.assign({ focusPanel: false, returnFocus: false }, options || {});
      isOpen = Boolean(nextOpen);

      guide.classList.toggle("is-open", isOpen);
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      trigger.setAttribute(
        "aria-label",
        isOpen ? "Close Pingu page guide" : "Open Pingu page guide"
      );
      panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
      panel.toggleAttribute("inert", !isOpen);

      if (isOpen) {
        hideHint();
        rememberVisit();
        playSprite("waving", { cycles: 2, next: "waiting" });
        if (settings.focusPanel) closeButton.focus();
      } else {
        playSprite("idle");
        if (settings.returnFocus) trigger.focus();
      }
    };

    const setActiveSection = function (sectionId) {
      const nextIndexValue = links.findIndex(function (link) {
        return link.getAttribute("data-pingu-target") === sectionId;
      });

      if (nextIndexValue < 0) return;
      currentIndex = nextIndexValue;
      guide.setAttribute("data-active-section", sectionId);

      links.forEach(function (link, index) {
        const isCurrent = index === currentIndex;
        link.classList.toggle("is-current", isCurrent);

        if (isCurrent) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      const currentLabel = sectionLabel(currentIndex);
      const followingIndex = (currentIndex + 1) % links.length;

      if (status) status.textContent = "You are at " + currentLabel + ". Pick a stop!";
      if (nextLabel) nextLabel.textContent = sectionLabel(followingIndex);
    };

    const currentSectionFromPage = function () {
      const activeScreen = document.querySelector(
        ".screen-section.is-active[data-section-id]"
      );

      if (activeScreen) return activeScreen.getAttribute("data-section-id");

      const hashId = window.location.hash.replace(/^#/, "");
      let candidate = links.some(function (link) {
        return link.getAttribute("data-pingu-target") === hashId;
      })
        ? hashId
        : links[0].getAttribute("data-pingu-target");

      const checkpoint = Math.min(window.innerHeight * 0.32, 250);
      links.forEach(function (link) {
        const section = document.getElementById(link.getAttribute("data-pingu-target"));
        if (section && section.getBoundingClientRect().top <= checkpoint) {
          candidate = link.getAttribute("data-pingu-target");
        }
      });

      return candidate;
    };

    const syncFromPage = function () {
      setActiveSection(currentSectionFromPage());
    };

    trigger.addEventListener("click", function () {
      setOpen(!isOpen, { focusPanel: !isOpen });
    });

    closeButton.addEventListener("click", function () {
      setOpen(false, { returnFocus: true });
    });

    const visitSection = function (link) {
      const targetId = link.getAttribute("data-pingu-target");
      const targetLabel = link.querySelector(".pingu-guide__link-label");
      const targetIndex = links.indexOf(link);
      let travelAction = null;
      if (targetIndex > currentIndex) travelAction = "running-right";
      if (targetIndex < currentIndex) travelAction = "running-left";
      const nextHash = "#" + targetId;

      setActiveSection(targetId);
      setOpen(false);
      if (travelAction) playSprite(travelAction, { cycles: 1, next: "idle" });

      if (window.location.hash === nextHash) {
        if (document.body.classList.contains("home-screen-mode")) {
          window.dispatchEvent(new Event("hashchange"));
        } else {
          const target = document.getElementById(targetId);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.hash = nextHash;
      }

      window.setTimeout(function () {
        showHint("Now: " + (targetLabel ? targetLabel.textContent.trim() : "next stop"), 2400);
      }, 260);
    };

    links.forEach(function (link) {
      link.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          event.stopImmediatePropagation();
          visitSection(link);
        },
        true
      );
    });

    nextButton.addEventListener("click", function () {
      const followingIndex = (currentIndex + 1) % links.length;
      visitSection(links[followingIndex]);
    });

    trigger.addEventListener("pointerenter", function () {
      if (!isOpen) playSprite("waving", { cycles: 1, next: "idle" });
    });

    document.addEventListener("pointerdown", function (event) {
      if (isOpen && !guide.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen) {
        setOpen(false, { returnFocus: true });
      }
    });

    window.addEventListener("hashchange", function () {
      window.requestAnimationFrame(syncFromPage);
    });

    window.addEventListener("popstate", function () {
      window.requestAnimationFrame(syncFromPage);
    });

    window.addEventListener(
      "scroll",
      function () {
        if (scrollFrame) return;
        scrollFrame = window.requestAnimationFrame(function () {
          scrollFrame = null;
          syncFromPage();
        });
      },
      { passive: true }
    );

    const sectionDeck = document.querySelector(".section-deck");
    if (sectionDeck && "MutationObserver" in window) {
      const observer = new MutationObserver(function () {
        window.requestAnimationFrame(syncFromPage);
      });

      observer.observe(sectionDeck, {
        attributes: true,
        subtree: true,
        attributeFilter: ["class"]
      });
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        clearSpriteTimers();
      } else {
        playSprite(isOpen ? "waiting" : "idle");
      }
    });

    syncFromPage();
    playSprite("idle");

    const desktopWelcome = window.matchMedia("(min-width: 768px)").matches;

    if (!hasVisited() && desktopWelcome && !reducedMotion) {
      window.setTimeout(function () {
        setOpen(true);
      }, 900);
    } else {
      window.setTimeout(function () {
        playSprite("waving", { cycles: 1, next: "idle" });
        showHint("Need a tiny tour?", 5200);
      }, 700);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPinguGuide);
  } else {
    initPinguGuide();
  }
})();
