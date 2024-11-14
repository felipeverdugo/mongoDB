
const conn = new Mongo("localhost:27017");

const db = conn.getDB("paymentsDB");

//Mostras las colecciones de la base de datos de paymentsDB

const customers = db.getCollection("customer");
const transaction = db.getCollection("transaction");
const invoice = db.getCollection("invoice");

// Listar el total de gasto de cada cliente, sumando los montos de todas sus facturas.
print(
  "Listar el total de gasto de cada cliente, sumando los montos de todas sus facturas"
);

print(invoice.findOne());

print(
  invoice.aggregate([
    {
      $group: { _id: "$customer_id", total: { $sum: "$total_amount" } },
    },
    { $limit: 1 },
  ])
);

print("// Contar el número de transacciones por cada método de pago.");

// print(transaction.findOne());

print(
  transaction.aggregate([
    { $group: { _id: "$payment_method", ocurrencias: { $sum: 1 } } },
  ])
);

print(
  "// Listar todos los clientes con el total de facturas y el monto promedio de sus facturas."
);

print(invoice.findOne());

print(
  invoice.aggregate([
    {
      $group: {
        _id: "$customer_id",
        total_de_facturas: { $sum: 1 },
        monto_promedio: { $avg: "$total_amount" },
      },
    },
  ])
);


// Obtener el monto total recaudado por mes en todas las transacciones completadas.


print("// Obtener el monto total recaudado por mes en todas las transacciones completadas.")



// Filtrar clientes con facturas en moneda distinta de "USD" y mostrar sus datos.
