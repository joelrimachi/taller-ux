# Auditoría y Rediseño UX/UI — App Notas

## 1. Introducción
Este documento registra el proceso de auditoría de usabilidad basado en las **10 Heurísticas de Usabilidad de Jakob Nielsen**, las leyes de experiencia de usuario (Fitts, Hick y Miller), y las pautas de accesibilidad **WCAG 2.2**, aplicado al rediseño de la interfaz de notas.

---

## 2. Tabla de Auditoría Heurística (Antes vs. Después)

| Heurística de Nielsen | Problema Encontrado (Interfaz Original) | Solución Aplicada (Rediseño UX/UI) | Gravedad |
| :--- | :--- | :--- | :--- |
| **1. Visibilidad del estado del sistema** | Al guardar o eliminar una nota, la interfaz no mostraba ningún mensaje de confirmación. | Se implementó una barra de estado dinámica y mensajes toast que notifican el éxito o error de cada acción. | Alta |
| **2. Coincidencia con el mundo real** | Los botones y textos utilizaban términos técnicos de programación en lugar de lenguaje natural. | Se reemplazaron las etiquetas técnicas por lenguaje claro enfocado en el usuario (ej. «Guardar nota», «Eliminar»). | Media |
| **3. Control y libertad del usuario** | Al hacer clic en «Eliminar todo», la acción se ejecutaba de inmediato sin permitir marcha atrás. | Se agregó un cuadro de diálogo de confirmación (`confirm`) y la opción de cancelar acciones destructivas. | Alta |
| **4. Prevención de errores** | Se permitía registrar notas completamente vacías o con espacios en blanco. | Se configuraron validaciones nativas y restricciones en JavaScript para prevenir registros vacíos. | Alta |
| **5. Reconocer, no recordar** | Los campos de entrada usaban únicamente `placeholder` que desaparecían al escribir. | Se añadieron etiquetas `<label>` permanentes visibles encima de cada campo de entrada. | Media |

---

## 3. Justificación de Leyes de UX aplicadas

* **Ley de Fitts:** El botón principal de acción («Guardar nota») se rediseñó con un tamaño táctil amplio y destacado (`min-height: 44px`, `flex: 1`), ubicándolo de forma que sea rápido y fácil de presionar tanto en computadoras como en dispositivos móviles.
* **Ley de Hick:** Se organizaron los controles y acciones secundarias en bloques separados para evitar saturar al usuario con demasiadas opciones simultáneas al momento de tomar decisiones.
* **Ley de Miller:** Se estructuró la interfaz dividiendo los formularios e inputs en secciones reducidas, respetando la capacidad de memoria a corto plazo del cerebro humano (límite de 7±2 elementos).

---

## 4. Criterios de Accesibilidad (WCAG 2.2) y Rendimiento

* **Contraste de color:** Se ajustó la paleta cromática utilizando variables en `:root`, garantizando un contraste superior a **4.5:1** entre el texto y el fondo.
* **Foco visible:** Se eliminó el `outline: none` perjudicial y se implementó `:focus-visible` con un borde de contraste claro (`#f59e0b`) para facilitar la navegación exclusiva por teclado (tecla Tab).
* **Textos alternativos e Inputs:** Todos los campos cuentan con su respectivo `<label>` asociado mediante el atributo `for`, y las imágenes de la interfaz poseen descripciones en su atributo `alt`.
* **Puntaje en Lighthouse:** Tras la auditoría y correcciones técnicas, la aplicación obtuvo un puntaje de **Accesibilidad superior a 90** en las Herramientas de Desarrollo de Google Chrome.