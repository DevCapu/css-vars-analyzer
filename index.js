const minimist = require("minimist");
const fs = require('fs');
const CSSJSON = require('css-to-json/cssjson');

console.log(CSSJSON);

const arguments = minimist(process.argv.slice(2), {
	alias: {
		d: 'directory'
	}
});

const content = fs.readFileSync(arguments.directory, 'utf-8');

console.log('Caminho: ', arguments.directory);
console.log("/*/*/*/*/*/*/*/*/*/*/*/*");
const toJxSON = CSSJSON
console.log(toJxSON);

