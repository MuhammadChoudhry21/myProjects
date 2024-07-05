let counter = 0;

document.getElementById("DecreaseBtn").onclick = function () {
    counter -= 1;
    document.getElementById("CounterText").innerHTML = counter;
    if (counter < 0) {
        document.getElementById("CounterText").style.color = "red"
    }
}

document.getElementById("ResetBtn").onclick = function () {
    counter = 0;
    document.getElementById("CounterText").innerHTML = counter;
    document.getElementById("CounterText").style.color = "black";
}

document.getElementById("IncreaseBtn").onclick = function () {
    counter += 1;
    document.getElementById("CounterText").innerHTML = counter;
    if (counter > 0) {
    document.getElementById("CounterText").style.color = "blue";
    }
}

// console.log("Hello World!");
