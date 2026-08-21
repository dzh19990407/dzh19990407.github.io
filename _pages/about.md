---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a Ph.D. candidate at the Institute of Artificial Intelligence, Beihang University, and a member of [CoLab](https://colalab.net/), advised by [Prof. Si Liu](https://scholar.google.com/citations?user=-QtVtNEAAAAJ&hl=en), with an expected graduation date of ``2027.01``. I received my B.Eng. from Beihang University in 2021. Currently, I am also a research intern at Tencent HunYuan. My research interests lie in ``Large Language Models`` and ``Deep Reinforcement Learning``.

<div class="job-seeking-callout">
  <span class="job-seeking-label">Open to Opportunities</span>
  I am currently seeking <strong>2027 new-graduate full-time opportunities</strong> in <em>horizon RL</em>. Feel free to reach me out via email or WeChat.
</div>

<span class='anchor' id='news'></span>

# 🔥 News

- 🎉 2026.08: [UI-Mate](https://ui-mate.github.io/#app) was released for advancing open-weight foundation GUI agents
with in-context demonstrations.
- 🎉 2026.01: [SPO](https://proceedings.iclr.cc/paper_files/paper/2026/file/e46fc33e80e9fa2febcdb058fba4beca-Paper-Conference.pdf) was accepted to **ICLR 2026**.
{: .news-list}

<span class='anchor' id='publications'></span>

<div class="publications-section">
  <h1><i class="fas fa-file-alt" style="color:#2563eb;"></i> Publications</h1>

<div class="pub-year-pager" aria-label="Browse publications by year">
  <button type="button" class="pub-year-nav" data-pub-nav="prev" aria-label="Previous publication year">
    <i class="fas fa-chevron-left" aria-hidden="true"></i>
    <span>Prev</span>
  </button>
  <div class="pub-year-tabs">
    <button type="button" class="pub-year-tab" aria-pressed="false">2026</button>
  </div>
  <button type="button" class="pub-year-nav" data-pub-nav="next" aria-label="Next publication year">
    <span>Next</span>
    <i class="fas fa-chevron-right" aria-hidden="true"></i>
  </button>
</div>

<div class="pub-year-panel" data-year="2026">
<div class="pub-year-divider"><span>2026</span></div>
<div class="pub-year-group">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Tech Report</div><img src='images/paper_ui-mate.png' alt="UI-Mate teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class="paper-title">UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations</span>  
<strong class="author-hl">Zihan Ding</strong>, Longxu Dou, Qi Gao, Xiangwu Guo, Shengchao Hu, Zilong Huang, Zihang Jiang, Lei Ke, Mengcheng Lan, Weixian Lei, Hanxuan Li, Honglin Li, Xiyun Li, Zaitang Li, Leowei Liang, Xin Luo, Haozhe Ma, Jiayi Mao, Zhoujie Pan, Can Qin, Tianyuan Qu, Weiqi Wang, Wenkai Wang, Yonglin Wang, Yuxin Wang, Chenxu Wu, Yingchen Yu, Chenyu Zhang, Yuhao Zheng  
<span class="paper-note">Authors are listed in alphabetical order by last name.</span>  
<em>Technical Report</em>  
<div class="paper-links">
  <a href="https://arxiv.org/pdf/2608.15930" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://github.com/Tencent/UI-Mate" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
  <a href="https://huggingface.co/collections/tencent/ui-mate" target="_blank" rel="noopener noreferrer"><i class="fas fa-cube"></i> Weights</a>
  <a href="https://ui-mate.github.io/#app" target="_blank" rel="noopener noreferrer"><i class="fas fa-desktop"></i> App</a>
  <a href="https://ui-mate.github.io/#demos" target="_blank" rel="noopener noreferrer"><i class="fas fa-play-circle"></i> Demo</a>
</div>

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/paper_spo.png' alt="SPO teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class="paper-title">Single-stream Policy Optimization</span>  
Zhongwen Xu<sup class="author-star"></sup> and <strong class="author-hl">Zihan Ding</strong><sup class="author-star"></sup>  
<span class="paper-note"><sup class="author-star"></sup> Equal contribution</span>  
<em>ICLR 2026</em>  
<div class="paper-links">
  <a href="https://proceedings.iclr.cc/paper_files/paper/2026/file/e46fc33e80e9fa2febcdb058fba4beca-Paper-Conference.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://github.com/verl-project/verl-recipe/tree/main/spo" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
</div>
</div>
</div>

</div>
</div>
</div>

<span class='anchor' id='experience'></span>

# <i class="fas fa-briefcase" style="color:#059669;"></i> Research and Industry Experience

<div class="experience-section">
<div class="experience-list">
  <div class="experience-item">
    <div class="experience-item-head">
      <strong>Tencent HunYuan</strong>
      <span><em>Research Intern (Intern Project Up), 2026.04 - Present</em></span>
    </div>
    <p>Worked on long-horizon reinforcement learning for computer-use agents.</p>
  </div>

  <div class="experience-item">
    <div class="experience-item-head">
      <strong>Tencent AIPD</strong>
      <span><em>Research Intern (Rhino-Bird Elite Talent), 2025.06 - 2026.03</em></span>
    </div>
    <p>Worked on LLM post-training to improve reasoning ability.</p>
  </div>

</div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const initPublicationsPager = () => {
    const section = document.querySelector(".publications-section");
    if (!section) return;

    const panels = Array.from(section.querySelectorAll(".pub-year-panel"));
    const tabs = Array.from(section.querySelectorAll(".pub-year-tab"));
    const prevButton = section.querySelector('[data-pub-nav="prev"]');
    const nextButton = section.querySelector('[data-pub-nav="next"]');

    if (!panels.length || !tabs.length || !prevButton || !nextButton) return;

    let currentIndex = 0;

    const setActivePanel = (nextIndex) => {
      currentIndex = nextIndex;

      panels.forEach((panel, index) => {
        const isActive = index === currentIndex;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });

      tabs.forEach((tab, index) => {
        const isActive = index === currentIndex;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === panels.length - 1;
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => setActivePanel(index));
    });

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) setActivePanel(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < panels.length - 1) setActivePanel(currentIndex + 1);
    });

    section.classList.add("pub-pager-ready");
    setActivePanel(0);
  };

  const initNewsPager = () => {
    const newsList = document.querySelector(".news-list");
    if (!newsList) return;

    const newsItems = Array.from(newsList.querySelectorAll("li"));
    const pageSize = 12;
    const totalPages = Math.ceil(newsItems.length / pageSize);

    if (totalPages <= 1) return;

    let currentPage = 0;

    const pager = document.createElement("div");
    pager.className = "news-pager";

    const prevButton = document.createElement("button");
    prevButton.type = "button";
    prevButton.className = "news-page-button";
    prevButton.innerHTML = '<i class="fas fa-chevron-left" aria-hidden="true"></i><span>Prev</span>';

    const pageTabs = document.createElement("div");
    pageTabs.className = "news-page-tabs";

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "news-page-button";
    nextButton.innerHTML = '<span>Next</span><i class="fas fa-chevron-right" aria-hidden="true"></i>';

    const pageButtons = Array.from({ length: totalPages }, (_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "news-page-tab";
      button.textContent = String(index + 1);
      button.addEventListener("click", () => setActivePage(index));
      pageTabs.appendChild(button);
      return button;
    });

    pager.appendChild(prevButton);
    pager.appendChild(pageTabs);
    pager.appendChild(nextButton);
    newsList.insertAdjacentElement("afterend", pager);
    newsList.classList.add("news-list-paged");

    const setActivePage = (nextPage) => {
      currentPage = nextPage;

      newsItems.forEach((item, index) => {
        const start = currentPage * pageSize;
        const end = start + pageSize;
        item.hidden = index < start || index >= end;
      });

      pageButtons.forEach((button, index) => {
        const isActive = index === currentPage;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === totalPages - 1;
    };

    prevButton.addEventListener("click", () => {
      if (currentPage > 0) setActivePage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages - 1) setActivePage(currentPage + 1);
    });

    setActivePage(0);
  };

  const initSectionDeck = () => {
    const pageContent = document.querySelector(".page__content");
    if (!pageContent) return;

    const sectionIds = [
      "about-me",
      "news",
      "publications",
      "experience"
    ];
    const sectionIndexMap = new Map(sectionIds.map((id, index) => [id, index]));

    const buildDeck = () => {
      const existingDeck = pageContent.querySelector(".section-deck");
      if (existingDeck) return existingDeck;

      const anchors = sectionIds.map((id) => pageContent.querySelector(".anchor#" + id));
      if (anchors.some((anchor) => !anchor)) return null;

      const deck = document.createElement("div");
      deck.className = "section-deck";
      pageContent.insertBefore(deck, anchors[0]);

      sectionIds.forEach((id) => {
        const anchor = pageContent.querySelector(".anchor#" + id);
        if (!anchor) return;

        const section = document.createElement("section");
        section.className = "screen-section";
        section.dataset.sectionId = id;

        if (id === "about-me") {
          section.classList.add("screen-section--intro");
        }

        const body = document.createElement("div");
        body.className = "screen-section__body";
        section.appendChild(body);
        deck.appendChild(section);

        let currentNode = anchor;
        while (currentNode) {
          if (
            currentNode !== anchor &&
            currentNode.nodeType === Node.ELEMENT_NODE &&
            currentNode.classList.contains("anchor") &&
            sectionIndexMap.has(currentNode.id)
          ) {
            break;
          }

          if (
            currentNode.nodeType === Node.ELEMENT_NODE &&
            currentNode.tagName === "SCRIPT"
          ) {
            break;
          }

          const nextNode = currentNode.nextSibling;
          body.appendChild(currentNode);
          currentNode = nextNode;
        }
      });

      return deck;
    };

    const deck = buildDeck();
    if (!deck || deck.dataset.deckReady === "true") return;
    deck.dataset.deckReady = "true";

    const sections = Array.from(deck.querySelectorAll(".screen-section"));
    if (!sections.length) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const navLinks = Array.from(
      document.querySelectorAll(".greedy-nav a[href]")
    ).filter((link) => {
      const href = link.getAttribute("href") || "";
      if (!href.includes("#")) return false;
      const hash = href.slice(href.indexOf("#") + 1);
      return sectionIndexMap.has(hash);
    });

    let activeIndex = 0;
    let isScreenMode = false;
    let transitionLocked = false;
    let unlockTimer = null;

    const getHashIndex = () => {
      const hash = window.location.hash.replace(/^#/, "");
      return sectionIndexMap.has(hash) ? sectionIndexMap.get(hash) : 0;
    };

    const syncNavState = () => {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const hash = href.slice(href.indexOf("#") + 1);
        const isCurrent = isScreenMode && sectionIds[activeIndex] === hash;

        link.classList.toggle("is-current", isCurrent);

        if (isCurrent) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const setDeckHeight = () => {
      if (!isScreenMode) {
        deck.style.removeProperty("--deck-height");
        return;
      }

      const rect = deck.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const availableHeight = Math.max(500, Math.floor(viewportHeight - rect.top - 10));
      deck.style.setProperty("--deck-height", availableHeight + "px");
    };

    const activateSection = (nextIndex, options) => {
      const settings = Object.assign(
        { updateHash: true, history: "replace", resetScroll: true },
        options || {}
      );

      if (nextIndex < 0 || nextIndex >= sections.length) return false;
      activeIndex = nextIndex;

      sections.forEach((section, index) => {
        const body = section.querySelector(".screen-section__body");
        const isActive = index === activeIndex;

        section.classList.toggle("is-active", isActive);

        if (isScreenMode) {
          section.setAttribute("aria-hidden", isActive ? "false" : "true");

          if (body) {
            body.tabIndex = isActive ? 0 : -1;
            if (isActive && settings.resetScroll) {
              body.scrollTop = 0;
            }
          }
        } else {
          section.removeAttribute("aria-hidden");
          if (body) body.removeAttribute("tabindex");
        }
      });

      if (settings.updateHash) {
        const nextHash = "#" + sectionIds[activeIndex];
        if (window.location.hash !== nextHash) {
          if (settings.history === "push") {
            window.history.pushState(null, "", nextHash);
          } else {
            window.history.replaceState(null, "", nextHash);
          }
        }
      }

      syncNavState();
      return true;
    };

    const moveSection = (direction, options) => {
      const nextIndex = activeIndex + direction;
      if (transitionLocked || nextIndex < 0 || nextIndex >= sections.length) return;

      transitionLocked = true;
      window.clearTimeout(unlockTimer);
      activateSection(nextIndex, options);

      unlockTimer = window.setTimeout(() => {
        transitionLocked = false;
      }, 380);
    };

    const isAtTop = (body) => body.scrollTop <= 2;
    const isAtBottom = (body) =>
      body.scrollTop + body.clientHeight >= body.scrollHeight - 2;

    deck.addEventListener(
      "wheel",
      (event) => {
        if (!isScreenMode || transitionLocked) return;

        const activeSection = sections[activeIndex];
        if (!activeSection || !activeSection.contains(event.target)) return;

        const activeBody = activeSection.querySelector(".screen-section__body");
        if (!activeBody || Math.abs(event.deltaY) < 8) return;

        if (
          event.deltaY > 0 &&
          isAtBottom(activeBody) &&
          activeIndex < sections.length - 1
        ) {
          event.preventDefault();
          moveSection(1, { history: "replace" });
        } else if (
          event.deltaY < 0 &&
          isAtTop(activeBody) &&
          activeIndex > 0
        ) {
          event.preventDefault();
          moveSection(-1, { history: "replace" });
        }
      },
      { passive: false }
    );

    document.addEventListener("click", (event) => {
      const link = event.target.closest(".greedy-nav a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (!href.includes("#")) return;

      const hash = href.slice(href.indexOf("#") + 1);
      if (!sectionIndexMap.has(hash) || !isScreenMode) return;

      event.preventDefault();

      const nextIndex = sectionIndexMap.get(hash);
      if (nextIndex === activeIndex) {
        const activeBody = sections[activeIndex].querySelector(".screen-section__body");
        if (activeBody) {
          activeBody.scrollTo({ top: 0, behavior: "smooth" });
        }
        activateSection(nextIndex, { history: "push", resetScroll: false });
        return;
      }

      activateSection(nextIndex, { history: "push" });
    });

    window.addEventListener("hashchange", () => {
      if (!isScreenMode) return;
      activateSection(getHashIndex(), { updateHash: false });
    });

    const applyScreenMode = () => {
      const nextMode = desktopQuery.matches;
      const modeChanged = nextMode !== isScreenMode;

      isScreenMode = nextMode;
      deck.classList.toggle("is-screen-mode", isScreenMode);
      pageContent.classList.toggle("is-screen-mode", isScreenMode);
      document.body.classList.toggle("home-screen-mode", isScreenMode);

      if (isScreenMode) {
        activeIndex = getHashIndex();
        setDeckHeight();
        activateSection(activeIndex, { updateHash: false });
        window.requestAnimationFrame(setDeckHeight);
      } else {
        deck.style.removeProperty("--deck-height");
        window.clearTimeout(unlockTimer);
        transitionLocked = false;

        sections.forEach((section) => {
          const body = section.querySelector(".screen-section__body");
          section.classList.remove("is-active");
          section.removeAttribute("aria-hidden");
          if (body) body.removeAttribute("tabindex");
        });

        syncNavState();

        if (modeChanged) {
          const activeAnchor = pageContent.querySelector(
            ".anchor#" + sectionIds[getHashIndex()]
          );

          if (activeAnchor) {
            window.requestAnimationFrame(() => {
              activeAnchor.scrollIntoView({ block: "start" });
            });
          }
        }
      }
    };

    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", applyScreenMode);
    } else if (typeof desktopQuery.addListener === "function") {
      desktopQuery.addListener(applyScreenMode);
    }

    window.addEventListener("resize", setDeckHeight);
    window.addEventListener("load", setDeckHeight);

    applyScreenMode();
  };

  initPublicationsPager();
  initNewsPager();
  initSectionDeck();
});
</script>
