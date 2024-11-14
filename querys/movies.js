const { MongoClient, ObjectId } = require("mongodb");

const uri = "localhost:27017"; // Cambia esto por tu URL de conexión
const conn = new Mongo(uri);

const db = conn.getDB("paymentsDB");

const movies = db.getCollection("movies");

print(movies.findOne());

const a_movie = {
  _id: { oid: "573a1390f29313caabcd4135" },
  plot: "Three men hammer on an anvil and pass a bottle of beer around.",
  genres: ["Short"],
  runtime: { $numberInt: "1" },
  cast: ["Charles Kayser", "John Ott"],
  num_mflix_comments: { $numberInt: "1" },
  title: "Blacksmith Scene",
  fullplot:
    "A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.",
  countries: ["USA"],
  released: { $date: { $numberLong: "-2418768000000" } },
  directors: ["William K.L. Dickson"],
  rated: "UNRATED",
  awards: {
    wins: { $numberInt: "1" },
    nominations: { $numberInt: "0" },
    text: "1 win.",
  },
  lastupdated: "2015-08-26 00:03:50.133000000",
  year: { $numberInt: "1893" },
  imdb: {
    rating: { $numberDouble: "6.2" },
    votes: { $numberInt: "1189" },
    id: { $numberInt: "5" },
  },
  type: "movie",
  tomatoes: {
    viewer: {
      rating: { $numberInt: "3" },
      numReviews: { $numberInt: "184" },
      meter: { $numberInt: "32" },
    },
    lastUpdated: { $date: { $numberLong: "1435516449000" } },
  },
};

// Ejercicios de Actualización con la colección movies
// Ejercicios de Consulta

// Ejercicios de Actualización
print(
  "Actualiza el campo year de la película de título 'Civilization' a '1985'"
);
print();

print(
  "Incrementar en 1 el número de comentarios (num_mflix_comments) de todas las películas del tipo 'movie'"
);
print();

print("Añadir un nuevo campo 'pub_es' y con el valor 'verdadero'");
print();

print(
  "Renombra el nombre del campo num_mflix_comments a comentarios (en todas las películas)"
);
print();

print(
  "Actualiza el campo comentarios multiplicándolo por un factor de 4 en la película 'Civilization'"
);
print();

print("Actualiza el campo comentarios de todas las películas, sumándole 10");
print();

print(
  "Actualiza el campo year de la película 'Civilization', estableciéndolo en el momento actual (timestamp)"
);
print();

print(
  "Actualiza el campo cast de la película 'Civilization' añadiéndole el actor 'Perico de los Palotes'"
);
print();

print(
  "Actualiza el campo year de las películas con duración mayor a 100 para que sea 100"
);
print();

print(
  "Actualiza todas las películas cuya duración sea de 100, para que no tengan el género 'Action'."
);
print();

// Ejercicios de Borrado
print("Borra una específica, usando su _id");
print();

print("Borra las que sean del año 1985");
print();

print("Borra las que sean del género 'Action'");
print();

print("Borra las que tengan una puntuación (rating) en imdb menor a 3.4");
print();

print("Borra las que se hayan lanzado antes del 15 de Julio del 2001");
print();

print("Borra la que se titula 'Meshes of the Afternoon'");
print();

print("Borra sólo una que tenga el campo pub_es en verdadero (true)");
print();

print("Borra las que haya dirigido Steven Spielberg");
print();

print(
  "Borra las películas de entre los años 1950 y 1970 y que tengan menos de 80 votos en imdb"
);
print();

print("Borrar todos los documentos de la colección");
print();

// Ejercicios de Agregación
print("Obtener la cantidad total de películas en la colección");
print();

print("Obtener 3 películas de la colección");
print();

print("Obtener los títulos de 5 películas de la colección");
print();

print("Calcular el promedio de duración de todas las películas");
print();

print("Contar cuántas películas hay por tipo (type)");
print();

print("Dime el título de las 5 películas con mayor duración");
print();

print("Calcular la puntuación promedio de imdb, por tipo de película");
print();

print("Dime el número de comentarios de películas, según el año (year)");
print();

print(
  "Encontrar las películas del año 1980, y mostrar el título y número de votos en imdb, ordenadas por el número de votos, de mayor a menor número"
);
print();

print("Cuántas películas a partir del año 2001 son del tipo 'series'");
print();
