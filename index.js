const fs = require("fs");
const tokenizer = require("./tokenizer");
const parser = require("./parser");

let labels = {},
    stack = [];

fs.readFile(process.argv[2], (err, buff) => {
    if (err) {
        throw err;
    }

    try {
        let tokens = tokenizer.tokenize(buff.toString());
        labels = parser.parse(tokens);
        console.log(labels);
    } catch (e) {
        console.error(e);
    }
})
