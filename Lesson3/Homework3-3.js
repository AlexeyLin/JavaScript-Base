'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
/**
 * Функция применяет скидку к товару
 * @param {object} product Товар на который нужно применить скидку
 */
function useDiscount(product){
    product.price *= 0.85;
}

products.forEach(useDiscount);
console.log(products);