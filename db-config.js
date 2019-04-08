const { Client } = require('pg');
require('dotenv').config();

const config = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
}

const client = new Client(config);

// connect to db using values fron config,
// contains confirmation logs upon connection/error
// comment to clear branch `connectservertodb` from terminal

client.connect((err) => {
  if (err) {
    console.error('connection error', err);
  } else {
    console.log('DB connection establish!');
  }
});

module.exports = client;