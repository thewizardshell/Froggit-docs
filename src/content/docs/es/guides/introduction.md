---
title: Introducción a Froggit
description: Conoce qué es Froggit, por qué existe y cómo puede mejorar tu flujo de trabajo con Git.
---

**Froggit** es una interfaz de usuario de terminal (TUI) moderna y orientada al teclado para Git. Diseñada con la simplicidad en mente, agiliza tus tareas diarias con Git sin necesidad de recordar sintaxis compleja de línea de comandos.

Ya sea que estés preparando archivos, escribiendo mensajes de commit, cambiando de rama, haciendo merge, rebase, o enviando cambios a un remoto, Froggit ofrece una interfaz limpia e intuitiva para ayudarte a trabajar de forma rápida y clara.

## Qué puede hacer Froggit

Froggit cubre el flujo de trabajo esencial de Git y lo extiende con funciones diseñadas para reducir la fricción:

**Operaciones principales.** Agrega y quita archivos del staging de forma individual o todos a la vez. Visualiza archivos staged y unstaged agrupados con encabezados claros. Haz commits con un contador de caracteres que te guía hacia mensajes bien formateados. Push, pull y fetch desde repositorios remotos.

**Gestión de ramas y remotos.** Lista, crea, elimina y cambia de rama. Agrega y elimina remotos. Todo desde vistas dedicadas con controles directos.

**Operaciones avanzadas de Git.** Merge y rebase de ramas con detección de conflictos integrada. Guarda, aplica, restaura y elimina stashes. Navega el historial de commits a través de un gráfico de log interactivo. Previsualiza diffs de archivos antes de hacer staging o commit.

**Integraciones.** Genera mensajes de commit con inteligencia artificial usando tu suscripción existente de GitHub Copilot. Clona y crea repositorios de GitHub a través de la integración con GitHub CLI.

**Configuración.** Personaliza la posición de la interfaz, la visibilidad del branding, el comportamiento de auto-fetch y el nombre de la rama por defecto a través de un archivo de configuración YAML.

## Por qué usar Froggit

**Rápido y responsivo.** Construido en Go para velocidad, con operaciones asíncronas que nunca bloquean la interfaz.

**Teclado primero.** Cada acción se controla con atajos de teclado. La barra de controles en la parte inferior de cada vista siempre muestra qué está disponible.

**Sin memorización.** Los controles contextuales te guían a través de cada operación. No necesitas memorizar comandos de Git ni atajos de Froggit.

**Interfaz limpia.** Ve el estado de tu repositorio de un vistazo. Los mensajes de estado aparecen cuando son relevantes y se limpian automáticamente.

**Para todos.** Diseñado para ser accesible para principiantes y eficiente para usuarios experimentados.

¿Listo para probarlo? Continúa a [Instalación](/es/guides/install/).
