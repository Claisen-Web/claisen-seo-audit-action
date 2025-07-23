# Claisen SEO Audit Action

A GitHub Action that scans your Markdown documentation for required SEO tags—**quiz links**, **blog links**, and **meta descriptions**—and fails the build if any are missing. This ensures your documentation meets essential SEO standards and helps drive engagement and discoverability.

---

## Features
- **Automated SEO Auditing**: Scans all Markdown (`.md`) files in your repository.
- **Required Tag Checks**:
  - At least one **quiz link** (e.g., links containing `/quiz/`)
  - At least one **blog link** (e.g., links containing `/blog/`)
  - A **meta description** (e.g., `<!-- meta: ... -->`)
- **Fail-fast**: Fails the workflow if any file is missing required tags, with clear output.
- **Easy Integration**: Plug-and-play with any GitHub repository.

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [How It Works](#how-it-works)
- [Output](#output)
- [Contributing](#contributing)
- [License](#license)
- [Contact & Support](#contact--support)

---

## Installation

Add this action to your repository. No additional setup is required beyond Node.js dependencies (handled automatically by GitHub Actions).

---

## Usage

### 1. Add the Action to Your Workflow

Create (or update) `.github/workflows/seo-audit.yml`:

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
        uses: ./  # If using locally, or 'your-org/claisen-seo-audit-action@v1' if published
```

### 2. Commit and Push

```sh
git add .
git commit -m "Add SEO audit GitHub Action"
git push
```

### 3. View Results

Go to the **Actions** tab in your GitHub repository. The workflow will run on every push and pull request, showing pass/fail status and detailed logs.

---

## Configuration

No configuration is required for default operation. The action scans all `.md` files in the repository, excluding `node_modules`.

---

## How It Works

For each Markdown file, the action checks for:

- **Quiz Link**: At least one Markdown link containing `/quiz/` in the URL.
  - Example: `[Take the quiz](/quiz/seo-basics)`
- **Blog Link**: At least one Markdown link containing `/blog/` in the URL.
  - Example: `[Read our blog](/blog/seo-tips)`
- **Meta Description**: At least one HTML comment starting with `meta:`.
  - Example: `<!-- meta: This page covers SEO best practices. -->`

If any of these are missing, the action will:
- Print a ❌ error for each missing tag per file
- Exit with a non-zero code, causing the workflow to fail

---

## Output

**Example (failure):**
```
❌ docs/intro.md is missing:
  - quiz link
  - meta description
✅ docs/seo-guide.md has all required tags.

Some files are missing required SEO tags.
```

**Example (success):**
```
✅ docs/intro.md has all required tags.
✅ docs/seo-guide.md has all required tags.

All Markdown files passed SEO checks!
```

---

## Local Testing

You can run the audit locally:

```sh
npm install
node index.js
```

---

## Contributing

Contributions are welcome! Please open issues or pull requests for bug fixes, enhancements, or new features.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a pull request

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact & Support

For questions, issues, or support, please open an issue in this repository.
