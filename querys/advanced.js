const conn = new Mongo("localhost:27017");

const db = conn.getDB("mi_tienda");

print(
  "Colecciones de la base de datos paymentsDB son :",
  db.getCollectionNames()
);

