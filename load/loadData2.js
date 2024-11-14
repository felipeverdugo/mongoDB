const { MongoClient, ObjectId } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017"; // Cambia esto por tu URL de conexión
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("mi_tienda");

    // Colecciones
    const clientes = database.collection("clientes");
    const vendedores = database.collection("vendedores");
    const productos = database.collection("productos");
    const ventas = database.collection("ventas");

    // 1. Generar clientes con más detalles
    const clienteDocs = [
      {
        nombre: "Juan Pérez",
        email: "juan.perez@email.com",
        direccion: {
          calle: "Av. Libertador",
          numero: 1234,
          ciudad: "Buenos Aires",
        },
        telefono: "+54 11 1234-5678",
      },
      {
        nombre: "María López",
        email: "maria.lopez@email.com",
        direccion: { calle: "Calle Falsa", numero: 742, ciudad: "Córdoba" },
        telefono: "+54 351 234-5678",
      },
    ];
    const clienteResult = await clientes.insertMany(clienteDocs);
    const clienteIds = clienteResult.insertedIds;

    // 2. Generar vendedores con más detalles
    const vendedorDocs = [
      {
        nombre: "Comercio Tech",
        email: "ventas@comerciotech.com",
        direccion: { calle: "Tech Blvd", numero: 100, ciudad: "Rosario" },
        numero_empleados: 50,
      },
      {
        nombre: "Gadgets Inc.",
        email: "contacto@gadgetsinc.com",
        direccion: { calle: "Gadget St", numero: 200, ciudad: "La Plata" },
        numero_empleados: 30,
      },
    ];
    const vendedorResult = await vendedores.insertMany(vendedorDocs);
    const vendedorIds = vendedorResult.insertedIds;

    // 3. Generar productos con categorías y referencias a vendedores
    const productoDocs = [
      {
        nombre: "Laptop",
        precio: 900,
        categoria: "Electrónica",
        detalles: {
          marca: "Dell",
          modelo: "XPS 13",
          especificaciones: "16GB RAM, 512GB SSD",
        },
        vendedor_id: vendedorIds[0],
      },
      {
        nombre: "Mouse",
        precio: 50,
        categoria: "Accesorios",
        detalles: {
          marca: "Logitech",
          modelo: "MX Master 3",
          tipo: "Inalámbrico",
        },
        vendedor_id: vendedorIds[1],
      },
      {
        nombre: "Teclado Mecánico",
        precio: 150,
        categoria: "Accesorios",
        detalles: {
          marca: "Corsair",
          modelo: "K95",
          tipo: "RGB, Switches Cherry MX",
        },
        vendedor_id: vendedorIds[0],
      },
    ];
    const productoResult = await productos.insertMany(productoDocs);
    const productoIds = productoResult.insertedIds;

    // 4. Generar ventas con referencias a clientes y productos, y agregar estados detallados
    const ventaDocs = [
      {
        cliente_id: clienteIds[0],
        fecha: new Date(),
        total: 950,
        estado: "Completado",
        productos: [
          { producto_id: productoIds[0], cantidad: 1, precio_unitario: 900 },
          { producto_id: productoIds[1], cantidad: 1, precio_unitario: 50 },
        ],
        metodo_pago: "Tarjeta de Crédito",
        detalles_envio: {
          empresa: "DHL",
          numero_rastreo: "DHL123456789",
          fecha_entrega_estimada: new Date(),
        },
      },
      {
        cliente_id: clienteIds[1],
        fecha: new Date(),
        total: 50,
        estado: "Pendiente",
        productos: [
          { producto_id: productoIds[1], cantidad: 1, precio_unitario: 50 },
        ],
        metodo_pago: "Transferencia Bancaria",
        detalles_envio: {
          empresa: "Correo Argentino",
          numero_rastreo: "CA987654321",
          fecha_entrega_estimada: new Date(),
        },
      },
    ];
    await ventas.insertMany(ventaDocs);

    console.log("Documentos generados exitosamente con referencias!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
