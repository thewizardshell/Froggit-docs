---
title: Merge
description: Haz merge de ramas con detección y resolución de conflictos dentro de Froggit.
---

La vista de Merge te permite fusionar una rama con otra directamente desde la interfaz de terminal, con detección de conflictos integrada y controles de resolución.

## Iniciar un merge

Entra al [Modo Avanzado](/es/advanced/advanced-mode/) presionando `A` desde la Vista de Archivos, luego presiona `M` para abrir la vista de Merge.

## Seleccionar una rama

La vista muestra todas las ramas locales. Navega con las teclas de flecha y presiona `Enter` para seleccionar la rama que quieres fusionar. Una marca de verificación aparece junto a la rama seleccionada. Una vez seleccionada, presiona `M` para confirmar y ejecutar el merge.

## Manejo de conflictos

Si el merge produce conflictos, Froggit los detecta automáticamente y muestra la lista de archivos en conflicto. En este punto, dos opciones están disponibles:

| Tecla | Acción |
|-------|--------|
| `P` | Continuar con el merge después de resolver conflictos externamente (`git merge --continue`) |
| `X` | Abortar el merge y restaurar el estado anterior (`git merge --abort`) |

Resuelve los conflictos en tu editor de preferencia, luego vuelve a Froggit y presiona `P` para continuar.

## Después de un merge exitoso

Cuando el merge se completa sin conflictos, Froggit muestra un mensaje de éxito y ofrece la opción de hacer push del resultado al remoto.

## Controles

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Navegar ramas |
| `Enter` | Seleccionar una rama |
| `M` | Confirmar el merge |
| `P` | Continuar después de resolver conflictos |
| `X` | Abortar el merge |
| `Esc` | Cancelar y volver a la Vista de Archivos |
