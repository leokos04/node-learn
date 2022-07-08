const { readFile, writeFile } = require("fs").promises
/* 
Añadiendo .promises hace la misma funcion que la siguiente linea codigo
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile); */




const start = async () => {
    try {
    const first = await readFile("./content/first.txt","utf-8");
    const sec = await readFile("./content/second.txt","utf-8");
    await writeFile(
    "./content/resultado-writefilepromise.txt",
    `Este es el resultado simplificando lineas de codigo : ${first} , ${sec}`
    )
    console.log(first, sec);
} catch (error) {
    console.log(error);
}
};
start();

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}; */

/* getText("./content/first.txt")
.then((result) => console.log(result))
.catch((err) => console.log(err)); */