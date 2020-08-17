var modal = document.getElementById("modal-ovarly");
var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function() {
    modal.style.visibility="visible";
})

closeBtn.addEventListener("click", function() {
    modal.style.visibility="hidden";
})