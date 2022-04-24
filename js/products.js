const baseUrl =
    "https://pineapplepizza.no/rainydays/wp-json/wc/v3/products?consumer_key=ck_ac9c2d0d025b348410552aea8ec0e6e11974a334&consumer_secret=cs_d8922f0144f8992feb05dd6ccdea1ae9d510ce69";
const productContainer = document.querySelector(".products");

async function getProducts(baseUrl) {
    const response = await fetch(baseUrl);
    const products = await response.json();

    products.forEach(function (product) {
        productContainer.innerHTML += `<div class="product"><h2>${product.name}</h2>
        <div class="product-image" style="background-image:url('${product.images[0].src}')`;
    });
}

getProducts(baseUrl);
