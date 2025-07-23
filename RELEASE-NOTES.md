# 🚀 Claisen SEO Audit Action v1.0.0

**Claisen SEO Audit Action** is a GitHub Action that automatically scans all Markdown documentation in your repository for essential SEO tags and fails the build if any are missing. This ensures your docs are always optimized for search and engagement.

---

## Features
- **Automated SEO Auditing**: Scans all `.md` files in your repository.
- **Required Tag Checks**:
  - At least one **quiz link** (e.g., links containing `/quiz/`)
  - At least one **blog link** (e.g., links containing `/blog/`)
  - A **meta description** (e.g., `<!-- meta: ... -->`)
- **Fail-fast**: Fails the workflow if any file is missing required tags, with clear, actionable output.
- **Easy Integration**: Plug-and-play with any GitHub repository.

---

## Usage

Add the following to your workflow file (e.g., `.github/workflows/seo-audit.yml`):

```yaml
name: SEO Audit
on:
  push:
  pull_request:
jobs:
  seo-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run SEO Audit
        uses: Claisen-Web/claisen-seo-audit-action@v1.0.0
```

---

## How It Works

For each Markdown file, the action checks for:
- **Quiz Link**: At least one Markdown link containing `/quiz/` in the URL.
- **Blog Link**: At least one Markdown link containing `/blog/` in the URL.
- **Meta Description**: At least one HTML comment starting with `meta:`.

If any of these are missing, the action will:
- Print a ❌ error for each missing tag per file
- Exit with a non-zero code, causing the workflow to fail

---

## Example Output

**Failure:**
```
❌ docs/intro.md is missing:
  - quiz link
  - meta description
✅ docs/seo-guide.md has all required tags.

Some files are missing required SEO tags.
```

**Success:**
```
✅ docs/intro.md has all required tags.
✅ docs/seo-guide.md has all required tags.

All Markdown files passed SEO checks!
```

---

## License
MIT

---

## Support
For questions, issues, or support, please open an issue in this repository. 