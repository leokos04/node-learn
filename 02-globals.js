//GLOBALS - NO WINDOW !!
//__dirname - path to current directory
//__filename- file name
//require   - function to use modules (CommonJS)
//module    - info about current module (file)
//process   - info about env where the program is being executed

// * Console log path 
console.log(__dirname);

setInterval(() => {
  console.log("hello world");
}, 1000);
//print every 1000 miliS hello world 