var calcDisplay = document.querySelector(".display");
var inputStarted = false;

document.querySelector(".calc").addEventListener("click", function (event) {
    handleButtonClick(event.target.innerText);
});

document.addEventListener("keydown", function (event) {
    var keyMap = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "/": "/",
        "*": "*",
        "+": "+",
        "-": "-",
        ".": ".",
        Enter: "=",
        Backspace: "C",
        Escape: "C"
    };

    var value = keyMap[event.key];
    if (value !== undefined) {
        handleButtonClick(value);
    }
});

function handleButtonClick(value) {
    switch (value) {
        case "C":
            inputStarted = false;
            calcDisplay.innerText = "";
            break;
        case "=":
            inputStarted = false;
            calcDisplay.innerText = eval(calcDisplay.innerText);
            break;
        default:
            calcDisplay.innerText += value;
    }
}
