---
title: File View
description: Manage and stage modified files in your working directory using Froggit.
---

The **File View** in Froggit displays all the modified files in your Git working directory with useful details and controls for staging, discarding, and navigating files.

### File List Details

Each file is shown with the following elements:

- **Modification status checkbox**:  
  - `[✓]` indicates the file is staged (ready to commit).  
  - `[ ]` indicates the file is unstaged (not yet staged).  
- **File icon** representing its type or extension.  
- **Filename**.  
- **Cursor indicator (``)** shows the currently selected file.

### Summary

At the top, you’ll see a summary showing:

- Number of files staged for commit.  
- Number of files modified but not staged.  
- A warning if new commits are available on the remote repository (suggesting you should pull).

### Controls

- `↑ / ↓`: Move the selection cursor up or down through the list of files.  
- `space`: Toggle staging/unstaging the selected file.  
- `x`: Discard changes on the selected file (only shown if there are modified files).  
- `c`: Go to the Commit view (only available if there is at least one staged file).  
- `?`: Show help information.

### Notes

- Additional controls like switching to Branch or Remote views, or push/pull actions, are handled in other views or menus.  
- The File View focuses on file staging and change discarding before committing.