function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0';
}

function deleteDisplay() {
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
        display.textContent = 'Error';
    }
}
