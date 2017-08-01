const fs = require("fs");
const tokenizer = require("./tokenizer");

let labels = {};

fs.readFile(process.argv[2], (err, buff) => {
    if (err) {
        throw err;
    }

    try {
        let tokens = tokenizer.tokenize(buff.toString());
        console.log(tokens);
    } catch (e) {
        console.error(e);
    }
})
