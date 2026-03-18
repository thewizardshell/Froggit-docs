---
title: GitHub Copilot AI
description: Generate commit messages automatically using your existing GitHub Copilot subscription.
---

Froggit can generate commit messages using GitHub Copilot. This feature requires no additional setup beyond having an active Copilot subscription authenticated through a supported editor.

## How It Works

When you open the Commit View and Copilot is available, a purple `tab AI` indicator appears in the controls bar. Press `Tab` to generate a commit message based on your staged changes.

Froggit reads your staged diff, sends it to the Copilot API, and returns a message formatted as a conventional commit (for example, `feat(auth): add token refresh logic`). The diff is truncated to 8,000 characters to stay within API limits.

A spinner animation shows while the message is being generated. Once complete, the message appears in the input field and you can edit it before committing.

## Requirements

Froggit uses your existing Copilot authentication tokens. It looks for credentials in the GitHub Copilot configuration directory:

| Platform | Location |
|----------|----------|
| Linux / macOS | `~/.config/github-copilot/` |
| Windows | `%LOCALAPPDATA%/github-copilot/` |

These tokens are created by editors with Copilot support, including VS Code with the Copilot extension, copilot.vim, copilot.lua, and Neovim with Copilot plugins. If you have Copilot working in your editor, it will work in Froggit.

## When Copilot Is Not Available

If no valid Copilot tokens are found, the AI option does not appear in the Commit View controls. Froggit functions normally without it. No error is shown.

## Controls

| Key | Action |
|-----|--------|
| `Tab` | Generate an AI commit message |
