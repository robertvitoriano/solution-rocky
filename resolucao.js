const fs = require("fs");

const data = fs.readFileSync("./broken-database.json");

const parsedData = JSON.parse(data);

//  fixing names
function fixNames(parsedData) {
  const   decryptedData = parsedData.map(product => {
        product.name = product.name.replace(/æ/g, 'a');
        product.name = product.name.replace(/ø/g, 'o');
        product.name = product.name.replace(/¢/g, 'c');
        product.name = product.name.replace(/ß/g, 'b');
        return product;
    });


return decryptedData;
}

console.log(fixNames(parsedData));

