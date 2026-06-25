const url = "https://www.course-api.com/javascript-store-products";

function fetchProductsThen() {
  fetch(url)
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}
