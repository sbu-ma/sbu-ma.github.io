# Tengfei Ma — Academic Homepage

Personal academic website built on the [AcademicPages](https://github.com/academicpages/academicpages.github.io) Jekyll template, migrated from <https://sites.google.com/site/matf0123/>.


## Where to edit things

| What | File |
|---|---|
| Sidebar (photo, name, links) & site title | `_config.yml` → `author:` |
| Home page (bio, research directions, news, collaboration) | `_pages/about.md` |
| Research page (direction texts & representative work) | `_data/research.yml` (layout: `_pages/research.html`) |
| News (home shows the 8 newest; `/news/` shows all) | `_data/news.yml` |
| **Publications** (one entry per paper) | `_data/publications.yml` |
| Research directions / publication topics (4) | `_data/pub_topics.yml` |
| Selected publications (Research page) | add `selected: true` to an entry in `_data/publications.yml` |
| Talks / service | `_pages/talks.md` |
| Resources (code, data, book, tutorials) | `_pages/resources.md` |
| Top navigation bar | `_data/navigation.yml` |
| Profile photo | `images/profile.jpg` |

### Adding a publication

Add an entry near the top of `_data/publications.yml`:

```yaml
- title: "My New Paper"
  authors: "First Author, Tengfei Ma"        # "Tengfei Ma" is bolded automatically; * equal, † corresponding
  venue: "The 40th Conference on Something (ABC)"
  venue_short: "ABC 2027"                    # badge text
  year: 2027
  type: conference                           # conference | journal | workshop | preprint | tutorial | book | chapter
  topics: [graph, health]                    # graph | timeseries | language | health
  links:
    - {name: arXiv, url: "https://arxiv.org/abs/xxxx.xxxxx"}
    - {name: Code,  url: "https://github.com/..."}
  note: "Oral"                               # optional: Oral / Spotlight / Best Paper Award / footnotes
```

The Publications page renders both a **By Year** and a **By Topic** view, with topic filter chips and search.
Filtered views have shareable URLs, e.g. `/publications/?view=topic&topic=health`.

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve -l -H localhost   # then open http://localhost:4000
```
