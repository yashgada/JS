let filteredProducts = [...products];
const standard = [...products]
const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  // keyup is fired when key is released
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts(filteredProducts);
});


const displayProducts = (products = products) => {
// const displayProducts = (products = standard) => {
  if (products.length < 1) {
    productsContainer.innerHTML = "<h6>No products here</h6>";
    return;
  }
  productsContainer.innerHTML = products
    .map(({ id, image, title, price }) => {
      return `
        <!-- single product -->
        <article class="product" data-id='${id}'>
          <img src="${image}" alt="" class="product-img img">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>
        <!-- single product -->
        `;
    })
    .join("");
};

displayProducts(filteredProducts);

// filter buttons functionality

const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}" >${company}</button>`;
    })
    .join("");
};
displayButtons();

companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      displayProducts();
      console.log("all clicked!");
      return;
    }
  }
//   console.log(products);
});
