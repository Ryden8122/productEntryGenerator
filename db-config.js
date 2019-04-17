const { Client } = require('pg');
require('dotenv').config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
}

const client = new Client(config);

client.connect((err) => {
  if (err) {
    console.error('connection error', err);
  } else {
    console.log('DB connection establish!');
  }
});

module.exports = client;