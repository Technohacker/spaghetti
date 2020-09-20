module.exports = {
    add(stack) {
        let numArgs = stack.pop(),
            sum = 0;

        for (var i = 0; i < numArgs; i += 1) {
            sum += stack.pop();
        }
        stack.push(sum);
        return {
            stack
        }
    },
    subtract(stack) {
        let numArgs = stack.pop(),
            difference = stack.pop();

        for (var i = 0; i < (numArgs - 1); i += 1) {
            difference -= stack.pop();
        }
        stack.push(difference);
        return {
            stack
        }
    },
    multiply(stack) {
        let numArgs = stack.pop(),
            product = stack.pop();

        for (var i = 0; i < (numArgs - 1); i += 1) {
            product *= stack.pop();
        }
        stack.push(product);
        return {
            stack
        }
    },
    divide(stack) {
        let numArgs = stack.pop(),
            quotient = stack.pop();

        for (var i = 0; i < (numArgs - 1); i += 1) {
            quotient /= stack.pop();
        }
        stack.push(quotient);
        return {
            stack
        }
    },
    modulus(stack) {
        let numArgs = stack.pop(),
            mod = stack.pop();

        for (var i = 0; i < (numArgs - 1); i += 1) {
            mod %= stack.pop();
        }
        stack.push(mod);
        return {
            stack
        }
    },
};
