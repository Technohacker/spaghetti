module.exports = {
    jumpIfTrue(stack) {
        let jumpTo = stack.pop(),
            operand = stack.pop();

        if (operand) {
            return {
                stack,
                jumpTo
            };
        } else {
            return {
                stack
            };
        }
    }
};
