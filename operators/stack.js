let variables = {};

module.exports = {
    dup(stack) {
        let value = stack.pop();

        stack.push(value);
        stack.push(value);
        return {
            stack
        };
    },
    pop(stack) {
        stack.pop();

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
    }
};
