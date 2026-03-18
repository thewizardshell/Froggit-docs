---
title: Navigation
description: Learn how to navigate through Froggit's interface and understand its views.
---

Froggit is organized into a set of views, each focused on a specific task. The interface is entirely keyboard-driven, and a controls bar at the bottom of the screen always shows the available actions for the current view.

## View Structure

### Core Views

These are the views you will use most often:

| View | Purpose |
|------|---------|
| **File View** | The main screen. Shows modified files, lets you stage, unstage, and navigate to other views |
| **Commit View** | Write and confirm a commit message |
| **Branch View** | List, switch, create, and delete branches |
| **Remote View** | List, add, and delete remote repositories |
| **Add Remote** | Input form for adding a new remote (name and URL) |
| **New Branch** | Input form for creating a new branch |

### Advanced Views

Accessible through [Advanced Mode](/advanced/advanced-mode/) by pressing `A` from the File View:

| View | Purpose |
|------|---------|
| **Log Graph** | Interactive commit history with ASCII branch visualization |
| **Merge** | Select a branch and merge it into the current branch |
| **Rebase** | Select a branch and rebase the current branch onto it |
| **Stash** | Save, apply, pop, and drop stashed changes |
| **Diff Preview** | View the changes in a specific file before staging |

### Setup Views

Shown when Froggit runs outside a Git repository:

| View | Purpose |
|------|---------|
| **Quick Start** | Initialize, clone, or create a repository |
| **Repository List** | Browse your GitHub repositories for cloning |
| **Clone Confirm** | Confirm before cloning a selected repository |

### Utility Views

| View | Purpose |
|------|---------|
| **Help** | Extended reference of keyboard shortcuts |
| **Confirm Dialog** | Yes/no prompt for destructive actions (delete branch, discard changes, drop stash) |

## General Navigation

These patterns apply across the entire interface:

**Esc** returns to the previous view. From most views, this takes you back to the File View.

**q** quits the application. Available from the File View, Branch View, Remote View, and Help View.

**Arrow keys** (Up/Down) navigate lists in every view that contains one.

**The controls bar** at the bottom of every view shows exactly which keys are available. It updates automatically based on context. For example, the commit shortcut only appears when files are staged.

## Status Messages

When you perform an action such as staging a file, pushing, or committing, a status message appears at the bottom of the screen. Messages are color-coded: green for success, red for errors, and orange for warnings. Messages clear automatically after a few seconds to keep the interface clean.

For the full list of keyboard shortcuts, see the [Keyboard Shortcuts](/reference/keyboard-shortcuts/) reference.
