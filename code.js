function myFunction() {
    var side = document.getElementById("sideBar");

    // Altera várias propriedades de CSS do elemento
    side.style.display = 'none';
    var qualquer = document.getElementById("abra");
    
    qualquer.style.display = 'block';
};

var side = document.getElementById("headerSideBar");

side.onclick = this.myFunction;

function abraAba () {
    var side = document.getElementById("sideBar");
    side.style.display = 'block';
    
    var botao = document.getElementById("abra");

    botao.style.display = 'none';

};

var abra = document.getElementById("abra");

abra.onclick = this.abraAba;



var caixaTexto = document.getElementById("input");
var botao = document.getElementById("button");

botao.onclick = this.processa;


function processa() {

    var valorInput = caixaTexto.value;
  var span = document.getElementById("span");

  span.innerText = valorInput;
  document.getElementById("inputRecebe").value = valorInput;

    
};