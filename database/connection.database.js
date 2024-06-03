import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

const connectionString = process.env.CONNECTION_STRING;

export const pool = new Pool({
  connectionString,
  allowExitOnIdle: true,
});

export const testConnection = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Conexión a postgres exitosa!...");
  } catch (error) {
    console.log(error);
  }
};

 testConnection();

// Probar en la terminal: node database/connection.database.js
