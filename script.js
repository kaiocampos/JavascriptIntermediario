function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var p1 = Math.floor(Math.random()*500);
    var p2 = Math.floor(Math.random()*400);
    bola.setAttribute("style", "left:"+p1+"px;"+"top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}
function estourar(elemento) {
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBola, 1000);
}






















/*function apertouMouse() {
    console.log("APERTOU O MOUSE!");
}

function soltouMouse() {
    console.log("SOLTOU O MOUSE!!");
}

function passouMouse() {
    console.log("Mouse té encima!");
}

function mousesaiu() {
    console.log("Mouse saiu de cima!");
}

function moveumouse() {
    console.log("Movou o mouse!");
}
*/