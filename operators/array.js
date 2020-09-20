module.exports = {
    createArray(stack) {
        let length = stack.pop();

        stack.push(Array.apply(null, Array(length)).map(e => stack.pop()));

        return {
            stack
        };
    },
    length(stack) {
        let array = stack.pop();

        stack.push(array);
        stack.push(array.length);

        return {
            stack
        };
    },
    update(stack) {
        let value = stack.pop(),
            index = stack.pop(),
            array = stack.pop();

        array[index] = value;

        stack.push(array);

        return {
            stack
        };
    },
    delete(stack) {
        let index = stack.pop(),
            array = stack.pop();

        array.splice(index, 1);

        stack.push(array);

        return {
            stack
        };
    },
    insert(stack) {
        let value = stack.pop(),
            index = stack.pop(),
            array = stack.pop();

        array.splice(index, 0, value);

        stack.push(array);

        return {
            stack
        };
    },
};
