/**
 * Spaghetti's in built operators
 * @type {Object}
 */
let operators = {
    print(stack) {
        let numArgs = stack.pop();

        for (var i = 0; i < numArgs; i += 1) {
            console.log(stack.pop());
        }
        return {
            stack
        };
    }
};

// Arithmetic operators
Object.assign(operators, require("./operators/arithmetic"));

module.exports = operators;
