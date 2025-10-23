# Tripleten web_project_around_express

# Web Project Around Express

Este proyecto es una API Express.js diseñada para servir información de usuarios y tarjetas a través de endpoints REST. Implementa rutas para la consulta dinámica de datos, manejo robusto de errores y estructura modular con rutas separadas. Se utilizó Express para la construcción del servidor y se configuró con compatibilidad para módulos ES6.

## Funcionalidades

- Servidor Express que se inicia con `npm run start` en `http://localhost:3000`.
- Ruta principal `/` que muestra un mensaje de conexión.
- Ruta `GET /users` que devuelve un JSON desde `users.json`.
- Ruta `GET /cards` que devuelve un JSON desde `cards.json`.
- Ruta `GET /users/:id` que devuelve un usuario específico según el ID.
- Manejo de errores HTTP 404 y 500 con mensajes personalizados.
- Uso de `fs` y `path` para manejo de archivos de datos.
- Linter configurado con `airbnb-base` y `eslint`.

## Tecnologías Utilizadas

- Node.js
- Express.js
- JavaScript (ES6 Modules)
- Eslint con Airbnb Style Guide
- Nodemon para desarrollo con recarga automática

## Estructura del Proyecto

Conforme a las indicaciones marcadas en la lista de comprobación.
