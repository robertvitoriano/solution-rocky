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



//*************************************************************** */ Validation ************************************************************


//sorting in alphabetic order and by Id

 // 1 Sort By category and Id

function sortByCategoryAndId(products){
    
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
    console.log("Valor total Por categoria:\n ")
    let totalValueEletronics=0;
    let totalValueAccessories = 0;
    let totalValuePans= 0;
    let totalValueHomeAppliances = 0;

    products.forEach(product => {
        if (product.category === "Acessórios"){
             
            totalValueAccessories +=  (product.price*product.quantity);
        }
        if (product.category === "Eletrodomésticos") {

            totalValueHomeAppliances += (product.price * product.quantity);
        }
        if (product.category === "Eletrônicos") {
      
            totalValueEletronics +=  (product.price * product.quantity);
        }
        if (product.category === "Panelas") {
            
            totalValuePans += (product.price * product.quantity);
        }
        
    });

    console.log("Valor em Estoque de Eletrônicos: "+totalValueEletronics);
    console.log("Valor em Estoque de Panelas: "+ totalValuePans);
    console.log("Valor em Estoque de Eletrodomésticos: " + totalValueHomeAppliances);
    console.log("Valor em Estoque de Acessórios: " + totalValueAccessories)

}


 // 1 Sort By category and Id

sortByCategoryAndId(products);

//2 sum up value in stock by category
sumTotalValueByCategory(products);
