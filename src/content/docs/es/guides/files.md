---
title: Vista de Archivos
description: Gestiona y prepara archivos modificados en tu directorio de trabajo.
---

La Vista de Archivos es la pantalla principal de Froggit. Muestra todos los archivos modificados en tu directorio de trabajo Git y proporciona controles para staging, unstaging, previsualización de cambios y navegación a otras vistas.

## Agrupación de archivos

Los archivos se organizan en dos secciones con encabezados visuales:

Los archivos en **Staged** aparecen primero, marcados con un checkbox `[✓]`. Están listos para ser commiteados.

Los archivos **Unstaged** aparecen debajo, marcados con `[ ]`. Tienen cambios que aún no se han agregado al área de staging.

## Indicadores de estado

Cada archivo muestra un indicador de estado junto a su nombre:

| Indicador | Significado | Color |
|-----------|-------------|-------|
| `M` | Modificado | Naranja |
| `A` | Agregado (archivo nuevo) | Verde |
| `D` | Eliminado | Magenta |
| `?` | Sin seguimiento | Cian |
| `C` | Conflicto | Rojo |

## Iconos de archivo

Cuando usas una terminal con Nerd Fonts, cada archivo muestra un icono basado en su extensión. Esto cubre tipos de archivo comunes incluyendo Go, JavaScript, TypeScript, Python, Rust, HTML, CSS, JSON, YAML, Markdown y muchos otros.

## Resumen

En la parte superior de la vista, un resumen muestra la cantidad de archivos staged y unstaged. Si hay nuevos commits disponibles en el repositorio remoto, aparece una advertencia sugiriendo que deberías hacer pull.

## Desplazamiento

Cuando la lista de archivos es más larga que el área visible, aparecen indicadores de desplazamiento mostrando cuántos archivos están arriba o abajo del viewport actual. El cursor sigue tu posición mientras navegas.

## Controles

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Navegar por la lista de archivos |
| `Espacio` | Agregar o quitar del staging el archivo seleccionado |
| `a` | Agregar todos los archivos al staging |
| `u` | Quitar todos los archivos del staging |
| `d` | Abrir una [vista previa de diff](/es/advanced/diff-preview/) del archivo seleccionado |
| `x` | Descartar cambios del archivo seleccionado (aparece un diálogo de confirmación) |
| `c` | Abrir la [Vista de Commit](/es/guides/commit/) (solo disponible cuando hay archivos en staging) |
| `r` | Actualizar el estado de los archivos |
| `f` | Fetch desde el remoto |
| `l` | Pull desde el remoto |
| `p` | Push al remoto |
| `b` | Abrir la [Vista de Ramas](/es/guides/branches/) |
| `m` | Abrir la [Vista de Remotos](/es/guides/remotes/) |
| `A` | Entrar al [Modo Avanzado](/es/advanced/advanced-mode/) para operaciones de merge, rebase, stash y log |
| `?` | Mostrar ayuda |
