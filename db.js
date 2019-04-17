const db = require('./db-config');
const entries = require('./output');
const newPrices = require('./extractPrices.js')

const massInsert = (array) => {
  array.map((entry) => {
    console.log(entry.id, entry.productName, entry.productPrice, entry.productType, entry.productPic);
    let queryString = `INSERT INTO public.products (id, productName, productPrice, productType, productPic)
                       VALUES (${entry.id}, '${entry.productName}', ${entry.productPrice}, '${entry.productType}', '${entry.productPic}');`
    db.query(queryString, (err) => {
      if (err) {
        console.log('error in massInsert', err.stack);
        db.end();
      } else {
        console.log('success!');
      }
    });
  });
}

const clearProducts = () => {
  let queryString ='DELETE FROM public.products *;'

  db.query(queryString, (err)=> {
    if (err) {
      console.log('error in clearProducts', err.stack);
    } else {
      console.log('entry cleared')
    }
  })
}
// clearProducts();
// massInsert(entries);

const updatePrices = (array) => {
  array.map((entry) => {
    let updateString = `UPDATE public.products SET productPrice = ${entry.productPrice} WHERE (id = ${entry.id})`;
    db.query(updateString, (err) => {
      if (err){
        console.log('error in updatePrices', err.stack)
      } else {
        console.log('entry updated!');
      }
    })
  })
}

updatePrices(newPrices);