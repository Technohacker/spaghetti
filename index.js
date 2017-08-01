const fs = require("fs");
const tokenizer = require("./tokenizer");
const parser = require("./parser");
const operators = require("./operators");

let labels = {},
    stack = [];

fs.readFile(process.argv[2], (err, buff) => {
    if (err) {
        throw err;
    }

    try {
        // Tokenize the input file,
        let tokens = tokenizer.tokenize(buff.toString());

        // Parse into an AST (which is very biased toward Spaghetti)
        labels = parser.parse(tokens);

        // And start up the program!
        let currentLabel = labels.main;
        while (currentLabel) {
            currentLabel.forEach(op => {
                if (op.instruction === "PushToStack") {
                    stack.push(op.value);
                } else if (op.instruction === "GoTo") {
                    // Check if we need to exit

                    if (op.value === "EOF") {
                        currentLabel = false;
                        return;
                    }

                    // Search user defined labels
                    if (labels[op.value]) {
                        currentLabel = labels[op.value];
                        return;
                    } else if (operators[op.value]) {
                        let result = operators[op.value](stack);
                        stack = result.stack;
                        currentLabel = labels[result.jumpTo];
                        return;
                    } else {
                        throw Error(`Invalid label!: ${op.value}`);
                    }
                }
            });
        }
    } catch (e) {
        console.error(e);
    }
})
