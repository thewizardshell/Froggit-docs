---
title: Vista de Commit
description: Escribe mensajes de commit con contador de caracteres y generación opcional con IA.
---

La Vista de Commit se abre cuando presionas `c` desde la Vista de Archivos con archivos en staging. Proporciona un campo de texto para escribir tu mensaje de commit, junto con un contador de caracteres y generación opcional de mensajes con inteligencia artificial.

## Escribir un mensaje de commit

Escribe tu mensaje directamente. Un cursor muestra tu posición actual en el campo de entrada.

## Contador de caracteres

Debajo del campo de entrada, un contador muestra la longitud actual de tu mensaje en el formato `N/72`, donde 72 es la longitud máxima convencional para la línea de asunto de un commit.

El contador cambia de color según la longitud:

| Longitud | Color | Significado |
|----------|-------|-------------|
| Menos de 50 | Normal | Buena longitud |
| 50 a 72 | Amarillo | Acercándose al límite |
| Más de 72 | Rojo | Excede el límite convencional |

El contador es una guía visual. Froggit no te impide commitear mensajes más largos.

## Mensajes de commit con IA

Si tienes una suscripción activa de [GitHub Copilot](/es/integrations/copilot-ai/), un indicador púrpura `tab AI` aparece en la barra de controles. Presiona `Tab` para generar un mensaje de commit basado en tus cambios staged.

Una animación de carga se muestra mientras el mensaje se genera. Una vez listo, el mensaje aparece en el campo de entrada y puedes editarlo antes de commitear.

## Controles

| Tecla | Acción |
|-------|--------|
| `Enter` | Confirmar y crear el commit |
| `Backspace` | Borrar un carácter |
| `Tab` | Generar mensaje con IA (cuando Copilot está disponible) |
| `Esc` | Cancelar y volver a la Vista de Archivos |
