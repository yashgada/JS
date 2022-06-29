import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  // setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice);
  priceInput.max = maxPrice;
  priceInput.value = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value: ₹${priceInput.value}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    // point to be noted here, value returned from priceInput.value is a STRING. Need to parse it to int

    priceValue.textContent = `Value: ₹${priceInput.value}`;

    // let newStore = store.filter((product) => product.price <= value);
    let newStore = store.filter((product) => product.price <= value);
    display(newStore, getElement(".products-container"));
    if (newStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">sorry, no products match your search`;
    }
  });
};

export default setupPrice;
