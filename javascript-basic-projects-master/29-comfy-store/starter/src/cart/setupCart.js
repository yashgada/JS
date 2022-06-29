// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

// cart will be an array of product objects
let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    // item not in cart, add new item to cart
    let product = findProduct(id);
    // add item to the cart
    product.amount = 1;
    cart = [...cart, product];
    // add item to the DOM
    addToCartDOM(product);
    console.log(cart);
    console.log("added to cart");
  } else {
    // item already in cart, update values
    console.log("product already in cart");
  }
  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage
  setStorageItem("cart", cart);
  // more stuff coming up
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  const total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}
function setupCartFunctionality() {}

const init = () => {
  console.log(cart);
  // display amount of items in cart
  displayCartItemCount();
  // display total amount in cart
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};
init();
