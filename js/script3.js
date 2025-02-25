console.log("Завдання №3");
console.log("Обчисліть n-те число Фібоначчі.");

function fibonacci(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;

    let a = 1, b = 1, temp;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function getFibonacciNumber() {
    let n;
    while (true) {
        let input = prompt("Введіть номер числа Фібоначчі (ціле число більше 0):");
        
        if (input === null) {
            console.log("Введення скасовано користувачем.");
            return null;
        }

        console.log("Введені дані:", input); 
        
        n = Number(input);

        if (!Number.isInteger(n) || n <= 0) {
            console.log("Помилка! Введіть коректне додатне ціле число.");
        } else {
            return n;
        }
    }
}


let num = getFibonacciNumber();
if (num !== null) {
    console.log(`Число Фібоначчі під номером ${num}:`, fibonacci(num));
}

