const { MongoClient, ObjectId } = require("mongodb");

const uri = "localhost:27017"; // Cambia esto por tu URL de conexión
const conn = new Mongo(uri);

const db = conn.getDB("paymentsDB");

const rest = db.getCollection("restaurants");

// Todos los documentos de la colección restaurants

print(rest.find({}, { restaurant_id: 1, _id: 0 }).pretty().limit(1));

print("// El primer documento de la colección");

print(rest.findOne({}, { _id: 0, name: 1 }));

// Los que sean de cocina griega (Greek)

print(rest.find({ cuisine: "Greek" }));

// Los que sean de cocina griega y tengan una nota (grade) de B

print(
  rest.find(
    { cuisine: "Greek", "grades.grade": "B" },
    { cuisine: 1, "grades.grade": 1, _id: 0 }
  )
);

// Los que estén en una determinada ciudad

var city = "Brooklyn";

print(rest.find({ borough: city }, { borough: 1 }));

// Los que tengan restaurante id 40370781, 40369158 y 40367677

print(
  rest.find(
    {
      restaurant_id: { $in: ["40370781", "40369158", "40367677"] },
    },
    { restaurant_id: 1, _id: 0 }
  )
);

// Los que hayan tenido una valoración (score) de al menos 30 puntos

print(rest.find({ "grades.score": { $gt: 30 } }, { "grades.score": 1 }));

// Los que sean de cocina Italian o Mexican

print(rest.find({ cuisine: { $in: ["Italian", "Mexican"] } }, { cuisine: 1 }));

// Los que sean de cocina Italina o Mexican y estén en Manhattan (borough)

print(
  rest.find(
    { cuisine: { $in: ["Italian", "Mexican"] }, borough: "Manhattan" },
    { cuisine: 1, borough: 1 }
  )
);

// Los peores (con algún score menor de 5) de los de comida italiana

print(
  rest.find(
    { "grades.score": { $lt: 5 }, cuisine: "Italian" },
    { "grades.score": 1 }
  )
);

// Ejercicios de Consulta

// Nombres de los restaurantes
print("Nombres de los restaurantes:");
print(rest.distinct("name")); // Aquí iría la consulta para obtener los nombres de los restaurantes
// print(rest.find({},{ name: 1 }));
// Tipos de cocina disponibles
print("Tipos de cocina:");
print(rest.distinct("cuisine")); // Aquí iría la consulta para obtener los tipos de cocina disponibles

// Nombre de restaurante, tipo de cocina y barrio
print("Nombre de restaurante, tipo de cocina y barrio:");
print(rest.find({}, { name: 1, cuisine: 1, borough: 1, _id: 0 })); // Aquí iría la consulta para obtener nombre, tipo de cocina y barrio

// Restaurantes que ofrecen comida italiana
print("Restaurantes que ofrecen comida italiana:");
print(rest.find({ cuisine: "Italian" }, { name: 1, _id: 0 })); // Aquí iría la consulta para obtener los restaurantes italianos

// Nombre, calle y barrio de los peores (con score menor de 5) de comida italiana

print("Peores restaurantes de comida italiana (score < 5):");
print(
  rest.find(
    { "grades.score": { $lt: 5 }, cuisine: "Italian" },
    { name: 1, _id: 0 }
  )
); // Aquí iría la consulta para obtener los peores restaurantes italianos con score menor a 5

