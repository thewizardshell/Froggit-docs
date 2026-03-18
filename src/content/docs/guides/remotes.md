---
title: Remote View
description: View and manage your Git remote repositories.
---

The Remote View lists your Git remote repositories. Open it by pressing `m` from the File View.

Each remote is displayed with its name and URL.

## Adding a Remote

Press `n` to open the Add Remote form. You will be prompted to enter a name and a URL for the remote. Use `Tab` to switch between the fields, `Enter` to confirm, and `Esc` to cancel.

## Deleting a Remote

Press `d` on the selected remote to delete it. A confirmation dialog appears before the remote is removed.

## Push, Pull, and Fetch

Remote synchronization shortcuts are available from the File View:

| Key | Action |
|-----|--------|
| `p` | Push commits to the remote |
| `l` | Pull changes from the remote |
| `f` | Fetch updates from the remote |

The pull shortcut is available when Froggit detects that new commits exist on the remote.

## Controls

| Key | Action |
|-----|--------|
| `Up` / `Down` | Navigate remotes |
| `n` | Add a new remote |
| `d` | Delete the selected remote |
| `Esc` | Return to the File View |
| `q` | Quit |
