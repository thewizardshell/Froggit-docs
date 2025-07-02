---
title: Install Froggit
description: Learn how to install Froggit, a terminal-based Git assistant, on your system.
---


## System Requirements

Before installing Froggit, ensure your system meets the following requirements:

- `git` installed and available in your terminal
- **Nerd Fonts** installed (recommended for full UI support)
- **[Go ≥ 1.20](https://golang.org/dl/)** only if building from source
- Optional: [GitHub CLI (`gh`)](https://cli.github.com/) for GitHub integration

> If GitHub CLI is installed and authenticated (`gh auth login`), Froggit will detect and use it automatically for repository management.

---

## Installation Options

### Option 1: Install via Script (Recommended)

#### Linux / macOS

```bash
curl -s https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.sh | bash
````

> This script will download the latest Froggit binary and install it into `/usr/local/bin` or another appropriate location.

#### Windows (PowerShell)

Run PowerShell as Administrator and execute:

```powershell
iwr https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.ps1 -UseBasicParsing | iex
```

The script handles download, installation, and optionally adds Froggit to your system PATH.

---

### Option 2: Manual Download

1. Visit the [Releases page](https://github.com/thewizardshell/froggit/releases).
2. Download the latest binary for your platform.
3. Move the executable to a directory in your system’s `PATH`, such as:

   * `/usr/local/bin` (Linux/macOS)
   * A folder like `C:\Program Files\tools\` (Windows)

---

### Option 3: Build from Source

If you prefer building manually:

```bash
git clone https://github.com/thewizardshell/froggit.git
cd froggit
go mod tidy
go build
```

Copy the resulting binary to a location in your `PATH`.

---

## Verifying Installation

Once installed, verify by running:

```bash
froggit -help
```

You should see a list of supported commands and options.

---

## Recommended Terminal Setup

Froggit’s UI is optimized for terminals with Unicode and Nerd Font support. Recommended terminals include:

* [WezTerm](https://wezfurlong.org/wezterm/)
* [Alacritty](https://github.com/alacritty/alacritty)
* [Kitty](https://sw.kovidgoyal.net/kitty/)
* [Windows Terminal](https://github.com/microsoft/terminal)

### Using Nerd Fonts in VSCode Terminal

If using VSCode:

1. Open settings (`Ctrl+,` or `Cmd+,`)
2. Search for `terminal.integrated.fontFamily`
3. Set it to a Nerd Font you've installed, for example:

```json
"CaskaydiaCove Nerd Font", "MesloLGS NF", monospace
```