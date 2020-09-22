let variables = {};

export default {
    swap(stack) {
        let val1 = stack.pop(),
            val2 = stack.pop();

        stack.push(val1);
        stack.push(val2);
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
    },
    _getVariables() {
        return variables;
    },
    _clearVariables() {
        variables = {};
    }
};
