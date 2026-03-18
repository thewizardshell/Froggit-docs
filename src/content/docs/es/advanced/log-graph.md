---
title: Gráfico de Commits
description: Ve tu historial de commits como un gráfico ASCII interactivo.
---

El Gráfico de Log muestra el historial de commits de tu repositorio como un gráfico ASCII interactivo y desplazable. Muestra la estructura de ramas, hashes de commit y mensajes de commit en un formato compacto.

## Abrir el Gráfico de Log

Entra al [Modo Avanzado](/es/advanced/advanced-mode/) presionando `A` desde la Vista de Archivos, luego presiona `L` para abrir el Gráfico de Log.

## Leer el gráfico

Cada línea en el gráfico representa un commit e incluye:

| Elemento | Descripción |
|----------|-------------|
| Símbolos del gráfico | Indicadores visuales de la estructura de ramas y puntos de merge, mostrados en naranja |
| Hash del commit | El hash abreviado del commit, mostrado en azul |
| Mensaje del commit | La primera línea del mensaje del commit |

El cursor de rana marca la línea actualmente seleccionada.

## Navegación

El gráfico se muestra en un viewport desplazable de 15 líneas. Un indicador de posición en la parte inferior muestra tu ubicación (por ejemplo, `3/50`).

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Navegar por los commits |
| `Esc` | Volver a la Vista de Archivos |
