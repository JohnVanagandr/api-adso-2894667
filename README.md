# Pasos para poder ejecutar el proyecto en CASA

Primero debemos validar que nuestro computador tenga instalado los siguiente programas

-   Tener instalado node.js
-   Tener un editor de codigo
-   Tener instalo MySQL
-   Crear una base de datos y poder administrarla

Importante tener muchas ganas de aprender JavaScript, Vamos a trabajar mucho JavaScript
## Comandos a ejecutar en la terminal

Dirigirnos a un lugar en nuestro disco duro, si estamos en el SENA trabajamos en el disco local D

```
cd /D/adso/codio-ficha/backend
```

Ejecute el siguiente comando para clonar el repositorio

```
git clone https://github.com/JohnVanagandr/api-adso-2894667.git
```

Nos creo una nueva carpeta con el nombre api.  

Nos deplazamos a la carpeta y ejecutamos los siguientes comandos en la terminal para dejar instalados los modulos

```
cd api
```

Instalara las dependencias que tiene el proyecto

```
npm install
```

Si ¿pero que dependencia tiene el proyecto? Vamos a instalar las dependencia minimas

- Dependencia para crear nuestro servidor, instalar express

```
npm i express
```

- Dependencia para poder recibir los parametros en nustro servidor

```
npm i body-parser
```

- Dependencia para conectarnos a MySQL

```
npm i mysql2
```

- Dependencia para mantener ejecutado nuestro servidor (importante esta dependencia solo es para desarrollo)

```
npm i --save-dev nodemon
```

¿Ya tenemos todas nuestras dependencias? NO, todavia nos falta trabajo.  

Vamos a entender que tiene el proyecto y porque funciona

- Una conexión a la base de datos
- Clases para manipular los CRUD basicos
- Clases para manejar los controladores
- Archivos con código JavaScript para manejar las rutas
- Todavia nos faltan más archivos...   

Señores no olvidemos importar el backup de la base de datos, trabajemos con el script data.sql
