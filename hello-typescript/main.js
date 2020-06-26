var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6
var num = 2;
var PI = 3.14;
//sem ES 6
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//com ES 6
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'asdfsd';
n1 = 4;
