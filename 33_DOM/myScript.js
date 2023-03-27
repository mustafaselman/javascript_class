// document.getElementById("demo").innerHTML = "Hello world"

// // dom elements
// document.getElementsByTagName("p")
// document.getElementsByClassName("intro")
// document.querySelectorAll("p.intro")
// document.forms["frm1"] 
// // name=frm1 

// 1 attrıbute
// document.getElementById("image").src = "smiley.gif"
// document.getElementById("image").width = "300"
// document.getElementById("image").height = "300"

//2
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("burası zorunlu alan");
//         return false;
//     }
// }

//3
// document.getElementById("p2").style.color = "blue"
// document.getElementById("p2").style.backgroundColor = "yellow"

//4
// function changeColor(){
//     let x= document.getElementById("id1").style.color = "red"
// }
// function hide(){
//     let x =document.getElementById("p2").style.visibility = "hidden"
// }
// function show(){
//     let x =document.getElementById("p2").style.visibility = "visible"
// }
// function changeText(id) {
//     id.innerHTML = "ooops"
// }

//5
// function upperCase(){
//     const x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// } 

// function mOver(obj) {
//     obj.innerHTML = "Thank You"
// }
// function mOut(obj) {
//     obj.innerHTML = "Mouse Over Me"
// }

// document.getElementById("myBtn").addEventListener("click", function() {alert("hello world")})

// var x = document.getElementById("myBtn");
// var y = document.getElementById("demo");
// x.addEventListener("mouseover", myFunction)
// x.addEventListener("click", mySecondFunction)
// x.addEventListener("mouseout", myThirdFunction)
// function myFunction() {
//     y.innerHTML += "Moused over<br>";
// }
// function mySecondFunction() {
//     y.innerHTML += "Clicked<br>";
// }
// function myThirdFunction() {
//     y.innerHTML += "Moused out<br>";
// }

// document.getElementById("myP1").addEventListener("click",function() {alert("myP1")},false)
// document.getElementById("myDiv1").addEventListener("click",function(){
//     alert("myDiv1"),false
// })
// document.getElementById("myP2").addEventListener("click",function() {alert("myP2")},true)
// document.getElementById("myDiv2").addEventListener("click",function(){
//     alert("myDiv2")
// },true)

document.getElementById("myDIV").addEventListener("mousemove",myFunction);
function myFunction(){
    document.getElementById("demo").innerHTML= Math.random();
}
function removeHandler(){
    document.getElementById("myDIV").removeEventListener("mousemove",myFunction)
}