import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.getConnection
().then((connection) => {
    console.log('Connected to the database!');
    connection.release();
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});

export default db;