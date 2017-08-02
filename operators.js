/**
 * Spaghetti's in built operators
 * @type {Object}
 */
let variables = {};
let operators = {};

// Stack operators
Object.assign(operators, require("./operators/stack"));

// Arithmetic operators
Object.assign(operators, require("./operators/arithmetic"));

module.exports = operators;
