const fs = require("fs");

const data = fs.readFileSync("./broken-database.json");

const products = JSON.parse(data);

// 1 Fixing names
function fixNames(products) {
  products.map((product) => {
    product.name = product.name.replace(/æ/g, "a");
    product.name = product.name.replace(/ø/g, "o");
    product.name = product.name.replace(/¢/g, "c");
    product.name = product.name.replace(/ß/g, "b");
  });
}

fixNames(products);
//************************************************************************************************************************************ */

// 2 converting price to number

function convertPricesToNumber(products) {
  products.map((product) => {
    product.price = parseFloat(product.price);
  });
}

convertPricesToNumber(products);

//************************************************************************************************************************************ */

// 3 inform 0 quantity

function informZeroquantity (products){
    products.map((product) => {
        if (!product.quantity) {
            product.quantity = 0;
        }
    });
}

informZeroquantity(products);

console.log(products);
