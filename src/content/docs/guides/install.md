---
title: Install Froggit
description: Learn how to install Froggit, a terminal-based Git assistant, on your system.
---

**Froggit** is a terminal-based Git assistant written in Go. It offers a modern and interactive interface to perform common Git tasks such as staging, committing, pushing, and managing branches — all from your terminal.

## 🚀 Installation

You can install Froggit in two main ways: by downloading a release binary or building it from source.

### Download the Latest Release (Recommended for most users)

1. Go to the [Releases page](https://github.com/thewizardshell/froggit/releases).
2. Download the binary for your operating system.
3. Follow the steps below based on your OS:

#### ▸ Linux / macOS

```bash
chmod +x froggit
sudo mv froggit /usr/local/bin
```

This makes `froggit` available globally from your terminal.

#### ▸ Windows

* Download the `froggit.exe` file.
* (Optional) Add the folder containing `froggit.exe` to your **System PATH** to run it from any terminal.


---

### ✅ Verify Installation

Once installed, run:

```bash
froggit -help
```

If installed correctly, this will display a list of available commands and options.

---

## ⚙️ Requirements

* [Go](https://golang.org/dl/) **1.20 or newer** (required only for building from source)
* `git` must be installed and accessible from your terminal
* **Nerd Fonts** installed on your system (required for icon rendering and improved UI)

---

## 💡 Recommended Terminal Setup

To get the most out of Froggit’s visual interface, use a terminal that supports:

* Unicode symbols
* Nerd Fonts

### Suggested Terminals

* [WezTerm](https://wezfurlong.org/wezterm/)
* [Alacritty](https://github.com/alacritty/alacritty)
* [Kitty](https://sw.kovidgoyal.net/kitty/)
* [Windows Terminal](https://github.com/microsoft/terminal) (with font config)

---

### 👨‍💻 Configuring Nerd Fonts in VSCode Terminal

If you're using the integrated terminal in VSCode:

1. Open Settings (`Ctrl+,` or `Cmd+,`).
2. Search for `terminal.integrated.fontFamily`.
3. Set it to a Nerd Font you have installed, for example:

```json
"CaskaydiaCove Nerd Font", "Fira Code Nerd Font", "MesloLGS NF", monospace
```

> Nerd Fonts are optional, but highly recommended to see all icons and UI elements as intended.
