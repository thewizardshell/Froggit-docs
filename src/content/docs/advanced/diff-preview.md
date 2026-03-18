---
title: Diff Preview
description: View file changes before staging or committing with the inline diff preview.
---

The Diff Preview lets you inspect exactly what changed in a file before you decide to stage or commit it. This removes the need to leave Froggit to review changes.

## Opening the Diff

From the File View, navigate to any file and press `d`. Froggit will display the diff for that file in a scrollable view.

For unstaged files, it shows the working directory changes compared to the index. For staged files, it shows the staged changes compared to the last commit.

## Reading the Diff

The diff output uses color coding to make changes easy to scan:

| Color | Meaning |
|-------|---------|
| Green | Added lines |
| Red | Removed lines |
| Cyan | Hunk headers (line range indicators) |
| Default | Context lines (unchanged) |

## Navigation

The diff is displayed in a scrollable viewport of 20 lines. A position indicator at the bottom shows your current position in the file (for example, `5/120`).

| Key | Action |
|-----|--------|
| `Up` / `Down` | Scroll through the diff |
| `Esc` | Return to the File View |
