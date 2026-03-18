---
title: Quick Start
description: What happens when you launch Froggit for the first time outside a Git repository.
---

When you run Froggit in a directory that is not a Git repository, it opens the Quick Start flow. This guided setup helps you initialize or connect a repository before you begin working.

## Options

The Quick Start view presents three options:

1. **Initialize a new repository** creates a new Git repository in the current directory using `git init`. Once complete, Froggit opens the File View so you can begin staging and committing files.

2. **Clone from GitHub** lists your personal GitHub repositories and lets you clone one into the current directory. This option requires the GitHub CLI (`gh`) to be installed and authenticated.

3. **Create on GitHub** creates a new repository on your GitHub account and clones it locally. This also requires the GitHub CLI.

Options that depend on the GitHub CLI are only available when `gh` is detected on your system.

## Controls

| Key | Action |
|-----|--------|
| `Up` / `Down` | Navigate options |
| `Enter` | Select the highlighted option |
| `1` / `2` / `3` | Quick select an option by number |
| `q` | Quit |
