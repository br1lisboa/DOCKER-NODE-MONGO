# Proyecto CRUD en Node con Express y Mongo

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) construida con Node.js, Express y MongoDB.

## Descripción

La aplicación permite realizar operaciones CRUD en una base de datos MongoDB a través de una API RESTful construida con Express.

## Requisitos

- Node.js
- npm
- Docker (opcional)

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/proyecto-crud-node-mongo.git
cd proyecto-crud-node-mongo
```

### Instalación con npm

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Configurar las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

   ```env
   PORT=3000
   MONGO_URL=mongodb://localhost:27017/tu-base-de-datos
   ```

3. Iniciar el servidor:

   ```bash
   npm start
   ```

### Instalación con Docker

1. Construir la imagen de Docker:

   ```bash
   docker build -t proyecto-crud-node-mongo .
   ```

2. Ejecutar el contenedor:

   ```bash
   docker run -d -p 3000:3000 --name proyecto-crud-node-mongo proyecto-crud-node-mongo
   ```

## Uso

La API estará disponible en `http://localhost:3000`. Puedes usar herramientas como Postman o cURL para interactuar con la API.

## Endpoints

- `GET /techs` - Obtener todos los ítems
- `GET /techs/:id` - Obtener un ítem por ID
- `POST /techs` - Crear un nuevo ítem
- `PUT /techs/:id` - Actualizar un ítem por ID
- `DELETE /techs/:id` - Eliminar un ítem por ID

## Contribuir

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
