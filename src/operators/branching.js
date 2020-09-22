export default {
    goto(stack) {
        let jumpTo = stack.pop();

        return {
            stack,
            jumpTo
        };
    },
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
