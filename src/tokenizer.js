// Inspired by the=super-tiny-compiler

export default {
    tokenize(input) {
        /*
            There are some tokens we consider to be basic:
            1) goto (obviously)
            2) labels (as obvious)
            3) numbers
            4) strings

            The remaining are done using `goto`s
         */
        let script = input.split(""),
            currentToken = 0,
            tokens = [];

        // Our regexes
        let WHITESPACE = /\s/,
            NUMBERS = /[0-9]/,
            LETTERS = /[a-z]/i

        while (currentToken < script.length) {
            let char = script[currentToken];

            // Whitespace
            if (WHITESPACE.test(char)) {
                currentToken += 1
                continue;
            }

            // Arbitrary strings. Could be labels, booleans or goto
            if (LETTERS.test(char)) {
                let value = "";

                while (LETTERS.test(char)) {
                    value += char;
                    char = script[++currentToken];
                }

                // Could be a goto or label
                if (char === ":") {
                    // Label
                    tokens.push({
                        type: "label",
                        value
                    });
                    currentToken += 1;
                    continue;
                } else if (value === "goto") {
                    // Goto. Get the label to jump to
                    let label = "";

                    char = script[++currentToken];

                    while (LETTERS.test(char)) {
                        label += char;
                        char = script[++currentToken];
                    }

                    tokens.push({
                        type: "goto",
                        value: label
                    });
                    continue;
                } else if (value === "true" || value === "false") {
                    // Boolean
                    tokens.push({
                        type: "boolean",
                        value: JSON.parse(value)
                    });
                    continue;
                } else {
                    // Not a token. SYNTAX ERROR!
                    throw Error(`Unknown token: ${value}`);
                }
            }

            // Number
            if (NUMBERS.test(char)) {
                let value = 0;
                while (NUMBERS.test(char)) {
                    value = (value * 10) + parseInt(char, 10);
                    char = script[++currentToken];
                }
                tokens.push({
                    type: "number",
                    value
                });
                continue;
            }

            // String
            if (char === '"') {
                let value = "";

                char = script[++currentToken];

                while (char !== '"') {
                    value += char;
                    char = script[++currentToken];
                }

                char = script[++currentToken];

                tokens.push({
                    type: "string",
                    value
                });
                continue;
            }

            // Comment
            if (char === ";") {
                // Skip everything upto EOL
                char = script[++currentToken];

                while (char !== "\n") {
                    char = script[++currentToken];
                }
                continue;
            }
        }
        return tokens;
    }
};
