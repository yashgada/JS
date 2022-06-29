import { getStorageItem, setStorageItem } from "./utils.js";
// store is an array of product objects
let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((product) => {
    // console.log(product);
    const {
      id,
      fields: { company, price, name, featured, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, company, price, name, featured, colors, image };
  });
  setStorageItem("store", store);
};
// console.log("from store");
// console.log(store);
const findProduct = (id) => {
  const product = store.find((product) => product.id === id);
  return product;
};
export { store, setupStore, findProduct };
