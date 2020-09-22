export default {
    areEqual(stack) {
        let operand2 = stack.pop(),
            operand1 = stack.pop();

        if (operand1 === operand2) {
            stack.push(true);
        } else {
            stack.push(false);
        }

        return {
            stack
        }
    },
    areNotEqual(stack) {
        let operand2 = stack.pop(),
            operand1 = stack.pop();

        if (operand1 !== operand2) {
            stack.push(true);
        } else {
            stack.push(false);
        }

        return {
            stack
        }
    },
    isGreaterThan(stack) {
        let operand2 = stack.pop(),
            operand1 = stack.pop();

        if (operand1 > operand2) {
            stack.push(true);
        } else {
            stack.push(false);
        }

        return {
            stack
        }
    },
    isGreaterThanOrEquals(stack) {
        let operand2 = stack.pop(),
            operand1 = stack.pop();

        if (operand1 >= operand2) {
            stack.push(true);
        } else {
            stack.push(false);
        }

        return {
            stack
        }
    },
    isLesserThan(stack) {
        let operand2 = stack.pop(),
            operand1 = stack.pop();

        if (operand1 < operand2) {
            stack.push(true);
        } else {
            stack.push(false);
        }

        return {
            stack
        }
    },
    isLesserThanOrEquals(stack) {
        let operand2 = stack.pop(),
            operand1 = stack.pop();

        if (operand1 <= operand2) {
            stack.push(true);
        } else {
            stack.push(false);
        }

        return {
            stack
        }
    }
};
