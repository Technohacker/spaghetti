/**
 * Spaghetti's in built operators
 * @type {Object}
 */
let operators = {
    print(stack) {
        let jumpTo = stack.pop(),
            numArgs = stack.pop();

        for (var i = 0; i < numArgs; i += 1) {
            console.log(stack.pop());
        }
        return {
            jumpTo,
            stack
        };
    }
};

// Arithmetic operators
Object.assign(operators, require("./operators/arithmetic"));

module.exports = operators;
