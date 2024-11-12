// Calcular el monto total de todas las facturas de un cliente específico

const conn = new Mongo("localhost:27017");

const db = conn.getDB("paymentsDB");

const invoice = db.getCollection("invoice");

// print(invoice.findOne());

// Agregar una nueva factura para un cliente existente, incluyendo campos como customer_id, date, total_amount, currency, y status.

var id_cliente = 45;

if (invoice.find({ customer_id: id_cliente }).count() != 0) {
  print("Existe el cliente, se procede a agregarle la factura");

  new_invoice = {
    customer_id: id_cliente,
    date: "10/31/2024",
    total_amount: 79.22,
    currency: "RUB",
    status: "Processing",
  };

  invoice.insertOne(new_invoice);
  //   print(invoice.find(new_invoice))
} else {
  print("No existe el cliente existe el cliente");
}

// Buscar todas las facturas de un cliente específico por su customer_id.
print(invoice.find({ customer_id: id_cliente }));

// Contar la cantidad de facturas en estado "Unpaid".
print(
  "La cantidad de facturas en estado Pending son : ",
  invoice.find({ status: "Unpaid" }).count()
);

// Actualizar el estado de una factura específica a "Paid" dado su invoice_id.

var id_invoice = 2;

var an_invoice = invoice.findOne({ id: id_invoice });

if (an_invoice) {
  print(
    "Existe la factura",
    id_invoice,
    " y se procede a cambiar su estado a Paid"
  );

  print(an_invoice);

  invoice.updateOne({ _id: an_invoice._id }, { $set: { status: "Paid" } });

  print(invoice.findOne({ id: id_invoice }));
} else {
  print("No existe la facuta a actualizar");
}

// Calcular el monto total de todas las facturas de un cliente específico
id_cliente = 45;

print(
  "El monto total del cliente es :",
  invoice.aggregate([
    { $group: { _id: an_invoice._id, total: { $sum: "$total_amount" } } },
  ])
);
