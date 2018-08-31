var chalk = require("chalk");

var msg = "Mom's " + chalk.bgRed("spaghetti") + chalk.blue(" on his ") + chalk.bgRed("spaghetti") + chalk.green(" already");
var multicolour = chalk.blue(chalk.bgRed("Potato"));

console.log(msg);
console.log(multicolour);