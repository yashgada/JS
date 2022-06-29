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
    // here, we have a function to increase the amount for product with id, and return the new amount, so we can update the DOM too
    const amount = increaseAmount(id);
    // querySelectorAll gives a nodeList, need to expand that into an array
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((item) => item.dataset.id === id);
    newAmount.textContent = amount;
    console.log(items);
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

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
}

function increaseAmount(id) {
  // increases the amount of item with id, and returns the new amount
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}
function decreaseAmount(id) {
  // increases the amount of item with id, and returns the new amount
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function setupCartFunctionality() {
  // this function updates the cart in DOM and local storage BOTH in one go
  cartItemsDOM.addEventListener("click", (e) => {
    const element = e.target;
    const parent = element.parentElement;
    const id = element.dataset.id;
    const parentID = parent.dataset.id;

    // remove
    if (element.classList.contains("cart-item-remove-btn")) {
      // this removes from the cart variable
      removeItem(id);
      // this removes from the DOM
      parent.parentElement.remove();
    }
    // increase
    if (parent.classList.contains("cart-item-increase-btn")) {
      // remember to send parentID, and not element's id in this case. Element won't have an ID
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }

    // before setting up the logic of this function, we know that after updating cart functionalities, like add, reduce, remove, we need to fire the following functions:
    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

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
