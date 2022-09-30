const btn = document.getElementById("enter");
const home = document.getElementById("home");
const pic = document.getElementById("picture");
var audio = new Audio("/files/music.mp3");

btn.onclick = function () {
    home.style.display = "none";
    pic.style.display = "block";
    audio.play();
}