function fn() {
    var button = document.getElementById("button"),
        image = document.getElementById("pista3"),
        pista = document.getElementById("pista3text"),
        input = document.getElementById("input");

    button.addEventListener("click", function(){
        if (input.value == "54") {
            image.style.display = "block";
            pista.style.display = "block";
        } else {
            alert("algo está mal");
        }
    }, false);
}
document.addEventListener('DOMContentLoaded', fn, false);


