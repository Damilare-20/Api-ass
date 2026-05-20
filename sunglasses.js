let myproducts = [];

async function getProducts() {
  try {
    let url = "https://dummyjson.com/products/category/sunglasses?limit=0";

    let response = await fetch(url);
    let data = await response.json();
    myproducts = data.products;

    let productsArray = myproducts.map(function (value) {
      return `
        <div class="justify-between bg-white rounded-xl border border-gray-100 group shadow-sm hover:shadow-md h-full">
        <div class="relative overflow-hidden bg-gray-50  max-h-52">
    <img 
      src="${value.images[1]}" 
      alt="${value.brand}"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    >
    <span class="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full shadow-xs uppercase ">
      ${value.tags[1]}
    </span>
  </div>

  <div class="p-5 flex-1 flex flex-col justify-between">
    <div>
      <h3 class="font-semibold text-gray-900 text-lg  mb-1">
        ${value.brand}
      </h3>
      <div class="flex items-center gap-1 mb-4">
       
        <span class="text-sm font-medium text-gray-600">${value.rating}</span>
      </div>
    </div>

    <div class="flex items-center justify-between pt-3 border-t border-gray-50">
      <div class="flex flex-col">
        <span class="text-xs text-gray-400 uppercase tracking-wider">Price</span>
        <span class="text-xl font-bold text-gray-900">${value.price}</span>
      </div>
    </div>
  </div>
   </div>
      `;
    });

    document.getElementById("products").innerHTML = productsArray.join("");
  } catch (error) {
    console.log(error);
    document.querySelector("#errorUser").innerHTML = "Error loading users...";
  } finally {
    console.log("Fetching completed");
  }
}

getProducts();
