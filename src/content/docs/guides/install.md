---
title: Install Froggit
description: Learn how to install Froggit, a terminal-based Git assistant, on your system.
---

**Froggit** is a terminal-based Git assistant written in Go. It offers a modern and interactive interface to perform common Git tasks such as staging, committing, pushing, and managing branches all from your terminal.

## Installation

You can install Froggit in two main ways: by downloading a release binary or running the platform-specific installer script.

### Option 1: Use the Installer Script (Recommended)

##▸ Linux / macOS

Run the following commands in your terminal:

```bash
curl -s https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.sh | bash
chmod +x install.sh
./install.sh
````

This script will download the latest Froggit release, confirm installation, and install it in `/usr/local/bin` or another suitable location.

#### ▸ Windows (PowerShell)

Open PowerShell **as Administrator** (recommended) and run:

```powershell
iwr https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.ps1 -UseBasicParsing | iex
.\install.ps1
```

The script will guide you through the installation, check permissions, download the latest release, and optionally add Froggit to your system PATH.

---

### Option 2: Download the Latest Release Manually

1. Go to the [Releases page](https://github.com/thewizardshell/froggit/releases).
2. Download the binary for your operating system.
3. Place the executable in a folder included in your system PATH, or move it to a directory like `/usr/local/bin` (Linux/macOS) or a suitable folder in Windows.

---

## Verify Installation

After installing, run:

```bash
froggit -help
```

You should see a list of available commands and options.

---

## Requirements

* [Go](https://golang.org/dl/) **1.20 or newer** (only if you plan to build from source)
* `git` installed and accessible in your terminal
* **Nerd Fonts** installed (optional but recommended for best UI experience)

---

## Recommended Terminal Setup

To enjoy Froggit's UI fully, use a terminal with Unicode and Nerd Font support:

* [WezTerm](https://wezfurlong.org/wezterm/)
* [Alacritty](https://github.com/alacritty/alacritty)
* [Kitty](https://sw.kovidgoyal.net/kitty/)
* [Windows Terminal](https://github.com/microsoft/terminal) (configure with Nerd Fonts)

---

### Configuring Nerd Fonts in VSCode Terminal

If using VSCode’s integrated terminal:

1. Open Settings (`Ctrl+,` or `Cmd+,`).
2. Search for `terminal.integrated.fontFamily`.
3. Set it to a Nerd Font you have installed, e.g.:

```json
"CaskaydiaCove Nerd Font", "Fira Code Nerd Font", "MesloLGS NF", monospace
```

---

If you prefer building from source, clone the repo and run:

```bash
git clone https://github.com/thewizardshell/froggit.git
cd froggit
go mod tidy
go build
```

Place the resulting executable in your PATH.