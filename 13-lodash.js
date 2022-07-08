/*

npm - global command, comes with node
npm --version

local dependency - use it only in this parrticular project 
npm i <packageName>

global dependency - use it in any project
npm install -g <packageName> (mac)

package.json - manifest file (stores important info about project/package)
manual approach (create package.json in the root, crerate properties etc)
npm init -y (everything default)
*/

const _ = require("lodash");

const items = [1,[2,[3,[4]]]] // * Simplify the array objects
const newItems=_.flattenDeep(items)
console.log(newItems);
console.log(items);