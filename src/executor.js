import tokenizer from "./tokenizer.js";
import parser from "./parser.js";

import operators from "./operators.js";

export class Executor {
    constructor() {
        this.labels = {};
        this.stack = [];
        this.index = 0;
        this.operators = operators;
    }

    loadProgram(source) {
        // Tokenize the input file,
        let tokens = tokenizer.tokenize(source);

        // Parse into an AST (which is very biased toward Spaghetti)
        this.labels = parser.parse(tokens);

        this.currentLabel = this.labels.main;

        this.index = 0;
    }

    stepThrough() {
        if (this.index >= this.currentLabel.length) {
            return false;
        }

        let op = this.currentLabel[this.index];

        if (op.instruction === "PushToStack") {
            this.stack.push(op.value);
        } else if (op.instruction === "GoTo") {
            // Check if we need to exit

            if (op.value === "EOF") {
                this.currentLabel = [];
                return true;
            }

            // Search user defined labels
            if (this.labels[op.value]) {
                this.currentLabel = this.labels[op.value];
                // Reset loop counter
                this.index = 0;
                return true;
            } else if (operators[op.value]) {
                // If it's an inbuilt operator, make it go back to
                // normal code flow in normal cases (except ifs and
                // other branching flows)
                let result = operators[op.value](this.stack);
                this.stack = result.stack;
                if (result.jumpTo) {
                    if (result.jumpTo === "EOF") {
                        this.currentLabel = [];
                    } else {
                        this.currentLabel = this.labels[result.jumpTo];
                        // Reset loop counter
                        this.index = -1;
                    }
                }
            } else {
                throw Error(`Invalid label!: ${op.value}`);
            }
        }

        this.index += 1;

        return this.currentLabel.length !== 0;
    }
};
