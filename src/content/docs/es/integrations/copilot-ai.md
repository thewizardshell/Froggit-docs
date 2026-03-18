---
title: GitHub Copilot AI
description: Genera mensajes de commit automáticamente usando tu suscripción existente de GitHub Copilot.
---

Froggit puede generar mensajes de commit usando GitHub Copilot. Esta funcionalidad no requiere configuración adicional más allá de tener una suscripción activa de Copilot autenticada a través de un editor compatible.

## Cómo funciona

Cuando abres la Vista de Commit y Copilot está disponible, un indicador púrpura `tab AI` aparece en la barra de controles. Presiona `Tab` para generar un mensaje de commit basado en tus cambios staged.

Froggit lee tu diff staged, lo envía a la API de Copilot y devuelve un mensaje formateado como un conventional commit (por ejemplo, `feat(auth): add token refresh logic`). El diff se trunca a 8,000 caracteres para respetar los límites de la API.

Una animación de spinner se muestra mientras el mensaje se genera. Una vez completado, el mensaje aparece en el campo de entrada y puedes editarlo antes de hacer commit.

## Requisitos

Froggit usa tus tokens de autenticación de Copilot existentes. Busca las credenciales en el directorio de configuración de GitHub Copilot:

| Plataforma | Ubicación |
|------------|-----------|
| Linux / macOS | `~/.config/github-copilot/` |
| Windows | `%LOCALAPPDATA%/github-copilot/` |

Estos tokens son creados por editores con soporte de Copilot, incluyendo VS Code con la extensión de Copilot, copilot.vim, copilot.lua y Neovim con plugins de Copilot. Si tienes Copilot funcionando en tu editor, funcionará en Froggit.

## Cuando Copilot no está disponible

Si no se encuentran tokens válidos de Copilot, la opción de AI no aparece en los controles de la Vista de Commit. Froggit funciona normalmente sin ella. No se muestra ningún error.

## Controles

| Tecla | Acción |
|-------|--------|
| `Tab` | Generar un mensaje de commit con AI |
