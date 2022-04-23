const url = ""
const productContainer = document.querySelector(".product-list");

async function getProduct(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(product){
        productContainer.innerHTML += 
        `<div class="product"><h2>${product.name}</h2>
        <div class="product-image" style="background-image:url(`${product.images[0].src}
    }
}