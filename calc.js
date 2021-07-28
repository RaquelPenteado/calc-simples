const SomaFunc = require("./functions/somar");
const SubFunc = require("./functions/sub");
const MultiFunc = require("./functions/multi");
const DivFunc = require("./functions/div");

console.log("soma = "+SomaFunc(2,3))
console.log("subtração = "+SubFunc(2,3))
console.log("multiplicação = "+MultiFunc(2,3))
console.log("divisão = "+DivFunc(2,3).toFixed(2))