/**
 * Spaghetti's in built operators
 * @type {Object}
 */

let operators = {};

import consoleio from "./operators/consoleio.js";
import stack from "./operators/stack.js";
import arithmetic from "./operators/arithmetic.js";
import relational from "./operators/relational.js";
import branching from "./operators/branching.js";
import array from "./operators/array.js";

// Console I/O operators
Object.assign(operators, consoleio);

// Stack operators
Object.assign(operators, stack);

// Arithmetic operators
Object.assign(operators, arithmetic);

// Relational operators
Object.assign(operators, relational);

// Branching operators
Object.assign(operators, branching);

// Array operators
Object.assign(operators, array);

export default operators;