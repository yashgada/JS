import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const resp = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (resp) {
    return resp.json();
  }
  // if there is a network issue, fetch returns undefined and throws an error. Which is catched by .catch
  return resp;
};

export default fetchProducts;
