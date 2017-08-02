module.exports = {
    print(stack) {
        let numArgs = stack.pop();

        for (var i = 0; i < numArgs; i += 1) {
            console.log(stack.pop());
        }
        return {
            stack
        };
    }
};
