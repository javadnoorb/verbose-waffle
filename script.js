function showMessage() {
    document.getElementById("message").textContent = "Hello!! You clicked the button.";
}

function addNumbers() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const sum = number1 + number2;
    document.getElementById("message").textContent = "The sum is: " + sum;
}

function plotQuadratic() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const xMin = parseFloat(document.getElementById("xMin").value);
    const xMax = parseFloat(document.getElementById("xMax").value);
    const canvas = document.getElementById("plot");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    for (let x = xMin; x <= xMax; x += 0.1) {
        const y = a * x * x + b * x + c;
        const canvasX = (x - xMin) / (xMax - xMin) * canvas.width;
        const canvasY = canvas.height / 2 - y * 10;
        if (x === xMin) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();
}