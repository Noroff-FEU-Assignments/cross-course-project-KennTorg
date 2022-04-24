const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);

const cors = "https://noroffcors.herokuapp.com/";
const url =
    "https://pineapplepizza.no/rainydays/wp-json/wc/v3/products?consumer_key=ck_ac9c2d0d025b348410552aea8ec0e6e11974a334&consumer_secret=cs_d8922f0144f8992feb05dd6ccdea1ae9d510ce69" +
    id;

const corsUrl = cors + url;

console.log(corsUrl);

const productContainer = document.querySelector(".products");

function error(message = "error") {
    return `<div class"error">${message}</div>`;
}

console.log(corsUrl);

async function getProducts() {
    try {
        const response = await fetch(corsUrl);
        const results = await response.json();
        const product = results[0];

        console.log(product);
        productContainer.innerHTML += `
        <div class=".products">
          <h2>${product.name}</h2>
          <img src="${product.images[0].src}" />
        <p>Price: ${product.prices.price}</p>
      </div>`;
    } catch (error) {
        console.log(error);
    }
}

getProducts();
