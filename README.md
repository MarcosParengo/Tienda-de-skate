# Tienda de Skate
Modelo de webApp de eCommerce. Permite mostrar una lista de articulos, su detalle y agregarlos a un carrito
Tambien tiene funcionalidades como filtrar por marcas los articulos mostrados en la home y finalizar la compra, que envia a una base de datos todos los items agregados al carrito y la informacion introducida en el formulario del checkout.

## Contenido

Este proyecto tiene dos branches: main y gh-pages. **main** contiene la version base del proyecto, para seguir pudiendo implementar caractreristicas y **gh-pages** la version builded, lista para hacer deploy.
## Demo
If you want to see the demo of this proyect deployed, you can visit [Demo of the proyect](https://anabelisa.co/tips-para-hacer-un-buen-readme-md/)

## Instalación y ejecución
    Para instalar y ejecutar se deben seguir una serie de pasos
### Instalación
1. Instalar Node JS: Puede descargar el instalador de su web oficial: [Node.js](https://nodejs.org/es/)

2. Intalar el proyecto: 
    ```bash
    npm install
    ```

3. Instalar las librerias usadas para su desarrollo:
    * Bootstrap: Ejecutar el siguiente comando desde la raiz del repositorio en la consola 
        ```bash
        npm install bootstrap@next
        npm install react-bootstrap bootstrap
        ```
    * React-router-dom: Ejecutar el siguiente comando desde la raiz del repositorio en la consola 
        ```bash
        npm install --save react-router-dom
        ```
    * Firebase: Ejecutar el siguiente comando desde la raiz del repositorio en la consola 
       ```bash
        npm install --save firebase
        ```
### Ejecución
* Ejecutar el siguiente comando desde la raiz del repositorio en la consola 
   ```bash
    npm start
    ```
## Librerias: Se usaron tres librerias para su desarrollo:
#### [Bootstrap](https://react-bootstrap.github.io/)
Para la construcción de componentes y de una grilla para facilitar el posicionamiento y tamaño respònsive de los mismos
#### [React-router-dom](https://reactrouter.com/)
Para el routing de la pagina
#### [Firebase](https://firebase.google.com/)
Para obtener la informacion guardada en la base de datos Firestore y escribir los datos de compra en la misma.

## Preview

![](/preview/1.jpg)
![](/preview/2.jpg)
![](/preview/3.jpg)
![](/preview/4.jpg)
![](/preview/5.jpg)

### Notes
If you want to learn all about markdown i recommend you visit the site 
