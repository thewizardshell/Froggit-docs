---
title: GitHub CLI
description: Clona y crea repositorios en GitHub directamente desde Froggit.
---

Froggit se integra con el GitHub CLI (`gh`) para ofrecer funcionalidades de gestión de repositorios directamente en la interfaz de terminal. Cuando `gh` está instalado y autenticado, opciones adicionales aparecen en el flujo de Quick Start.

## Requisitos

Instala el GitHub CLI desde [cli.github.com](https://cli.github.com/) y autentícate con:

```bash
gh auth login
```

Froggit detecta la presencia de `gh` automáticamente al iniciar. No se necesita configuración adicional.

## Funcionalidades disponibles

### Clonar desde GitHub

Cuando ejecutas Froggit fuera de un repositorio Git, el flujo de Quick Start incluye una opción para clonar desde GitHub. Al seleccionarla se abre un navegador de repositorios que lista tus repositorios personales de GitHub con sus descripciones.

Navega la lista con las teclas de flecha y presiona `c` para clonar el repositorio seleccionado en el directorio actual. Un diálogo de confirmación aparece antes de iniciar la clonación.

### Crear en GitHub

El flujo de Quick Start también ofrece una opción para crear un nuevo repositorio en tu cuenta de GitHub. Esto crea el repositorio de forma remota y lo clona localmente en un solo paso.

## Cuando GitHub CLI no está instalado

Si `gh` no se encuentra en tu sistema, las opciones relacionadas con GitHub en el flujo de Quick Start no se muestran. Froggit funciona normalmente para todas las operaciones locales de Git sin él.
