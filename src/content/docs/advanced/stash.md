---
title: Stash
description: Save, apply, and manage stashes from the Stash manager view.
---

The Stash manager lets you temporarily set aside uncommitted changes and restore them later. This is useful when you need to switch context without committing incomplete work.

## Opening the Stash Manager

Enter [Advanced Mode](/advanced/advanced-mode) by pressing `A` from the File View, then press `S` to open the Stash view.

## Viewing Stashes

The view lists all saved stashes with their reference and description. If you have unstaged changes in your working directory, a notice appears at the top of the view.

## Saving a Stash

Press `s` to save your current changes as a new stash. This opens a message input where you can type an optional description. Press `Enter` to save or `Esc` to cancel. If you leave the message empty, a default description is used.

## Working with Existing Stashes

Navigate the stash list with the arrow keys. The following operations are available:

| Key | Action |
|-----|--------|
| `Enter` | Apply the selected stash (keeps it in the list) |
| `p` | Pop the selected stash (apply and remove from the list) |
| `d` | Drop the selected stash (permanently remove it, with confirmation) |
| `v` | View the full diff contents of the selected stash |

## Controls

| Key | Action |
|-----|--------|
| `Up` / `Down` | Navigate stashes |
| `Enter` | Apply stash |
| `p` | Pop stash |
| `d` | Drop stash |
| `v` | View stash contents |
| `s` | Save a new stash |
| `Esc` | Return to File View |
| `?` | Show help |
