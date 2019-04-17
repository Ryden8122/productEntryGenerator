// I think this can be written in pure node.js

/*
  Steps, 

  1) Create variable arrays to pull from
    such as prices, URL (placeholders for now until I can find some)
  2) Read from files, or CSVs I have from our groups compilation of products to sell

  3) fs.writeFile to output.json
    output should be an array of objects
*/

const fs = require('fs');

let TexanProducts = []; // This array can instead be a populated CSV or .txt file
let CanadianProducts = [];
const productPicURL = null;
const productPrices = [26.95, 44.44, 11.99, 12.99, 19.99, 1999.99, 4100.04, 80.80, 7.77, 99.99, 1.25, 4.99]; // Prices don't need to be perfect. Just have some so they look 'somewhat' realistic. Have at least 25 different prices.
// const productType = null; // Is either Texan or Canadian.
let output = []; // Array of objects

// First read files, input2.txt is Candian items
fs.readFile('input2.txt', 'utf8', (err, theGoods) => {
  if (err) {
    console.error('Ahh! Get me outta this mess!');
  } else {
    CanadianProducts = theGoods.split('\n'); // change split flag here
    CanadianProducts.map((product, i) => {
        let newEntry = {};

        newEntry.id = i + 1;
        newEntry.productName = product;
        newEntry.productPic = productPicURL + `${i+1}_1.jpg`;
        newEntry.productPrice = productPrices[Math.floor(Math.random() * productPrices.length)].toFixed(2);
        newEntry.productType = 'Canadian';

        output.push(newEntry);
    });
  }
});

fs.readFile('input.txt', 'utf8', (err, theGoods) => {
  if (err) {
    console.error('Ahh! Get me outta this mess!');
  } else {
    TexanProducts = theGoods.split('\n');
    TexanProducts.map((product, i) => {
      let newEntry = {};

      newEntry.id = i + 26;
      newEntry.productName = product;
      newEntry.productPic = productPicURL + `${i+26}_1.jpg`;
      newEntry.productPrice = productPrices[Math.floor(Math.random() * productPrices.length)].toFixed(2);
      newEntry.productType = 'Texan';

      output.push(newEntry);
    });

    fs.writeFileSync('output.json', JSON.stringify(output));
  }
});

