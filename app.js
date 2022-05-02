var foco = document.getElementById("foco") 
var botonOff = document.getElementById("off")
var botonOn = document.getElementById("on")
 
botonOn.addEventListener("click",function(){
    console.log("on")
    foco.src = "https://www.w3schools.com/js/pic_bulbon.gif"
})
botonOff.addEventListener("click",function(){
    console.log("off")
    foco.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})