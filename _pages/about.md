---
permalink: /
title: "Tengfei Ma (马腾飞)"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

**Assistant Professor of Biomedical Informatics, Stony Brook University**

I am an assistant professor in the Department of [Biomedical Informatics](https://bmi.stonybrookmedicine.edu/), with affiliations in [Computer Science](https://www.cs.stonybrook.edu/) and [Applied Mathematics & Statistics](https://www.stonybrook.edu/commcms/ams/) at Stony Brook University.

Previously, I was a staff research scientist at IBM T. J. Watson Research Center (2016–2023) and a researcher at IBM Research–Tokyo (2015–2016). I received my Ph.D. from the University of Tokyo, M.S. from Peking University, and B.E. from Tsinghua University.

My research interests include machine learning, natural language processing and biomedical informatics, with a current focus on deep graph learning. Profiles: [BMI](https://bmi.stonybrookmedicine.edu/people/tengfei_ma) · [AI Institute](https://ai.stonybrook.edu/people/faculty/TengfeiMa) · [Google Scholar](https://scholar.google.com/citations?user=9OvNakkAAAAJ&hl=en)

**Email:** Tengfei.Ma (at) stonybrook (dot) edu &nbsp;or&nbsp; Tengfei.Ma (at) stonybrookmedicine (dot) edu

<p class="eyebrow">Research directions</p>
<div class="direction-grid direction-grid--compact">
{% for t in site.data.pub_topics %}
  <a class="direction-card" href="{{ '/research/' | relative_url }}#{{ t.id }}">
    <span class="direction-card__icon">{% include topic-icon.html icon=t.icon %}</span>
    <span class="direction-card__name">{{ t.name }}</span>
    <span class="direction-card__desc">{{ t.desc }}</span>
  </a>
{% endfor %}
</div>

[More about my research →]({{ '/research/' | relative_url }})

## News & updates

{% include news-list.html limit=6 %}

[All news →]({{ '/news/' | relative_url }})

<div class="connect" markdown="1">

<p class="eyebrow">Let's connect</p>

## Interested in working together?

I welcome collaborations with motivated students and researchers with strong backgrounds in machine learning and mathematics.

At Stony Brook, I work with students from CS, BMI, and AMS. Students in these departments are welcome to contact me about collaboration and RA opportunities. Master's students are welcome to pursue independent study for credit (e.g., CSE 593); I currently do not have master's RA positions.

</div>
