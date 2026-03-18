---
title: Navegación
description: Aprende a navegar por la interfaz de Froggit y entender sus vistas.
---

Froggit está organizado en un conjunto de vistas, cada una enfocada en una tarea específica. La interfaz es completamente controlada por teclado, y una barra de controles en la parte inferior de la pantalla siempre muestra las acciones disponibles para la vista actual.

## Estructura de vistas

### Vistas principales

Estas son las vistas que usarás con más frecuencia:

| Vista | Propósito |
|-------|-----------|
| **Vista de Archivos** | La pantalla principal. Muestra archivos modificados, permite hacer staging/unstaging y navegar a otras vistas |
| **Vista de Commit** | Escribe y confirma un mensaje de commit |
| **Vista de Ramas** | Lista, cambia, crea y elimina ramas |
| **Vista de Remotos** | Lista, agrega y elimina repositorios remotos |
| **Agregar Remoto** | Formulario para agregar un nuevo remoto (nombre y URL) |
| **Nueva Rama** | Formulario para crear una nueva rama |

### Vistas avanzadas

Accesibles a través del [Modo Avanzado](/es/advanced/advanced-mode/) presionando `A` desde la Vista de Archivos:

| Vista | Propósito |
|-------|-----------|
| **Gráfico de Log** | Historial interactivo de commits con visualización ASCII de ramas |
| **Merge** | Selecciona una rama y haz merge en la rama actual |
| **Rebase** | Selecciona una rama y haz rebase de la rama actual sobre ella |
| **Stash** | Guarda, aplica, restaura y elimina cambios en stash |
| **Vista Previa de Diff** | Ve los cambios en un archivo específico antes del staging |

### Vistas de configuración inicial

Se muestran cuando Froggit se ejecuta fuera de un repositorio Git:

| Vista | Propósito |
|-------|-----------|
| **Inicio Rápido** | Inicializar, clonar o crear un repositorio |
| **Lista de Repositorios** | Navegar tus repositorios de GitHub para clonar |
| **Confirmar Clonación** | Confirmar antes de clonar un repositorio seleccionado |

### Vistas de utilidad

| Vista | Propósito |
|-------|-----------|
| **Ayuda** | Referencia extendida de atajos de teclado |
| **Diálogo de Confirmación** | Pregunta sí/no para acciones destructivas (eliminar rama, descartar cambios, eliminar stash) |

## Navegación general

Estos patrones aplican en toda la interfaz:

**Esc** regresa a la vista anterior. Desde la mayoría de las vistas, esto te lleva de vuelta a la Vista de Archivos.

**q** cierra la aplicación. Disponible desde la Vista de Archivos, Vista de Ramas, Vista de Remotos y Vista de Ayuda.

**Teclas de flecha** (Arriba/Abajo) navegan listas en cada vista que contenga una.

**La barra de controles** en la parte inferior de cada vista muestra exactamente qué teclas están disponibles. Se actualiza automáticamente según el contexto. Por ejemplo, el atajo de commit solo aparece cuando hay archivos en staging.

## Mensajes de estado

Cuando realizas una acción como agregar un archivo al staging, hacer push o commitear, aparece un mensaje de estado en la parte inferior de la pantalla. Los mensajes están codificados por color: verde para éxito, rojo para errores y naranja para advertencias. Los mensajes se limpian automáticamente después de unos segundos para mantener la interfaz limpia.

Para la lista completa de atajos de teclado, consulta la referencia de [Atajos de Teclado](/es/reference/keyboard-shortcuts/).
