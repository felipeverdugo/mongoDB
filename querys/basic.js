//Datos para la prueba

customersSinDireccion = [
  {
    id: 115,
    name: "Derron O'Fergus",
    email: "dofergus36@house.gov",
    phone: "410-549-0965",
  },
  {
    id: 116,
    name: "Alaine Kydde",
    email: "akydde37@google.cn",
    phone: "224-784-5922",
  },
  {
    id: 117,
    name: "Corrie Couvet",
    email: "ccouvet38@arizona.edu",
    phone: "304-229-0243",
  },
  {
    id: 118,
    name: "Lindsay Paulat",
    email: "lpaulat39@privacy.gov.au",
    phone: "781-490-5231",
  },
  {
    id: 119,
    name: "Rosabella Featherstonhalgh",
    email: "rfeatherstonhalgh3a@mapy.cz",
    phone: "787-448-2067",
  },
  {
    id: 120,
    name: "Elane Einchcombe",
    email: "eeinchcombe3b@list-manage.com",
    phone: "416-150-2939",
  },
  { id: 121, name: "Fidole Hefferon", email: "fhefferon3c@cornell.edu" },
  {
    id: 122,
    name: "Weidar Rubinowitch",
    email: "wrubinowitch3d@fastcompany.com",
    phone: "234-806-3445",
  },
  {
    id: 123,
    name: "Major Favel",
    email: "mfavel3e@zdnet.com",
    phone: "667-284-6341",
  },
  {
    id: 124,
    name: "Aron Goodoune",
    email: "agoodoune3f@networksolutions.com",
    phone: "540-540-2129",
  },
  {
    id: 125,
    name: "Francyne Blowne",
    email: "fblowne3g@homestead.com",
    phone: "671-958-9538",
  },
  {
    id: 126,
    name: "Veda Messingham",
    email: "vmessingham3h@businessinsider.com",
    phone: "892-823-2100",
  },
  { id: 127, name: "Waring Eunson", email: "weunson3i@wix.com" },
];

const conn = new Mongo("localhost:27017");

const db = conn.getDB("paymentsDB");

//Mostras las colecciones de la base de datos de paymentsDB

print(
  "Colecciones de la base de datos paymentsDB son :",
  db.getCollectionNames()
);

const customers = db.getCollection("customer");

// Ejercicios de Consultas Básicas
print("Ejercicios de Consultas Básicas");
print("-------------------------------");

// 1. Colección customers

print(
  "Agregar un nuevo cliente a la colección customers con campos como name, email, phone, y address"
);

if (
  customers
    .find({ name: "felipe", email: "felipe@example.com" }, { _id: 0 })
    .count() == 0
) {
  customers.insertOne({
    name: "felipe",
    email: "felipe@example.com",
    phone: "221543543",
    address: {
      street: "23",
      city: "La Plata",
      state: "bs as",
      zip: "1800",
    },
  });
}

print(
  customers.find({ name: "felipe", email: "felipe@example.com" }, { _id: 0 })
);

print("// Buscar clientes que tienen una dirección en una ciudad específica.");

var city = "La Plata";

print(customers.find({ "address.street": "23", "address.city": city }));

print(
  "// Contar la cantidad de clientes que tienen un número de teléfono registrado."
);

print(
  customers.find({ phone: { $exists: true } }).count() +
    " / " +
    customers.find().count()
);

print("// Actualizar el email de un cliente específico dado su customer_id.");

var id = ObjectId("67277b7d468e1b829586b01d");
var customer = customers.findOne({ _id: id });
//Retorna un objet y en el if se puede comprobar si es null o no

if (customer) {
  customers.updateOne(
    { _id: id },
    { $set: { email: "felipeverdugo016@gmail.com" } }
  );
  print("Se modifico el customer");
  print(customer);
} else {
  print("No se encuentro el usuario");
}

print("// Eliminar clientes que no tienen dirección registrada.");

print("Insertamos un par que cumplan esta condicion Ej:");

print({
  id: 115,
  name: "Derron O'Fergus",
  email: "dofergus36@house.gov",
  phone: "410-549-0965",
});

customers.insertMany(customersSinDireccion);

print(
  " Hay " +
    customers.find({ address: { $exists: false } }).count() +
    " sin la direcccion declarada"
);

customers.deleteMany({ address: { $exists: false } });
