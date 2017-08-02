module.exports = {
    areEqual(stack) {
        let jumpToFalse = stack.pop(),
            jumpToTrue = stack.pop(),
            operand2 = stack.pop(),
            operand1 = stack.pop();

        return {
            jumpTo: (operand1 === operand2) > jumpToTrue : jumpToFalse,
            stack
        }
    },
    areNotEqual(stack) {
        let jumpToFalse = stack.pop(),
            jumpToTrue = stack.pop(),
            operand2 = stack.pop(),
            operand1 = stack.pop();

        return {
            jumpTo: (operand1 === operand2) > jumpToTrue : jumpToFalse,
            stack
        }
    },
    isGreaterThan(stack) {
        let jumpToFalse = stack.pop(),
            jumpToTrue = stack.pop(),
            operand2 = stack.pop(),
            operand1 = stack.pop();

        return {
            jumpTo: (operand1 > operand2) > jumpToTrue : jumpToFalse,
            stack
        }
    },
    isGreaterThanOrEquals(stack) {
        let jumpToFalse = stack.pop(),
            jumpToTrue = stack.pop(),
            operand2 = stack.pop(),
            operand1 = stack.pop();

        return {
            jumpTo: (operand1 >= operand2) > jumpToTrue : jumpToFalse,
            stack
        }
    },
    isLesserThan(stack) {
        let jumpToFalse = stack.pop(),
            jumpToTrue = stack.pop(),
            operand2 = stack.pop(),
            operand1 = stack.pop();

        return {
            jumpTo: (operand1 < operand2) > jumpToTrue : jumpToFalse,
            stack
        }
    },
    isLesserThanOrEquals(stack) {
        let jumpToFalse = stack.pop(),
            jumpToTrue = stack.pop(),
            operand2 = stack.pop(),
            operand1 = stack.pop();

        return {
            jumpTo: (operand1 <= operand2) > jumpToTrue : jumpToFalse,
            stack
        }
    }
};
