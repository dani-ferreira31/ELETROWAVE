const addButton = document.getElementById("add-button");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productImageInput = document.getElementById("product-image");
const productsSection = document.getElementById("products");

const addProductContent = document.getElementById("add-product-content");
const viewStoreContent = document.getElementById("view-store-content");
const addProductTab = document.getElementById("add-product-tab");
const viewStoreTab = document.getElementById("view-store-tab");

addButton.addEventListener("click", () => {
    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);
    const productImage = productImageInput.files[0];

    if (productName && productPrice) {
        addProduct(productName, productPrice, productImage);
        productNameInput.value = "";
        productPriceInput.value = "";
        productImageInput.value = null;
    }
});

addProductTab.addEventListener("click", () => {
    addProductContent.style.display = "block";
    viewStoreContent.style.display = "none";
});

viewStoreTab.addEventListener("click", () => {
    addProductContent.style.display = "none";
    viewStoreContent.style.display = "block";
});

function addProduct(name, price, image) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <h3>${name}</h3>
        <p>Preço: R$ ${price.toFixed(2)}</p>
        <img src="${URL.createObjectURL(image)}" alt="${name}" width="100">
    `;
    productsSection.appendChild(productDiv);
}
