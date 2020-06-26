var minhaVar = 'minha variavel';

function minhaFunc(x,y){
    return x+y;
}

//ES 6
let num = 2;
const PI = 3.14;

//sem ES 6
var numeros = [1,2,3];
numeros.map(function(valor) {
    return valor * 2;
});

//com ES 6
numeros.map(valor => valor * 2);

class Matematica {
    soma(x, y){
        return x + y;
    }
}

var n1: any = 'asdfsd';
n1 = 4;