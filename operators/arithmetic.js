exports.add = function (stack) {
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
};

exports.subtract = function (stack) {
    let jumpTo = stack.pop(),
        numArgs = stack.pop(),
        difference = stack.pop();

    for (var i = 0; i < (numArgs - 1); i += 1) {
        difference -= stack.pop();
    }
    stack.push(difference);
    return {
        jumpTo,
        stack
    }
};

exports.multiply = function (stack) {
    let jumpTo = stack.pop(),
        numArgs = stack.pop(),
        product = stack.pop();

    for (var i = 0; i < (numArgs - 1); i += 1) {
        product *= stack.pop();
    }
    stack.push(product);
    return {
        jumpTo,
        stack
    }
};

exports.divide = function (stack) {
    let jumpTo = stack.pop(),
        numArgs = stack.pop(),
        quotient = stack.pop();

    for (var i = 0; i < (numArgs - 1); i += 1) {
        quotient /= stack.pop();
    }
    stack.push(quotient);
    return {
        jumpTo,
        stack
    }
};

exports.modulus = function (stack) {
    let jumpTo = stack.pop(),
        numArgs = stack.pop(),
        mod = stack.pop();

    for (var i = 0; i < (numArgs - 1); i += 1) {
        mod %= stack.pop();
    }
    stack.push(mod);
    return {
        jumpTo,
        stack
    }
};
