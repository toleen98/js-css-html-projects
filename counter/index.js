var num = 0;
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");

//increase btn functionlity
increase.addEventListener("click", function() {
    num++;

    document.getElementById("num").innerHTML = num + "";
    colorChanger()
    
});

decrease.addEventListener("click", function () {
    num--

    document.getElementById("num").innerHTML = num + "";
    colorChanger()
});

reset.addEventListener("click", function () {
    num = 0

    document.getElementById("num").innerHTML = num + "";
    colorChanger();
});


function colorChanger() {
    //check if positive
    if (num > 0) {
        document.getElementById("num").style.color = "green";
    }
    //check if negative
    else if (num < 0) {
        document.getElementById("num").style.color = "red";
    }
    else {
        document.getElementById("num").style.color = "hsl(209, 61%, 16%)";
    }
}


