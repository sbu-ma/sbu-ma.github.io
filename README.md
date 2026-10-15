# Tengfei Ma — Academic Homepage

Personal academic website built on the [AcademicPages](https://github.com/academicpages/academicpages.github.io) Jekyll template, migrated from <https://sites.google.com/site/matf0123/>.

## Deploy to GitHub Pages

1. Create a repository named **`<your-github-username>.github.io`** (e.g. `sbu-ma.github.io`).
2. Push the contents of this folder to its `main` (or `master`) branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   The included workflow (`.github/workflows/jekyll.yml`) builds and deploys on every push.
4. If your username is not `sbu-ma`, update `url`, `repository` and `author.github` in `_config.yml`.

## Where to edit things

| What | File |
|---|---|
| Sidebar (photo, name, links) & site title | `_config.yml` → `author:` |
| Home page (bio, research highlights, collaboration) | `_pages/about.md` |
| News (home shows the 8 newest; `/news/` shows all) | `_data/news.yml` |
| **Publications** (one entry per paper) | `_data/publications.yml` |
| Publication topics (names, descriptions, order) | `_data/pub_topics.yml` |
| Talks / tutorials / service | `_pages/talks.md` |
| Resources (data & code) | `_pages/resources.md` |
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
  topics: [graph, health]                    # ids from _data/pub_topics.yml
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
