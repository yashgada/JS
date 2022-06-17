const productDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

const fetchProducts = async () => {
  productDOM.innerHTML = `<!-- loading -->
  <div class="loading"></div>`;
  console.log(window.location.search);
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  try {
    const resp = await fetch(url + `?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<!-- error -->
        <p class="error">there was an error</p>`;
    console.log(error);
  }
};

const displayProduct = (product) => {
  // we need these values: company, colors, description, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();
  console.log("this is colors arr: " + colors);
    const colorsList = colors.map((color) => {
      return `<span class="product-color" style="background:${color}"></span>`;
  }).join('')
  console.log(colorsList);
  productDOM.innerHTML = `<div class="product-wrapper">
            <img src="${img}" alt="${title}" class="img">
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>${price}/-</span>
                <div class="colors">${colorsList}</div>
                <p>${description}</p>
                <button class="btn">add to cart</button>
            </div>
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  console.log(data);
  displayProduct(data);
};

start();
