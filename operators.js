/**
 * Spaghetti's in built operators
 * @type {Object}
 */
module.exports = {
    print(stack) {
        let jumpTo = stack.pop(),
            numArgs = stack.pop();

        for (var i = 0; i < numArgs; i++) {
            console.log(stack.pop());
        }
        return {
            jumpTo,
            stack
        };
    }
};
