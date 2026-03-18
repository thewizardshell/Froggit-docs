---
title: Configuración
description: Cómo configurar Froggit usando el archivo froggit.yml.
---

Froggit se puede configurar a través de un archivo YAML llamado `froggit.yml`, ubicado en el mismo directorio que el ejecutable de Froggit.

Si no se encuentra un archivo de configuración, Froggit usa valores por defecto sensatos y funciona sin configuración adicional.

## Archivo de configuración

Crea un archivo llamado `froggit.yml` con la siguiente estructura:

```yaml
ui:
  branding: true
  position: "left"

git:
  autofetch: true
  defaultbranch: "main"
```

## Opciones

### Configuración de interfaz

**branding** (booleano, por defecto: `true`)

Controla si el banner del título de Froggit se muestra en la parte superior de la interfaz. Configúralo como `false` para ocultarlo y recuperar espacio vertical, lo cual puede ser útil en terminales pequeñas.

**position** (texto, por defecto: `"left"`)

Define la alineación horizontal de la interfaz. Los valores aceptados son `"left"`, `"center"` y `"right"`. La opción center también aplica centrado vertical.

### Configuración de Git

**autofetch** (booleano, por defecto: `true`)

Cuando está habilitado, Froggit automáticamente hace fetch del repositorio remoto al iniciar. Esto mantiene tu vista local actualizada sin intervención manual. Configúralo como `false` si prefieres controlar cuándo se hace fetch.

**defaultbranch** (texto, por defecto: `"main"`)

El nombre de la rama por defecto usada al hacer push por primera vez o al configurar el seguimiento upstream.

## Ejemplos de configuración

Configuración mínima que oculta el branding y desactiva auto-fetch:

```yaml
ui:
  branding: false

git:
  autofetch: false
```

Diseño centrado con una rama por defecto personalizada:

```yaml
ui:
  position: "center"

git:
  defaultbranch: "master"
```
