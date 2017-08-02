/**
 * Spaghetti's in built operators
 * @type {Object}
 */
let variables = {};
let operators = {
    print(stack) {
        let numArgs = stack.pop();

        for (var i = 0; i < numArgs; i += 1) {
            console.log(stack.pop());
        }
        return {
            stack
        };
    },
    dup(stack) {
        let value = stack.pop();

        stack.push(value);
        stack.push(value);
        return {
            stack
        };
    },
    store(stack) {
        let variableName = stack.pop(),
            variableValue = stack.pop();

        variables[variableName] = variableValue;
        return {
            stack
        };
    },
    retrieve(stack) {
        let variableName = stack.pop();

        stack.push(variables[variableName]);
        return {
            stack
        };
    },
};

// Arithmetic operators
Object.assign(operators, require("./operators/arithmetic"));

module.exports = operators;
