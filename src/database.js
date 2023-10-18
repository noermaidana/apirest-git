import mysqlConnection from 'mysql2/promise';

const properties = {
    host: 'localhost',
    user:'root',
    password: '',
    //Nombre de la base de datos en phpMyAdmin
    database: 'rest-api',
}
//Conexión con la base de datos
export const pool = mysqlConnection.createPool(properties);