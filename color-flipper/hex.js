var hexNums =[1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F" ];
var btn = document.getElementById("changer");

//to change background color with each click
btn.addEventListener("click", function () {
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += randomNum();
    }

    document.querySelector("body").style.background = color;
    document.getElementById("color").innerHTML = color;
});


//get random hex number 
function randomNum() {
    var length = hexNums.length;

    return hexNums[Math.floor(Math.random() * length)]
}

