---
title: Stash
description: Guarda, aplica y gestiona stashes desde la vista del gestor de Stash.
---

El gestor de Stash te permite apartar temporalmente cambios sin commitear y restaurarlos después. Esto es útil cuando necesitas cambiar de contexto sin commitear trabajo incompleto.

## Abrir el gestor de Stash

Entra al [Modo Avanzado](/es/advanced/advanced-mode/) presionando `A` desde la Vista de Archivos, luego presiona `S` para abrir la vista de Stash.

## Ver stashes

La vista lista todos los stashes guardados con su referencia y descripción. Si tienes cambios unstaged en tu directorio de trabajo, aparece un aviso en la parte superior de la vista.

## Guardar un stash

Presiona `s` para guardar tus cambios actuales como un nuevo stash. Esto abre un campo de mensaje donde puedes escribir una descripción opcional. Presiona `Enter` para guardar o `Esc` para cancelar. Si dejas el mensaje vacío, se usa una descripción por defecto.

## Trabajar con stashes existentes

Navega la lista de stashes con las teclas de flecha. Las siguientes operaciones están disponibles:

| Tecla | Acción |
|-------|--------|
| `Enter` | Aplicar el stash seleccionado (lo mantiene en la lista) |
| `p` | Pop del stash seleccionado (aplicar y eliminar de la lista) |
| `d` | Eliminar el stash seleccionado (eliminación permanente, con confirmación) |
| `v` | Ver el contenido completo del diff del stash seleccionado |

## Controles

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Navegar stashes |
| `Enter` | Aplicar stash |
| `p` | Pop stash |
| `d` | Eliminar stash |
| `v` | Ver contenido del stash |
| `s` | Guardar un nuevo stash |
| `Esc` | Volver a la Vista de Archivos |
| `?` | Mostrar ayuda |
