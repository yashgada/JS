import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  nameInput.addEventListener("keyup", function () {
    const value = nameInput.value;
    console.log(value);
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newStore, getElement(".products-container"), true);
      //   in case there are no products matching search, we can display a message. Doing this after calling display is fine, as newStore would be simply empty
      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">
            sorry, no products match your search
        </h3>`;
      }
    } else {
      // need the if else loop to show all products when input is empty, not none
      display(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
