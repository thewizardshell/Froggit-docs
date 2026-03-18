---
title: Installation
description: Learn how to install Froggit on your system.
---

## System Requirements

Before installing Froggit, ensure your system meets the following requirements:

- `git` installed and available in your terminal
- **Nerd Fonts** installed for full icon support in the interface
- **[Go 1.20 or later](https://golang.org/dl/)** only if building from source
- Optional: [GitHub CLI (`gh`)](https://cli.github.com/) for GitHub integration features

If GitHub CLI is installed and authenticated (`gh auth login`), Froggit detects and uses it automatically for repository management. See [GitHub CLI Integration](/integrations/github-cli/) for details.

## Installation Options

### Option 1: Install via Script (Recommended)

#### Linux and macOS

```bash
curl -s https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.sh | bash
```

This script downloads the latest Froggit binary and installs it into `/usr/local/bin` or another appropriate location.

#### Windows (PowerShell)

Run PowerShell as Administrator and execute:

```powershell
iwr https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.ps1 -UseBasicParsing | iex
```

The script handles download, installation, and optionally adds Froggit to your system PATH.

### Option 2: Manual Download

1. Visit the [Releases page](https://github.com/thewizardshell/froggit/releases).
2. Download the ZIP file for your platform and architecture.
3. Extract the binary and move it to a directory in your system PATH, such as `/usr/local/bin` on Linux and macOS or a folder like `C:\Program Files\tools\` on Windows.

All Linux binaries are compiled as fully static executables. They work on any Linux distribution, including NixOS, without requiring dynamic libraries.

### Option 3: Build from Source

```bash
git clone https://github.com/thewizardshell/froggit.git
cd froggit
CGO_ENABLED=0 go build -ldflags="-s -w" -o froggit .
```

Copy the resulting binary to a location in your PATH. The `CGO_ENABLED=0` flag produces a static binary, and `-ldflags="-s -w"` strips debug information to reduce the binary size.

## Verifying Installation

Once installed, verify by running:

```bash
froggit --version
```

You should see the current version number. Run `froggit --help` to see available flags.

## Configuration

After installation, you can optionally create a `froggit.yml` configuration file to customize the interface. See [Configuration](/guides/configuration/) for details.

## Recommended Terminal Setup

Froggit's interface is optimized for terminals with Unicode and Nerd Font support. Recommended terminals:

- [WezTerm](https://wezfurlong.org/wezterm/)
- [Alacritty](https://github.com/alacritty/alacritty)
- [Kitty](https://sw.kovidgoyal.net/kitty/)
- [Ghostty](https://ghostty.org/)
- [Windows Terminal](https://github.com/microsoft/terminal)

### Using Nerd Fonts in VS Code

If using VS Code, open settings (`Ctrl+,` or `Cmd+,`), search for `terminal.integrated.fontFamily`, and set it to a Nerd Font:

```json
"CaskaydiaCove Nerd Font", "MesloLGS NF", monospace
```
