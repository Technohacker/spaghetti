/**
 * Spaghetti's in built operators
 * @type {Object}
 */
let variables = {};
let operators = {};

// Console I/O operators
Object.assign(operators, require("./operators/consoleio"));

// Stack operators
Object.assign(operators, require("./operators/stack"));

// Arithmetic operators
Object.assign(operators, require("./operators/arithmetic"));

// Relational operators
Object.assign(operators, require("./operators/relational"));

// Branching operators
Object.assign(operators, require("./operators/branching"));

// Array operators
Object.assign(operators, require("./operators/array"));

module.exports = operators;
