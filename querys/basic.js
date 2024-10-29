const conn = new Mongo("localhost:27017");

//Mostrar las bases de datos para
print(conn.showCollection())


const db = conn.getDB("paymentsDB");




// Ejercicios de Consultas Básicas
print("Ejercicios de Consultas Básicas");
print("-------------------------------");

//Mostras las colecciones de la base de datos de paymentsDB
print("Colecciones de la base de datos SupportTI son :", db.getCollectionNames());





