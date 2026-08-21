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

I am currently a Ph.D. student at the School of Artificial Intelligence, Beihang University, and a member of [CoLab](https://colalab.net/), advised by [Prof. Si Liu](https://scholar.google.com/citations?user=-QtVtNEAAAAJ&hl=en), with an expected graduation date of ``2027.06``. I am also a research intern at Shanghai AI Laboratory, where I am supervised by [Prof. Jiangmiao Pang](https://oceanpang.github.io/) and [Prof. Jifeng Dai](https://jifengdai.org/). Prior to my Ph.D., I spent two years in the master's program at Beihang University under the supervision of [Prof. Lv Sheng](https://lucassheng.github.io/), and I received my B.Eng. from Beihang University. My research interests lie in ``Embodied AI`` and ``Multimodal Large Language Models``, I also have research interests and experience in ``Reinforcement Learning``.

<div class="job-seeking-callout">
  <span class="job-seeking-label">Open to Opportunities</span>
  I am currently seeking <strong>2027 new-graduate full-time opportunities</strong> in <em>Embodied AI</em> and <em>MLLM</em>. Feel free to reach me out via email or WeChat.
</div>

<span class='anchor' id='news'></span>

# 🔥 News

- 🎉 2026.06: *RoboInter++* was released as a world-action-modeling extension of [RoboInter](https://arxiv.org/abs/2602.09973) for robotic manipulation and embodied world modeling.
- 🎉 2026.05: [LLaVA-CMoE](https://arxiv.org/abs/2503.21227) was accepted to **ICML 2026**.
- 🎉 2026.02: Data, benchmarks, and models from [RoboInter](https://arxiv.org/abs/2602.09973) were open-sourced.
- 🎉 2026.02: As team leader, I led our team to the Second Place Award (2/62) in the **RoCo Challenge @ AAAI 2026: Robotic Collaborative Assembling for Human-Centered Manufacturing**.
- 🎉 2026.01: [RoboInter](https://arxiv.org/abs/2602.09973) was accepted to **ICLR 2026**.
- 🎉 2025.11: [VaccineRAG](https://ojs.aaai.org/index.php/AAAI/article/download/37876/41838) was accepted to **AAAI 2026**.
- 🎉 2025.09: [InternVLA-M1](https://arxiv.org/pdf/2510.13778) was released as a technical report.
- 🎉 2025.03: [AirStar](https://dl.acm.org/doi/abs/10.1145/3746027.3754491) was accepted to **ACM MM 2025**.
- 🎉 2025.01: [OpenUAV](https://proceedings.iclr.cc/paper_files/paper/2025/file/15ce8e7afe5ee95bad56e3b9be28d3d1-Paper-Conference.pdf) was accepted to **ICLR 2025**.
- 🎉 2024.09: [CooHOI](https://proceedings.neurips.cc/paper_files/paper/2024/file/918b9487f8ea4661e8ba5a02b2126658-Paper-Conference.pdf) was accepted to **NeurIPS 2024** as a **Spotlight** paper.
- 🎉 2024.03: I joined **Shanghai AI Laboratory** as a research intern.
- 🎉 2024.01: [Octavius](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf) was accepted to **ICLR 2024**.
- 🎉 2023.05: I joined **NIO** as a research intern.
- 🎉 2023.03: [VL-SAT](http://openaccess.thecvf.com/content/CVPR2023/papers/Wang_VL-SAT_Visual-Linguistic_Semantics_Assisted_Training_for_3D_Semantic_Scene_Graph_CVPR_2023_paper.pdf) was accepted to **CVPR 2023** as a **Highlight** paper.
- 🎉 2021.09: I joined **SenseTime** as a research intern.
{: .news-list}

<span class='anchor' id='publications'></span>

<div class="publications-section">
<div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px; flex-wrap:wrap;">
  <h1 style="margin:0;"><i class="fas fa-file-alt" style="color:#2563eb;"></i> Publications</h1>
  <span class="section-note">Equal-contribution authors are in bold.</span>
</div>

<div class="pub-year-pager" aria-label="Browse publications by year">
  <button type="button" class="pub-year-nav" data-pub-nav="prev" aria-label="Previous publication year">
    <i class="fas fa-chevron-left" aria-hidden="true"></i>
    <span>Prev</span>
  </button>
  <div class="pub-year-tabs">
    <button type="button" class="pub-year-tab" aria-pressed="false">2026</button>
    <button type="button" class="pub-year-tab" aria-pressed="false">2025</button>
    <button type="button" class="pub-year-tab" aria-pressed="false">2024</button>
    <button type="button" class="pub-year-tab" aria-pressed="false">2023</button>
  </div>
  <button type="button" class="pub-year-nav" data-pub-nav="next" aria-label="Next publication year">
    <span>Next</span>
    <i class="fas fa-chevron-right" aria-hidden="true"></i>
  </button>
</div>

<div class="pub-year-panel" data-year="2026">
<div class="pub-year-divider"><span>2026</span></div>
<div class="pub-year-group">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Tech Report</div><img src='images/paper_robointerpp.png' alt="RoboInter++ teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**RoboInter++: A Holistic Intermediate Representation Suite for Robotic Manipulation and Embodied World Modeling**  
<strong>Ziqin Wang</strong>, Hao Li, Weijun Wang, Junhao Cai, Jia Zeng, Jiangmiao Pang, Yilun Chen, Si Liu  
*Technical Report*  
<div class="paper-links"><a href="https://github.com/wz7in/RoboInterWorld" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a></div>

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/paper_robointer.png' alt="RoboInter teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**RoboInter: A Holistic Intermediate Representation Suite Towards Robotic Manipulation**  
<strong>Ziqin Wang</strong>, <strong>Hao Li</strong>, Zi-han Ding, Shuai Yang, Yilun Chen, Yang Tian, Xiaolin Hu, Tai Wang, Dahua Lin, Feng Zhao, Si Liu, Jiangmiao Pang  
*ICLR 2026*  
<div class="paper-links">
  <a href="https://arxiv.org/abs/2602.09973" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://github.com/InternRobotics/RoboInter" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/paper_cope.png' alt="LLaVA-CMoE teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**LLaVA-CMoE: Towards Continual Mixture of Experts for Large Vision-Language Models**  
<strong>Ziqin Wang</strong>, <strong>Hengyuan Zhao</strong>, Qixin Sun, Kaiyou Song, Yilin Li, Xiaolin Hu, Qingpei Guo, Si Liu  
*ICML, 2026*  
<div class="paper-links"><a href="https://arxiv.org/abs/2503.21227" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a></div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><img src='images/paper_vaccinerag.png' alt="VaccineRAG teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**VaccineRAG: Boosting Multimodal Large Language Models' Immunity to Harmful RAG Samples**  
<strong>Qixin Sun</strong>, <strong>Ziqin Wang</strong>, <strong>Hengyuan Zhao</strong>, Yilin Li, Kaiyou Song, Linjiang Huang, Xiaolin Hu, Qingpei Guo, Si Liu  
*AAAI 2026*  
<div class="paper-links"><a href="https://ojs.aaai.org/index.php/AAAI/article/download/37876/41838" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a></div>

</div>
</div>
</div>
</div>

<div class="pub-year-panel" data-year="2025">
<div class="pub-year-divider"><span>2025</span></div>
<div class="pub-year-group">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Tech Report</div><img src='images/paper_internvlam1.png' alt="InternVLA-M1 teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**InternVLA-M1: A Spatially Guided Vision-Language-Action Framework for Generalist Robot Policy**  
InternVLA-M1 Team  
*Technical Report, 2025*  
<div class="paper-links">
  <a href="https://arxiv.org/pdf/2510.13778" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://github.com/InternRobotics/InternVLA-M1" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
</div>

</div>

</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/paper_openuav.png' alt="OpenUAV teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Towards Realistic UAV Vision-Language Navigation: Platform, Benchmark, and Methodology**  
<strong>Xiangyu Wang</strong>, <strong>Ziqin Wang</strong>, <strong>Donglin Yang</strong>, Hohin Kwan, Jinyu Chen, Wenjun Wu, Hongsheng Li, Yue Liao, Si Liu  
*ICLR 2025*  
<div class="paper-links">
  <a href="https://proceedings.iclr.cc/paper_files/paper/2025/file/15ce8e7afe5ee95bad56e3b9be28d3d1-Paper-Conference.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://prince687028.github.io/Travel/" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i> Project Page</a>
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2025</div><img src='images/paper_airstar.png' alt="AirStar teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**UAVClaw: Hi AirStar, Guide Me to the Badminton Court.**  
<strong>Ziqin Wang</strong>, Jinyu Chen, Xiangyi Zheng, Qinan Liao, Linjiang Huang, Si Liu  
*ACM MM 2025*  
<div class="paper-links">
  <a href="https://dl.acm.org/doi/abs/10.1145/3746027.3754491" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://github.com/wz7in/airstar" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
</div>

</div>
</div>
</div>
</div>

<div class="pub-year-panel" data-year="2024">
<div class="pub-year-divider"><span>2024</span></div>
<div class="pub-year-group">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024 Spotlight</div><img src='images/paper_coohoi.png' alt="CooHOI teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**CooHOI: Learning Cooperative Human-Object Interaction with Manipulated Object Dynamics**  
<strong>Ziqin Wang</strong>, <strong>Jiawei Gao</strong>, Zeqi Xiao, Jingbo Wang, Tai Wang, Jinkun Cao, Xiaolin Hu, Si Liu, Jifeng Dai, Jiangmiao Pang  
*NeurIPS 2024, Spotlight*  
<div class="paper-links">
  <a href="https://proceedings.neurips.cc/paper_files/paper/2024/file/918b9487f8ea4661e8ba5a02b2126658-Paper-Conference.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://gao-jiawei.com/CooHOI/" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i> Project Page</a>
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/paper_asyncdriver.png' alt="AsyncDriver teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Asynchronous Large Language Model Enhanced Planner for Autonomous Driving**  
<strong>Yuan Chen</strong>, <strong>Zi-han Ding</strong>, <strong>Ziqin Wang</strong>, Yan Wang, Lijun Zhang, Si Liu  
*ECCV 2024*  
<div class="paper-links">
  <a href="https://link.springer.com/chapter/10.1007/978-3-031-72764-1_2" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://github.com/memberRE/AsyncDriver" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
</div>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024</div><img src='images/paper_octavius.png' alt="Octavius teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Octavius: Mitigating Task Interference in MLLMs via LoRA-MoE**  
<strong>Zeren Chen</strong>, <strong>Ziqin Wang</strong>, Zhen Wang, Huayang Liu, Zhenfei Yin, Si Liu, Lu Sheng, Wanli Ouyang, Yu Qiao, Jing Shao  
*ICLR 2024*  
<div class="paper-links">
  <a href="https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://openlamm.github.io/paper%20list/Octavius" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i> Project Page</a>
</div>

</div>
</div>
</div>
</div>

<div class="pub-year-panel" data-year="2023">
<div class="pub-year-divider"><span>2023</span></div>
<div class="pub-year-group">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023 Highlight</div><img src='images/paper_vlsat.png' alt="VL-SAT teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**VL-SAT: Visual-Linguistic Semantics Assisted Training for 3D Semantic Scene Graph Prediction in Point Cloud**  
<strong>Ziqin Wang</strong>, Bowen Cheng, Lichen Zhao, Dong Xu, Yang Tang, Lu Sheng  
*CVPR 2023, Highlight*  
<div class="paper-links">
  <a href="http://openaccess.thecvf.com/content/CVPR2023/papers/Wang_VL-SAT_Visual-Linguistic_Semantics_Assisted_Training_for_3D_Semantic_Scene_Graph_CVPR_2023_paper.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>
  <a href="https://github.com/wz7in/CVPR2023-VLSAT" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
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
      <strong>Shanghai AI Laboratory</strong>
      <span>*Research Intern, 2024.06 - 2026.06*</span>
    </div>
    <p>Worked on multi-agent collaboration, robotic manipulation, embodied world models, and VLA systems. Contributed to InternVLA-M1, RoboInter, and RoboInter++ related projects, including a co-first-author NeurIPS Spotlight paper.</p>
  </div>

  <div class="experience-item">
    <div class="experience-item-head">
      <strong>NIO</strong>
      <span>*Research Intern, 2023.09 - 2024.05*</span>
    </div>
    <p>Worked on point-cloud perception foundation models for autonomous driving and improved cone detection recall while optimizing inference speed for deployment.</p>
  </div>

  <div class="experience-item">
    <div class="experience-item-head">
      <strong>SenseTime OpenGVLab</strong>
      <span>*Research Intern, 2022.05 - 2023.09*</span>
    </div>
    <p>Participated in InternVL pretraining and CLIP reproduction and optimization, and explored multimodal large models with mixture-of-experts architectures.</p>
  </div>

  <div class="experience-item">
    <div class="experience-item-head">
      <strong>SenseTime</strong>
      <span>*Algorithm Intern, 2021.05 - 2022.05*</span>
    </div>
    <p>Worked on liveness detection algorithms, covering data collection, model iteration, and practical system improvement for real-world deployment.</p>
  </div>
</div>
</div>

<span class='anchor' id='education'></span>

# <i class="fas fa-graduation-cap" style="color:#6366f1;"></i> Education

<div class="education-section">
<div class="experience-list">
  <div class="experience-item">
    <div class="experience-item-head">
      <strong>Beihang University</strong>
      <span>*2023.09 - Present*</span>
    </div>
    <p>Ph.D. student, School of Artificial Intelligence.</p>
  </div>

  <div class="experience-item">
    <div class="experience-item-head">
      <strong>Beihang University</strong>
      <span>*2021.09 - 2023.06*</span>
    </div>
    <p>M.Eng., School of Software.</p>
  </div>

  <div class="experience-item">
    <div class="experience-item-head">
      <strong>Beihang University</strong>
      <span>*2017.09 - 2021.06*</span>
    </div>
    <p>B.Eng., School of Software.</p>
  </div>
</div>
</div>

<span class='anchor' id='projects'></span>

# <i class="fas fa-rocket" style="color:#8fa4af;"></i> Projects

<div class="projects-section">
<div class='paper-box compact-card project-card'><div class='paper-box-image'><div><img src='images/project_airstar.png' alt="AirStar visual" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**AirStar**  
*LLM-Agent UAV Assistant*  
An LLM-agent-based UAV assistant system that integrates skill selection and tool calling to support campus navigation, photo capture, following, and visual question answering for UAVs.

<div class="paper-links">
  <a href="https://github.com/wz7in/airstar" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a>
  <a href="https://buaa-colalab.github.io/airstar.github.io/" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i> Project Page</a>
</div>

</div>
</div>

<div class='paper-box compact-card project-card'><div class='paper-box-image'><div><img src='images/project_scholarmind.png' alt="ScholarMind visual" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**ScholarMind**  
*Research Productivity Tool*  
An intelligent tool for improving research reading efficiency, including paper crawling, content analysis, report generation, and research idea summarization.

<div class="paper-links"><a href="https://github.com/wz7in/ScholarMind?tab=readme-ov-file" target="_blank" rel="noopener noreferrer"><i class="fas fa-code"></i> Code</a></div>

</div>
</div>
</div>

<span class='anchor' id='honors'></span>

# <i class="fas fa-award" style="color:#d97706;"></i> Honors and Awards

<div class="honors-section">
<ul class="section-list honors-list">
  <li>Second Place Award (2/62), <strong>RoCo Challenge @ AAAI 2026: Robotic Collaborative Assembling for Human-Centered Manufacturing</strong>, Team Leader</li>
  <li>Grand Prize, Beihang <strong>"Feng Ru Cup"</strong> Creativity Track</li>
  <li>Ranked <strong>7/180</strong> during undergraduate study</li>
  <li><strong>First-Place</strong> Academic Scholarship, Beihang University</li>
  <li><strong>First-Class</strong> Scholarship for Ph.D. Freshmen, Beihang University</li>
</ul>
</div>

<span class='anchor' id='service'></span>

# <i class="fas fa-users" style="color:#2563eb;"></i> Academic Service

<div class="service-section">
<ul class="section-list">
  <li>Reviewer for CVPR, ICCV, ECCV, ICLR, NeurIPS, ICML, and ACM MM</li>
</ul>
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
      "experience",
      "education",
      "projects",
      "honors",
      "service"
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
