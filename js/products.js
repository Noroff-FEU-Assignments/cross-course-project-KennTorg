/* const baseUrl =
    "https://pineapplepizza.no/rainydays/wp-json/wc/v3/products?consumer_key=ck_ac9c2d0d025b348410552aea8ec0e6e11974a334&consumer_secret=cs_d8922f0144f8992feb05dd6ccdea1ae9d510ce69";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function (product) {
        productContainer.innerHTML += `<div class="products"><h2>${product.name}</h2>
        <div class="product-image" style="background-image:url('${product.images[0].src}')`;
    });
}

getProducts(baseUrl);
*/

const baseUrl =
    "https://pineapplepizza.no/rainydays/wp-json/wc/v3/products?consumer_key=ck_ac9c2d0d025b348410552aea8ec0e6e11974a334&consumer_secret=cs_d8922f0144f8992feb05dd6ccdea1ae9d510ce69";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function (product) {
        productContainer.innerHTML += `<div class="product"><h2>${product.name}</h2>
        <img src="${product.images[0].src}"/>
        <p>Price:${product.price}</p>
        </div>
        `;
    });
}
getProducts(baseUrl);

const detailContainer = document.querySelector("product-detail");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
    "https://pineapplepizza.no/rainydays/wp-json/wc/v3/products?consumer_key=ck_ac9c2d0d025b348410552aea8ec0e6e11974a334&consumer_secret=cs_d8922f0144f8992feb05dd6ccdea1ae9d510ce69" +
    id;

console.log(url);

async function fetchDetails() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
    } catch (error) {
        console.log(error);
    }
}
