import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get('.search-form')
const input = get('[name="drink"]')
console.log(input);

form.addEventListener('keyup',function (e) {
    e.preventDefault();
    console.log(input.value);
    const value = input.value
    if (!value) return;
    presentDrinks(`${baseURL}${value}`)
})