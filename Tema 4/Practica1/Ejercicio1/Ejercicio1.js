// declarar un array
var numbers = [];
// preguntar los 5 numeros
for (var i = 0; i < 5; i++) {
    numbers[i] = Number(prompt("Introduce un numero:"));
}
// calcular la suma 
var sum = 0;
for (var i = 0; i < 5; i++) {
    sum += numbers[i];
}
console.log("La suma de los numeros es: " + sum);
// contar los numeros mayores de 100
var count = 0;
for (var i = 0; i < 5; i++) {
    if (numbers[i] > 100) {
        count++;
    }
}
console.log("Cantidad de numeros mayores de 100: " + count);
