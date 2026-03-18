---
title: File View
description: Manage and stage modified files in your working directory.
---

The File View is the main screen in Froggit. It shows all modified files in your Git working directory and provides controls for staging, unstaging, previewing changes, and navigating to other views.

## File Grouping

Files are organized into two sections with visual headers:

**Staged** files appear first, marked with a `[✓]` checkbox. These are ready to be committed.

**Unstaged** files appear below, marked with `[ ]`. These have changes that have not yet been added to the staging area.

## File Status Indicators

Each file displays a status indicator next to its name:

| Indicator | Meaning | Color |
|-----------|---------|-------|
| `M` | Modified | Orange |
| `A` | Added (new file) | Green |
| `D` | Deleted | Magenta |
| `?` | Untracked | Cyan |
| `C` | Conflict | Red |

## File Icons

When using a terminal with Nerd Fonts, each file displays an icon based on its file extension. This covers common file types including Go, JavaScript, TypeScript, Python, Rust, HTML, CSS, JSON, YAML, Markdown, and many others.

## Summary

At the top of the view, a summary shows the number of staged and unstaged files. If new commits are available on the remote repository, a warning appears suggesting you should pull.

## Scrolling

When the file list is longer than the visible area, scroll indicators appear showing how many files are above or below the current viewport. The cursor tracks your position as you navigate.

## Controls

| Key | Action |
|-----|--------|
| `Up` / `Down` | Navigate through the file list |
| `Space` | Stage or unstage the selected file |
| `a` | Stage all files |
| `u` | Unstage all staged files |
| `d` | Open a [diff preview](/advanced/diff-preview/) for the selected file |
| `x` | Discard changes on the selected file (a confirmation dialog appears) |
| `c` | Open the [Commit View](/guides/commit/) (only available when files are staged) |
| `r` | Refresh the file status |
| `f` | Fetch from the remote |
| `l` | Pull from the remote |
| `p` | Push to the remote |
| `b` | Open the [Branch View](/guides/branches/) |
| `m` | Open the [Remote View](/guides/remotes/) |
| `A` | Enter [Advanced Mode](/advanced/advanced-mode/) for merge, rebase, stash, and log operations |
| `?` | Show help |
