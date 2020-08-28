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


function writeFixedDataInJsonFile(products){
    const fixedProducts = JSON.stringify(products);
    fs.writeFileSync('./fixed-database.json', fixedProducts);

}


// 1 fixing names
fixNames(products);
// 2 converting prices to number
convertPricesToNumber(products)
// 3 informing 0 quantity
informZeroquantity(products)
//4 writing fixed data and generating a JSON FILE
writeFixedDataInJsonFile(products)
