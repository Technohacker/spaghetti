/**
 * Spaghetti's in built operators
 * @type {Object}
 */
module.exports = {
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
    },
    add(stack) {
        let jumpTo = stack.pop(),
            numArgs = stack.pop(),
            sum = 0;

        for (var i = 0; i < numArgs; i += 1) {
            sum += stack.pop();
        }
        stack.push(sum);
        return {
            jumpTo,
            stack
        }
    }
};
