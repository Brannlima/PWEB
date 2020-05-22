
var x;
var y;

function Retangulo(x,y){
    this.x = prompt("Digite o valor da base");
    this.y = prompt("Digite o valor da altura");
    CalcArea();
}

function CalcArea(){

    return alert("Área é igual a: " + this.x*this.y);
}
