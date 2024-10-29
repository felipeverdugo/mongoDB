// Load data into the database
db = db.getSiblingDB("paymentsDB");

const fs = require('fs');



const customersData = JSON.parse(fs.readFileSync('customer.json'));
const transactionsData = JSON.parse(fs.readFileSync('transaction.json'));
const invoicesData = JSON.parse(fs.readFileSync('invoices.json'));




db.customer.drop();
db.transaction.drop();
db.invoice.drop();




db.customer.insertMany(customersData);
db.transaction.insertMany(transactionsData);
db.invoice.insertMany(invoicesData);




print("Data has been successfully inserted into the databases.");
