const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector('.products-center')

const fetchProducts = async () => {
    productsDOM.innerHTML = `<!-- loading -->
        <div class="loading"></div>`;
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        productsDOM.innerHTML = `<!-- error -->
        <p class="error">there was an error</p>`;
    }
}

const displayProducts = (list) => {
    const productList = list.map((product) => {
        // you want to id, name, price, img
        const {id} = product
        const { name:title, price } = product.fields
        const { url: image } = product.fields.image[0]
        const formatPrice = price/100
        console.log(id);
        return `
        <!-- single product -->
          <a href="./product.html?id=${id}" class="single-product">
            <img src="${image}" alt="${title}" class="img single-product-img">
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${formatPrice}/-</span>
            </footer>
          </a>
        `;
    }).join('')
    productsDOM.innerHTML = `
    <!-- products -->
        <div class="products-container">
          ${productList}
        </div>
        <!-- error -->
    `;
}

const start = async () => {
    const data = await fetchProducts()
        displayProducts(data)
}

start()