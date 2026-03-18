---
title: GitHub CLI
description: Clone and create repositories on GitHub directly from Froggit.
---

Froggit integrates with the GitHub CLI (`gh`) to provide repository management features directly in the terminal interface. When `gh` is installed and authenticated, additional options become available in the Quick Start flow.

## Requirements

Install the GitHub CLI from [cli.github.com](https://cli.github.com/) and authenticate with:

```bash
gh auth login
```

Froggit detects the presence of `gh` automatically at startup. No additional configuration is needed.

## Available Features

### Clone from GitHub

When running Froggit outside a Git repository, the Quick Start flow includes an option to clone from GitHub. Selecting it opens a repository browser that lists your personal GitHub repositories with their descriptions.

Navigate the list with the arrow keys and press `c` to clone the selected repository into the current directory. A confirmation dialog appears before the clone begins.

### Create on GitHub

The Quick Start flow also offers an option to create a new repository on your GitHub account. This creates the repository remotely and clones it locally in a single step.

## When GitHub CLI Is Not Installed

If `gh` is not found on your system, the GitHub-related options in the Quick Start flow are not displayed. Froggit works normally for all local Git operations without it.
