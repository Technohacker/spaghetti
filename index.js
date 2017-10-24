#!/usr/bin/env node

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
        while (true) {
            for (let i = 0; i < currentLabel.length; i++) {
                let op = currentLabel[i];

                if (op.instruction === "PushToStack") {
                    stack.push(op.value);
                } else if (op.instruction === "GoTo") {
                    // Check if we need to exit

                    if (op.value === "EOF") {
                        currentLabel = [];
                        continue;
                    }

                    // Search user defined labels
                    if (labels[op.value]) {
                        currentLabel = labels[op.value];
                        // Reset loop counter
                        i = -1;
                        continue;
                    } else if (operators[op.value]) {
                        // If it's an inbuilt operator, make it go back to
                        // normal code flow in normal cases (except ifs and
                        // other branching flows)
                        let result = operators[op.value](stack);
                        stack = result.stack;
                        if (result.jumpTo) {
                            if (result.jumpTo === "EOF") {
                                currentLabel = [];
                            } else {
                                currentLabel = labels[result.jumpTo];
                                // Reset loop counter
                                i = -1;
                            }
                        }
                        continue;
                    } else {
                        throw Error(`Invalid label!: ${op.value}`);
                    }
                }
            }
            if (currentLabel.length === 0) {
                break;
            }
        }
    } catch (e) {
        console.error(e);
    }
})
