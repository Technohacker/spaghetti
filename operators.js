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

// Conditional operators
Object.assign(operators, require("./operators/conditional"));

module.exports = operators;
