---
title: Commit View
description: Write commit messages with a character counter and optional AI generation.
---

The Commit View opens when you press `c` from the File View with staged files. It provides a text input for writing your commit message, along with a character counter and optional AI-powered message generation.

## Writing a Commit Message

Type your message directly. A cursor shows your current position in the input field.

## Character Counter

Below the input, a counter displays the current length of your message in the format `N/72`, where 72 is the conventional maximum length for a commit subject line.

The counter changes color based on the length:

| Length | Color | Meaning |
|--------|-------|---------|
| Under 50 | Default | Good length |
| 50 to 72 | Yellow | Approaching the limit |
| Over 72 | Red | Exceeds the conventional limit |

The counter is a visual guide. Froggit does not prevent you from committing longer messages.

## AI Commit Messages

If you have an active [GitHub Copilot](/integrations/copilot-ai/) subscription, a purple `tab AI` indicator appears in the controls bar. Press `Tab` to generate a commit message based on your staged changes.

A spinner animation shows while the message is being generated. Once ready, the message appears in the input field and you can edit it before committing.

## Controls

| Key | Action |
|-----|--------|
| `Enter` | Confirm and create the commit |
| `Backspace` | Delete a character |
| `Tab` | Generate an AI commit message (when Copilot is available) |
| `Esc` | Cancel and return to the File View |
