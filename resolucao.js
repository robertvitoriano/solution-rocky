const fs = require("fs");


// 1 Reading File

function readFile(path){

  const data = fs.readFileSync(path);
  const products = JSON.parse(data);

  return products;
}

// 2 Fixing names
function fixNames(products) {
  products.map((product) => {
    product.name = product.name.replace(/æ/g, "a");
    product.name = product.name.replace(/ø/g, "o");
    product.name = product.name.replace(/¢/g, "c");
    product.name = product.name.replace(/ß/g, "b");
  });
}

//************************************************************************************************************************************ */

// 3 converting price to number

function convertPricesToNumber(products) {
  products.map((product) => {
    product.price = parseFloat(product.price);
  });
}



//************************************************************************************************************************************ */

// 4 inform 0 quantity

function informZeroquantity(products) {
  products.map((product) => {
    if (!product.quantity) {
      product.quantity = 0;
    }
  });
}

// 5 write a new Json file

function writeFixedDataInJsonFile(products) {
  const fixedProducts = JSON.stringify(products);
  fs.writeFileSync("./saida.json", fixedProducts);
}



//--------------------------------------------------------------------------------------------------------------------------------------

const filePath = "./broken-database.json"

// 1 reading file
const products = readFile(filePath);
// 2 fixing names
fixNames(products);
// 3 converting prices to number
convertPricesToNumber(products);
// 4 informing 0 quantity
informZeroquantity(products);
// 5 writing fixed data and generating a JSON FILE
writeFixedDataInJsonFile(products);



//*************************************************************** */ Validation ************************************************************

//sorting in alphabetic order and by Id

// 1 Sort By category and Id

function sortByCategoryAndId(products) {
  products.sort((procuctA, productB) => {
    return procuctA.id - productB.id;
  });

  products.sort((productA, productB) => {
    if (productA.category < productB.category) {
      return -1;
    }
    if (productA.category > productB.category) {
      return 1;
    }
    return 0;
  });

  console.log(products);
}

// 2 sum up value in stock by category

function sumTotalValueByCategory(products) {
  console.log("Valor total Por categoria:\n ");
  let totalValueEletronics = 0;
  let totalValueAccessories = 0;
  let totalValuePans = 0;
  let totalValueHomeAppliances = 0;

  products.forEach((product) => {
    if (product.category === "Acessórios") {
      totalValueAccessories += product.price * product.quantity;
    }
    if (product.category === "Eletrodomésticos") {
      totalValueHomeAppliances += product.price * product.quantity;
    }
    if (product.category === "Eletrônicos") {
      totalValueEletronics += product.price * product.quantity;
    }
    if (product.category === "Panelas") {
      totalValuePans += product.price * product.quantity;
    }
  });

  console.log("Valor em Estoque de Eletrônicos: " + totalValueEletronics);
  console.log("Valor em Estoque de Panelas: " + totalValuePans);
  console.log("Valor em Estoque de Eletrodomésticos: " + totalValueHomeAppliances);
  console.log("Valor em Estoque de Acessórios: " + totalValueAccessories);
}


// 1 Sort By category and Id

sortByCategoryAndId(products);

//2 sum up value in stock by category
sumTotalValueByCategory(products);
