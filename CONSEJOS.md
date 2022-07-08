# CONSEJOS BASICOS DE NODE 
Siempre o casi siempre tenemos que tener a nuestra disposicion el package.json , lo cual con un simple comando.
```bash
npm init -y
```

Despues cuando nos descargamos algun proyeecto no nos vendra con los (node_modules) lo cual tendremos que simplemente :

```bash
npm install
```
El npm verificara las dependencias que tenemos en el package.json y automaticamente añadira los node_modules

No necesitamos nodemon en produccion sino para dev lo cual lo guardaremos como devDependencies con el siguiente comando

```bash
npm i nodemon -D
```

Dentro del apartado de package.json, en el apartado de scripts, podemos añadir como unos 'acortamientos' por asi decirlo que simplifican nuestra ejecucion, por ejemplo :
"dev": "nodemon app.js"

```bash
npm run dev
```

Para desinstalar dependencias 
```bash
npm uninstall <package>
```

Para instalar paquetes globalmente , es decir para el nodemon tendiramos que utilizar "npx nodemon app.js" pero si instalamos el paquete globalmente
```bash
npm i -g nodemon
```
Tendriamos que solo introducir nodemon app.js ya que se ha instalado el paquete globalmente

## Significado de npx
Execute package runner introducido en el npm 5.2, siempre que tengamos un npm version superior 5.2 tendremos acceso al npx

### Conceptos importantes que hay que conocer si o si

Event Loop , Async Pattterns , Events Emitter and Streams

Event loop is what allows Node to perform non-blocking I/O operattions - despite the efact that JavaS is single threaded - by offloading operations to the system kerneñ whenever possible

