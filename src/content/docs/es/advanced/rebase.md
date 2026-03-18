---
title: Rebase
description: Haz rebase de tu rama sobre otra con detección y resolución de conflictos.
---

La vista de Rebase te permite rebasar la rama actual sobre otra rama, con detección automática de conflictos y controles para continuar o abortar.

## Iniciar un rebase

Entra al [Modo Avanzado](/es/advanced/advanced-mode/) presionando `A` desde la Vista de Archivos, luego presiona `R` para abrir la vista de Rebase.

## Seleccionar una rama base

Navega la lista de ramas con las teclas de flecha y presiona `Enter` para seleccionar la rama sobre la que quieres hacer rebase. Una marca de verificación señala tu selección. Presiona `R` para confirmar e iniciar el rebase.

## Manejo de conflictos

Si surgen conflictos durante el rebase, Froggit muestra la lista de archivos en conflicto y presenta dos opciones:

| Tecla | Acción |
|-------|--------|
| `P` | Continuar después de resolver conflictos externamente (`git rebase --continue`) |
| `X` | Abortar el rebase y volver al estado original (`git rebase --abort`) |

Resuelve los conflictos en tu editor, luego presiona `P` en Froggit para continuar.

## Después de un rebase exitoso

Cuando el rebase se completa limpiamente, Froggit muestra un mensaje de éxito y vuelve a la Vista de Archivos con el estado actualizado.

## Controles

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Navegar ramas |
| `Enter` | Seleccionar una rama |
| `R` | Confirmar el rebase |
| `P` | Continuar después de resolver conflictos |
| `X` | Abortar el rebase |
| `Esc` | Cancelar y volver a la Vista de Archivos |
