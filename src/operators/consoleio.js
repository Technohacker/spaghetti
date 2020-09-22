let output = document.querySelector("#output");

export default {
    print(stack) {
        let numArgs = stack.pop();

        for (var i = 0; i < numArgs; i += 1) {
            let outputLine = document.createElement("p");
            outputLine.innerText = stack.pop();
            output.appendChild(outputLine);
        }
        output.scrollTop = output.scrollHeight;
        return {
            stack
        };
    }
};
