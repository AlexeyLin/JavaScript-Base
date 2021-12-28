/**
 * Функция запрашивает у пользователя количество денег, которые он хочет положить на счет в банке.
 * @returns {number} Количество денег которые хотят положить на счет.
 */
function askSumMoneyRub () {
    return parseInt(prompt("Напишите сумму в рублях, которую вы хотите положить на счет:"));
}
/**
 * Функция определяет последнюю цифру в числе.
 * @param {number} number Заданное число, последнюю цифру которого надо определить.
 * @returns {number} Последня цифра заданного числа.
 */
const lastDigitInNumber = (number) => number % 10;
let sumMoneyRub = askSumMoneyRub ();
if(sumMoneyRub > 4 && sumMoneyRub < 21){
    alert(`Ваша сумма в ${sumMoneyRub} рублей успешно зачислена.`); 
} else {
    switch (lastDigitInNumber(sumMoneyRub)){
        case 1: 
            alert(`Ваша сумма в ${sumMoneyRub} рубль успешно зачислена.`); 
            break;
        case 2:
        case 3: 
        case 4:
            alert(`Ваша сумма в ${sumMoneyRub} рубля успешно зачислена.`); 
            break;
        default:
            alert(`Ваша сумма в ${sumMoneyRub} рублей успешно зачислена.`);
    }
}


