const db = require('./db-config');
const entries = require('./output');

const massInsert = (array) => {
  array.map((entry) => {
    let queryString = `INSERT INTO products (id, productname, productpic, productprice, producttype)
                       VALUES (${entry.id}, '${entry.productName}', ${entry.productPic}, ${entry.productPrice}, '${entry.productType}');`
    db.query(queryString, (err) => {
      if (err) { console.log(err.stack) }
    });
  });
}


massInsert(entries);