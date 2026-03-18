---
title: Inicio Rápido
description: Qué sucede cuando ejecutas Froggit por primera vez fuera de un repositorio Git.
---

Cuando ejecutas Froggit en un directorio que no es un repositorio Git, se abre el flujo de Inicio Rápido. Esta configuración guiada te ayuda a inicializar o conectar un repositorio antes de comenzar a trabajar.

## Opciones

La vista de Inicio Rápido presenta tres opciones:

1. **Inicializar un nuevo repositorio** crea un nuevo repositorio Git en el directorio actual usando `git init`. Una vez completado, Froggit abre la Vista de Archivos para que puedas comenzar a preparar y commitear archivos.

2. **Clonar desde GitHub** lista tus repositorios personales de GitHub y te permite clonar uno en el directorio actual. Esta opción requiere que GitHub CLI (`gh`) esté instalado y autenticado.

3. **Crear en GitHub** crea un nuevo repositorio en tu cuenta de GitHub y lo clona localmente. Esto también requiere GitHub CLI.

Las opciones que dependen de GitHub CLI solo están disponibles cuando `gh` es detectado en tu sistema.

## Controles

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Navegar opciones |
| `Enter` | Seleccionar la opción resaltada |
| `1` / `2` / `3` | Selección rápida por número |
| `q` | Salir |
