---
title: Instalación
description: Cómo instalar Froggit en tu sistema.
---

## Requisitos del sistema

Antes de instalar Froggit, asegúrate de que tu sistema cumpla con los siguientes requisitos:

- `git` instalado y disponible en tu terminal
- **Nerd Fonts** instaladas para soporte completo de iconos en la interfaz
- **[Go 1.20 o posterior](https://golang.org/dl/)** solo si compilas desde el código fuente
- Opcional: [GitHub CLI (`gh`)](https://cli.github.com/) para funciones de integración con GitHub

Si GitHub CLI está instalado y autenticado (`gh auth login`), Froggit lo detecta y usa automáticamente para la gestión de repositorios. Consulta [Integración con GitHub CLI](/es/integrations/github-cli/) para más detalles.

## Opciones de instalación

### Opción 1: Instalar via script (Recomendado)

#### Linux y macOS

```bash
curl -s https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.sh | bash
```

Este script descarga el último binario de Froggit y lo instala en `/usr/local/bin` u otra ubicación apropiada.

#### Windows (PowerShell)

Ejecuta PowerShell como Administrador:

```powershell
iwr https://raw.githubusercontent.com/thewizardshell/froggit/master/scripts/install.ps1 -UseBasicParsing | iex
```

El script maneja la descarga, instalación y opcionalmente agrega Froggit al PATH del sistema.

### Opción 2: Descarga manual

1. Visita la [página de Releases](https://github.com/thewizardshell/froggit/releases).
2. Descarga el archivo ZIP para tu plataforma y arquitectura.
3. Extrae el binario y muévelo a un directorio en tu PATH del sistema, como `/usr/local/bin` en Linux y macOS o una carpeta como `C:\Program Files\tools\` en Windows.

Todos los binarios de Linux se compilan como ejecutables completamente estáticos. Funcionan en cualquier distribución de Linux, incluyendo NixOS, sin requerir bibliotecas dinámicas.

### Opción 3: Compilar desde el código fuente

```bash
git clone https://github.com/thewizardshell/froggit.git
cd froggit
CGO_ENABLED=0 go build -ldflags="-s -w" -o froggit .
```

Copia el binario resultante a una ubicación en tu PATH. El flag `CGO_ENABLED=0` produce un binario estático, y `-ldflags="-s -w"` elimina información de debug para reducir el tamaño.

## Verificar la instalación

Una vez instalado, verifica ejecutando:

```bash
froggit --version
```

Deberías ver el número de versión actual. Ejecuta `froggit --help` para ver los flags disponibles.

## Configuración

Después de la instalación, opcionalmente puedes crear un archivo de configuración `froggit.yml` para personalizar la interfaz. Consulta [Configuración](/es/guides/configuration/) para más detalles.

## Configuración de terminal recomendada

La interfaz de Froggit está optimizada para terminales con soporte de Unicode y Nerd Fonts. Terminales recomendadas:

- [WezTerm](https://wezfurlong.org/wezterm/)
- [Alacritty](https://github.com/alacritty/alacritty)
- [Kitty](https://sw.kovidgoyal.net/kitty/)
- [Ghostty](https://ghostty.org/)
- [Windows Terminal](https://github.com/microsoft/terminal)

### Usar Nerd Fonts en VS Code

Si usas VS Code, abre configuración (`Ctrl+,` o `Cmd+,`), busca `terminal.integrated.fontFamily` y configúralo con una Nerd Font:

```json
"CaskaydiaCove Nerd Font", "MesloLGS NF", monospace
```
