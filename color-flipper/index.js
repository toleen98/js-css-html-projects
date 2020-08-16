var hexNums =["red", "green", "blue", "white", "Tomato", "orange", "DodgerBlue", "Gray", "SlateBlue","MediumSeaGreen", "azure", "brown" ];
var btn = document.getElementById("changer");

//to change background color with each click
btn.addEventListener("click", function () {
    var color = randomNum();

    document.querySelector("body").style.background = color;
    document.getElementById("color").innerHTML = color;
});


//get random hex number 
function randomNum() {
    var length = hexNums.length;

    return hexNums[Math.floor(Math.random() * length)]
}

