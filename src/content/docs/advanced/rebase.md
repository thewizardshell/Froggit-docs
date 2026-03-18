---
title: Rebase
description: Rebase your branch onto another with conflict detection and resolution.
---

The Rebase view lets you rebase the current branch onto another branch, with automatic conflict detection and controls to proceed or abort.

## Starting a Rebase

Enter [Advanced Mode](/advanced/advanced-mode) by pressing `A` from the File View, then press `R` to open the Rebase view.

## Selecting a Base Branch

Navigate the branch list with the arrow keys and press `Enter` to select the branch you want to rebase onto. A checkmark marks your selection. Press `R` to confirm and start the rebase.

## Conflict Handling

If conflicts arise during the rebase, Froggit displays the list of conflicted files and presents two options:

| Key | Action |
|-----|--------|
| `P` | Proceed after resolving conflicts externally (`git rebase --continue`) |
| `X` | Abort the rebase and return to the original state (`git rebase --abort`) |

Resolve the conflicts in your editor, then press `P` in Froggit to continue.

## After a Successful Rebase

When the rebase completes cleanly, Froggit displays a success message and returns to the File View with the updated state.

## Controls

| Key | Action |
|-----|--------|
| `Up` / `Down` | Navigate branches |
| `Enter` | Select a branch |
| `R` | Confirm the rebase |
| `P` | Proceed after conflict resolution |
| `X` | Abort the rebase |
| `Esc` | Cancel and return to File View |
