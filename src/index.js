const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalsBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (
            button.innerText !== '=' &&
            button.innerText !== 'Clear' &&
            button.innerText !== 'Backspace'
        ) {
            display.value += button.innerText;
        }
    });
});

equalsBtn.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});

clearBtn.addEventListener('click', () => {
    display.value = "";
})

backspaceBtn.addEventListener('click', () => {
    try {
        display.value = display.value.slice(0, -1);
    } catch (error) {
        display.value = "Error";
    }
})