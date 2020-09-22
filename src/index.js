import { Executor } from "./executor.js";

let executor = new Executor();
let stack = document.querySelector("#stack");
let variables = document.querySelector("#variables");

function updateDebug() {
    // Stack
    stack.textContent = "";
    executor.stack.forEach(frame => {
        let li = document.createElement("li");
        li.innerText = JSON.stringify(frame);
        stack.prepend(li);
    });

    // Variables
    variables.textContent = "";
    let vars = executor.operators._getVariables();
    Object.keys(vars).forEach(name => {
        let tr = document.createElement("tr");

        let nameEl = document.createElement("td");
        nameEl.innerText = name;
        tr.appendChild(nameEl);

        let val = document.createElement("td");
        val.innerText = JSON.stringify(vars[name]);
        tr.appendChild(val);

        variables.appendChild(tr);
    });
}

function loadProgram() {
    let source = document.querySelector("#source").value;
    if (!source.endsWith("\n")) {
        source += "\n";
    }
    executor.loadProgram(source);
    executor.operators._clearVariables();
    updateDebug();
    document.querySelector("#output").textContent = "";
}

document.querySelector("#load").addEventListener("click", e => loadProgram());

document.querySelector("#step").addEventListener("click", e => {
    executor.stepThrough();
    updateDebug();
});

document.querySelector("#run").addEventListener("click", e => {
    loadProgram();
    let f = () => {
        if (executor.stepThrough()) {
            updateDebug();
            requestAnimationFrame(f);
        }
    };
    f();
});
