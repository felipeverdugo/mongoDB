// Load data into the database
db = db.getSiblingDB("paymentsDB");

const fs = require("fs");

const customersData = JSON.parse(fs.readFileSync("customer.json"));
const transactionsData = JSON.parse(fs.readFileSync("transaction.json"));
const invoicesData = JSON.parse(fs.readFileSync("invoices.json"));
const restaurantsData = JSON.parse(fs.readFileSync("restaurants.json"));
const moviesData = JSON.parse(fs.readFileSync("movies.json"));

db.customer.drop();
db.transaction.drop();
db.invoice.drop();
db.restaurants.drop();
db.movies.drop();

db.customer.insertMany(customersData);
db.transaction.insertMany(transactionsData);
db.invoice.insertMany(invoicesData);
db.restaurants.insertMany(restaurantsData);
db.movies.insertMany(moviesData);

print("Data has been successfully inserted into the databases.");
