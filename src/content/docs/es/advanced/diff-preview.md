---
title: Vista Previa de Diff
description: Ve los cambios de un archivo antes de hacer staging o commit con la vista previa de diff integrada.
---

La Vista Previa de Diff te permite inspeccionar exactamente qué cambió en un archivo antes de decidir si hacer staging o commit. Esto elimina la necesidad de salir de Froggit para revisar cambios.

## Abrir el diff

Desde la Vista de Archivos, navega a cualquier archivo y presiona `d`. Froggit mostrará el diff de ese archivo en una vista desplazable.

Para archivos unstaged, muestra los cambios del directorio de trabajo comparados con el índice. Para archivos staged, muestra los cambios staged comparados con el último commit.

## Leer el diff

La salida del diff usa colores para facilitar la lectura:

| Color | Significado |
|-------|-------------|
| Verde | Líneas agregadas |
| Rojo | Líneas eliminadas |
| Cian | Encabezados de sección (indicadores de rango de líneas) |
| Normal | Líneas de contexto (sin cambios) |

## Navegación

El diff se muestra en un viewport desplazable de 20 líneas. Un indicador de posición en la parte inferior muestra tu ubicación actual en el archivo (por ejemplo, `5/120`).

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Desplazarse por el diff |
| `Esc` | Volver a la Vista de Archivos |
