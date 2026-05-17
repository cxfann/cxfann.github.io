---
permalink: /
title: "Homepage"
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

I am **Chenxiao Fan**, a first-year Master's student in the [Lab of Data Science (LDS)](https://data-science.ustc.edu.cn/) at the [University of Science and Technology of China (USTC)](https://www.ustc.edu.cn/), advised by [Prof. Xiangnan He](https://hexiangnan.github.io/) and [Prof. Fuli Feng](https://fulifeng.github.io/).  

I received my Bachelor's degree in Electronic Information Engineering from the [School of Information Science and Technology](https://sist.ustc.edu.cn/), USTC, in 2025. Currently, I am pursuing my Master's degree in Intelligent Science and Technology at the [School of Artificial Intelligence and Data Science](https://saids.ustc.edu.cn/), USTC.  

My research interests include **large language models (LLMs)**, **recommender systems**, and **reinforcement learning**. Outside of research, I enjoy traveling, exploring local cuisine, and listening to Mandarin pop music. I hope to continue growing as a researcher while maintaining a balanced and fulfilling life.

# 🔥 News
- *2026.05*: &nbsp;🎉🎉 One paper is accepted by **KDD'26** about generative recommendation.
- *2026.04*: &nbsp;🎉🎉 One survey paper is accepted by **iNew Medicine** about medical reasoning with LLMs.
- *2025.09*: &nbsp;🎉🎉 One paper is accepted by **NeurIPS'25** as a **Spotlight** about medication recommendation.
- *2025.04*: &nbsp;🎉🎉 One paper is accepted by **SIGIR'25** about flow-guided LLM recommendation.

# 📑 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KDD 2026</div><img src='images/UGR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Uncertainty-aware Generative Recommendation

**Chenxiao Fan**, Chongming Gao, Yaxin Gong, Haoyan Liu, Fuli Feng, Xiangnan He

[**Paper**](https://arxiv.org/pdf/2602.11719)
[**Code**](https://github.com/cxfann/UGR)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025 <strong>Spotlight</strong></div><img src='images/FLAME.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Fine-grained List-wise Alignment for Generative Medication Recommendation

**Chenxiao Fan**, Chongming Gao, Wentao Shi, Yaxin Gong, Zihao Zhao, Fuli Feng

[**Paper**](https://arxiv.org/pdf/2505.20218)
[**Code**](https://github.com/cxfann/Flame)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SIGIR 2025</div><img src='images/Flower.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Process-Supervised LLM Recommenders via Flow-guided Tuning

Chongming Gao<sup>#</sup>, Mengyao Gao<sup>#</sup>, **Chenxiao Fan**, Shuai Yuan, Wentao Shi, Xiangnan He

<sup>#</sup>Equal contribution 

[**Paper**](https://arxiv.org/pdf/2503.07377)
[**Code**](https://github.com/Mr-Peach0301/Flower)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">iNew Medicine</div><img src='images/med_survey.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Medical Reasoning with Large Language Models: A Survey and MR-Bench

Xiaohan Ren, **Chenxiao Fan**, Wenyin Ma, Hongliang He, Chongming Gao, Xiaoyan Zhao, Fuli Feng

[**Paper**](https://arxiv.org/pdf/2604.08559)
[**Code**](https://github.com/RXH04-USTC/Medical-Reasoning-Survey)
</div>
</div>

# 📝 Preprints

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/PAD-Rec.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Position-Aware Drafting for Inference Acceleration in LLM-Based Generative List-Wise Recommendation

Jiaju Chen, Chongming Gao, **Chenxiao Fan**, Haoyan Liu, Qingpeng Cai, Peng Jiang, Xiangnan He

[**Paper**](https://arxiv.org/pdf/2604.27747)
[**Code**](https://github.com/Jiaju-Chen/PAD-Rec)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/TriRec.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Breaking User-Centric Agency: A Tri-Party Framework for Agent-Based Recommendation

Yaxin Gong, Chongming Gao, **Chenxiao Fan**, Wenjie Wang, Fuli Feng, Xiangnan He

[**Paper**](https://arxiv.org/pdf/2603.10673)
[**Code**](https://github.com/Marfekey/TriRec)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/LAMO.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Fine-grained Alignment of Large Language Models for General Medication Recommendation without Overprescription

Zihao Zhao<sup>#</sup>, **Chenxiao Fan**<sup>#</sup>, Junlong Liu, Zheng Wang, Xiangnan He, Chongming Gao, Juan Li, Fuli Feng 

<sup>#</sup>Equal contribution 

[**Paper**](https://arxiv.org/pdf/2503.03687)
[**Code**](https://github.com/zzhUSTC2016/LAMO)
</div>
</div>

# 🎖 Honors and Awards
- *2026*: 深信服奖学金
- *2025*: First-Class Scholarship for Graduate Students  
- *2025*: Outstanding Graduate of Anhui Province  
- *2023*: National Scholarship (**for top 2% students**)  
- *2023*: Song Qing Ling Scholarship  
- *2021, 2022, 2023*: Scholarship for Talents in Information Technology  
- *2021, 2022, 2024*: Excellent Student Scholarship

# 📖 Educations
- *2025.09 – 2028.06 (expected)*, M.Eng. in Intelligent Science and Technology, School of Artificial Intelligence and Data Science, University of Science and Technology of China
- *2021.09 – 2025.06*, B.Eng. in Electronic Information Engineering, School of Information Science and Technology, University of Science and Technology of China

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->