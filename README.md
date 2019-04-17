# Product Entry Generator

## Usage
Why would you need to use this program?
Maybe you need to generate entries into a database of some kind, specifically a SQL database,
with entries that aren't typical 'Lorem Ipsum'

## How to use

1) `npm install` the dependencies for this program
2) create a `.env` file in the root of this repo. The only function that is dependent on dotenv is `config` in `db-config.js`. 
3) set up the structure of your data in `productGenerator.js`
4) in `db.js` create methods of how you want your data to be moved in your PostgreSQL database
5) `invoke` those methods within `db.js`
6) in the root directory open up a terminal type `node db.js`. Press enter and there should be a new file created in same directory called `output.js` or a .json
  depending. You can choose your output type.
  
## npm scripts
`generate` will run `node productEntryGenerator.js` in your terminal and create an output file
`reseed` will seed the database you are connected to in your dotenv.
