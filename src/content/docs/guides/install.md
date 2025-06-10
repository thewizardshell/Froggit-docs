---
title: Install Froggit
description: How to install Froggit on your system.
---

Froggit is a terminal-based Git assistant written in Go that makes staging, committing, pushing, and switching branches easier and more interactive.

## Installation

Follow these steps to install Froggit on your system:

### 1. Download the latest release

Visit the [Releases page](https://github.com/your-username/froggit/releases) and download the binary for your operating system.

- **Linux/macOS**:
  ```bash
  chmod +x froggit
  sudo mv froggit /usr/local/bin

* **Windows**:
  Download the `.exe` file and optionally add it to your PATH.

### 2. Using `go install` (for developers)

You can also install Froggit directly from the source if you have Go installed:

```bash
go install github.com/your-username/froggit@latest
```

Make sure your `$GOPATH/bin` (or `$HOME/go/bin`) is in your `PATH` to use the `froggit` command globally.

### 3. Verify installation

Once installed, run:

```bash
froggit --help
```

You should see a list of available commands and options.

## Requirements

* Go 1.20 or newer (if building from source)
* Git must be installed and available in your system `PATH`
* **Nerd Fonts** installed on your system (required for icon rendering and better aesthetics)

## Recommended Terminal Setup (Optional)

For the best experience and visual appearance, it is **recommended** to use terminals that support Nerd Fonts and have good Unicode rendering, such as:

* [WezTerm](https://wezfurlong.org/wezterm/)
* [Alacritty](https://github.com/alacritty/alacritty)

### Configuring Fonts in VSCode Terminal

If you use VSCode's integrated terminal, configure it to use a Nerd Font to properly display icons:

1. Open VSCode settings (`Ctrl+,` or `Cmd+,`).
2. Search for `terminal.integrated.fontFamily`.
3. Set it to a Nerd Font installed on your system, for example:
   `"CaskaydiaCove Nerd Font", "Fira Code Nerd Font", "MesloLGS NF", monospace`

> Note: Using Nerd Fonts and these recommended terminals is optional but significantly improves the UI experience.
