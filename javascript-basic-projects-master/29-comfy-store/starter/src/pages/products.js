// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { setupStore, store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";
import fetchProducts from "../fetchProducts.js";

const init = async () => {
  const loading = getElement(".page-loading");
  console.log("store is");
  console.log(store);
  if (store.length < 1) {
    console.log("Detected store.length<1, fetching store again");
    const products = await fetchProducts();
    setupStore(products);
  }

  // display the whole store, unlike only the featured in index.html
  display(store, getElement(".products-container"));
  // setup search function on the search input
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);

  // loading should be removed last
  loading.style.display = "none";
};
init();
