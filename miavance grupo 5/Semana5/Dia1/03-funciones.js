//ámbito global = todo el documento

// let constante = 2;

function calcularAreaTriangulo(base, altura) {
    //ámbito local = solamente dentro de esta función
    // let mivariable = 1000;
    //ponemos el código que se va a ejecutar
    //cuando invoquemos/llamemos/ejecutemos
    //esta función
    let area = (base * altura) / 2;

    //a) indica que va a devolver mi función
    //b) termina la ejecución de mi función
    // console.log("mi variable", mivariable);
    return area;
}

// console.log(constante);
let num1 = +prompt("Ingrese la base del trian.");
let num2 = +prompt("Ingrese la altura del trian.");
let calcular = calcularAreaTriangulo(num1, num2);
console.log(calcular)
// console.log(area);

// let resultado = calcularAreaTriangulo(50, 15);

// let resultado2 = calcularAreaTriangulo(100, 25);

// console.log(resultado);

// console.log(resultado2);

// console.log(calcularAreaTriangulo(10, 4));
