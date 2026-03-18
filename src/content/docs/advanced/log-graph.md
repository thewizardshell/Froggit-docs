---
title: Log Graph
description: View your commit history as an interactive ASCII graph.
---

The Log Graph displays your repository's commit history as an interactive, scrollable ASCII graph. It shows the branch structure, commit hashes, and commit messages in a compact format.

## Opening the Log Graph

Enter [Advanced Mode](/advanced/advanced-mode) by pressing `A` from the File View, then press `L` to open the Log Graph.

## Reading the Graph

Each line in the graph represents a commit and includes:

| Element | Description |
|---------|-------------|
| Graph symbols | Visual indicators of branch structure and merge points, displayed in orange |
| Commit hash | The abbreviated commit hash, displayed in blue |
| Commit message | The first line of the commit message |

The frog cursor marks the currently selected line.

## Navigation

The graph is displayed in a scrollable viewport of 15 lines. A position indicator at the bottom shows your location (for example, `3/50`).

| Key | Action |
|-----|--------|
| `Up` / `Down` | Navigate through commits |
| `Esc` | Return to File View |
