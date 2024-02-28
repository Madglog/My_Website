let Moon = document.getElementById("Moon")
let Mountains = document.getElementById("Mountains")
let Text = document.getElementById("Text")
let Button = document.getElementById("Button")

window.addEventListener("scroll", function () {
    let Value = window.scrollY ;
    Moon.style.marginTop = Value + "px" ;
    Text.style.marginLeft = Value * -1 + "px" ;
    Button.style.marginTop = Value + "px" ;
    
})