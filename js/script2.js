console.log("Завдання №2");
console.log("З клавіатури вводиться текстовий рядок. Скласти скрипт, який підраховує кількість слів у кожному реченні.");


function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}


function countWordsInSentences(text) {
   
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g);

    if (!sentences) {
        console.log("Текст не містить речень.");
        return;
    }

    console.log("Введений текст:", text);

    
    sentences.forEach((sentence, index) => {
       
        const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
        console.log(`Речення ${index + 1}: ${sentence.trim()}`);
        console.log(`Кількість слів: ${words.length}`);
    });
}


let inputText;
while (true) {
    inputText = prompt("Введіть текстовий рядок:");

    if (inputText === null) {
        console.log("Введення скасовано користувачем.");
        break;
    } else if (inputText.trim().length === 0) {
        console.log("Помилка: Введіть непорожній текстовий рядок.");
    } else if (isNumeric(inputText.trim())) {
        console.log("Помилка: Введене значення є числом. Будь ласка, введіть текст.");
    } else {
        countWordsInSentences(inputText);
        break;
    }
}
