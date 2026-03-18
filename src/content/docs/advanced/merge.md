---
title: Merge
description: Merge branches with conflict detection and resolution inside Froggit.
---

The Merge view allows you to merge one branch into another directly from the terminal interface, with built-in conflict detection and resolution controls.

## Starting a Merge

Enter [Advanced Mode](/advanced/advanced-mode) by pressing `A` from the File View, then press `M` to open the Merge view.

## Selecting a Branch

The view displays all local branches. Navigate with the arrow keys and press `Enter` to select the branch you want to merge. A checkmark appears next to the selected branch. Once selected, press `M` to confirm and execute the merge.

## Conflict Handling

If the merge produces conflicts, Froggit detects them automatically and displays the list of conflicted files. At this point, two options are available:

| Key | Action |
|-----|--------|
| `P` | Proceed with the merge after resolving conflicts externally (`git merge --continue`) |
| `X` | Abort the merge and restore the previous state (`git merge --abort`) |

Resolve the conflicts in your editor of choice, then return to Froggit and press `P` to continue.

## After a Successful Merge

When the merge completes without conflicts, Froggit displays a success message and offers the option to push the result to the remote.

## Controls

| Key | Action |
|-----|--------|
| `Up` / `Down` | Navigate branches |
| `Enter` | Select a branch |
| `M` | Confirm the merge |
| `P` | Proceed after conflict resolution |
| `X` | Abort the merge |
| `Esc` | Cancel and return to File View |
