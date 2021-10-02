const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.77 + "px";
})

// All hello languages
const helloLanguages = [
    "hello",
    "halo",
    "안녕하세요",
    "你好",
    "こんにちは",
    "สวัสดี",
    "hola",
    "bonjour",
    "Привет"
];

var counter = 0;
var elem = document.getElementById("hello");
setInterval(change, 3000);

function change() {
    elem.classList.add('fade-out');
    setTimeout(function () {
        elem.innerHTML = helloLanguages[counter];
        elem.classList.remove('fade-out');
        counter++;
        if (counter >= helloLanguages.length) {
            counter = 0;
        }
    }, 1000);
}