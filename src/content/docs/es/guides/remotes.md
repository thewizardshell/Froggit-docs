---
title: Vista de Remotos
description: Ve y gestiona tus repositorios remotos de Git.
---

La Vista de Remotos lista tus repositorios remotos de Git. Ábrela presionando `m` desde la Vista de Archivos.

Cada remoto se muestra con su nombre y URL.

## Agregar un remoto

Presiona `n` para abrir el formulario de Agregar Remoto. Se te pedirá que ingreses un nombre y una URL para el remoto. Usa `Tab` para cambiar entre los campos, `Enter` para confirmar y `Esc` para cancelar.

## Eliminar un remoto

Presiona `d` sobre el remoto seleccionado para eliminarlo. Aparece un diálogo de confirmación antes de que el remoto sea eliminado.

## Push, Pull y Fetch

Los atajos de sincronización remota están disponibles desde la Vista de Archivos:

| Tecla | Acción |
|-------|--------|
| `p` | Enviar commits al remoto (push) |
| `l` | Traer cambios del remoto (pull) |
| `f` | Obtener actualizaciones del remoto (fetch) |

El atajo de pull está disponible cuando Froggit detecta que existen nuevos commits en el remoto.

## Controles

| Tecla | Acción |
|-------|--------|
| `Arriba` / `Abajo` | Navegar remotos |
| `n` | Agregar un nuevo remoto |
| `d` | Eliminar el remoto seleccionado |
| `Esc` | Volver a la Vista de Archivos |
| `q` | Salir |
