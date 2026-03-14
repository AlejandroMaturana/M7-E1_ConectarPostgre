const { Pool } = require("pg");
require("dotenv").config();

// configuracion del pool sacando las credenciales del .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function verificarConexion() {
  try {
    // intentando conectar a la BBDD
    const client = await pool.connect();
    console.log("Conexión exitosa a PostgreSQL");

    // liberamos el cliente para no dejar la conexion colgada
    client.release();
  } catch (err) {
    console.error("Hubo un error de conexión:", err);
  }
}

// ejecutar
verificarConexion();
