export default {
    parse(tokens) {
        let ast = {},
            currentToken = 0;

        while (currentToken < tokens.length) {
            let token = tokens[currentToken];

            if (token.type === "label") {
                let currentLabel = token.value;
                ast[currentLabel] = [];

                token = tokens[++currentToken];

                while (currentToken < tokens.length && token.type !== "label") {
                    if (token.type === "goto") {
                        ast[currentLabel].push({
                            instruction: "GoTo",
                            value: token.value
                        });
                        token = tokens[++currentToken];
                        continue;
                    }

                    ast[currentLabel].push({
                        instruction: "PushToStack",
                        value: token.value
                    });

                    token = tokens[++currentToken];
                }
            } else {
                throw Error(`Token without label!: ${token.value}`)
            }
        }
        return ast;
    }
};
