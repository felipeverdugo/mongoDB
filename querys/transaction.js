// Eliminar transacciones en estado "Pending" que tengan más de 6 meses.

const conn = new Mongo("localhost:27017");

const db = conn.getDB("paymentsDB");

const transaction = db.getCollection("transaction");

print(transaction.findOne());

// Agregar una nueva transacción para una factura existente, con campos como invoice_id, date, amount, currency, payment_method, y status.
var invoice_id = 1;

if (transaction.findOne({ invoice_id: invoice_id })) {
  print("Existe la facutura, se procede a generar una nueva transacción");

  new_transaction = {
    invoice_id: invoice_id,
    date: "10/31/2024",
    total_amount: 607.33,
    currency: "BGN",
    payment_method: "Debit Card",
    status: "Processing",
  };

  transaction.insertOne(new_transaction);

  print(transaction.find({ invoice_id: invoice_id }));
} else {
  print("No existe la factura");
}

// Buscar todas las transacciones realizadas en una fecha específica.

print("Buscar todas las transacciones realizadas en un a fecha especifica");

const fecha = "10/31/2024";

// print(transaction.find({ date: fecha }));

print(transaction.find({ date: fecha }).count());

// Contar la cantidad de transacciones realizadas con un método de pago específico, como "Credit Card" o "PayPal".

print("Contar la cantidad de transacciones realizadas con");

print(
  transaction.aggregate([
    { $match: { payment_method: "PayPal" } },
    { $count: "total" },
  ])
);

// Actualizar el estado de una transacción específica a "Completed".

transaction.updateOne({ id: "2001" }, { $set: { status: "Completed" } });
