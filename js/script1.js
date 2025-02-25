console.log("Завдання №1");
console.log("У автоматично згенерованому масиві цілих чисел, знайти число, яке зустрічається найчастіше. Якщо таких чисел декілька, то вивести їх всі та вказати їх кількість.");


function generateRandomArray(size, min, max) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}


function findMostFrequentNumbers(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;

   
    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
    });

  
    const mostFrequentNumbers = Object.entries(frequencyMap)
        .filter(([_, freq]) => freq === maxFrequency)
        .map(([num, freq]) => ({ number: Number(num), frequency: freq }));

    return mostFrequentNumbers;
}


function getArraySize() {
    let size;
    while (true) {
        let input = prompt("Введіть розмір масиву (ціле число більше 0):");
        
        if (input === null) {
            console.log("Введення скасовано користувачем.");
            return null; 
        }
        
        size = Number(input);
        
        if (!Number.isInteger(size) || size <= 0) {
            console.log("Помилка: Введіть коректне додатне ціле число!");
        } else {
            return size;
        }
    }
}


const size = getArraySize();
if (size === null) {
   
} else {
    const randomArray = generateRandomArray(size, 1, 10); 
    console.log("Введені дані:", randomArray);

    const result = findMostFrequentNumbers(randomArray);

   
    console.log("Результат:");
    result.forEach(({ number, frequency }) => {
        console.log(`Число ${number} зустрічається ${frequency} разів`);
    });
}
