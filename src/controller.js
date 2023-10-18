//en controller van todas las funcionalidades de nuesra aplicación
//en este caso el programa realiza consultas en la base de datos

//importamos la variable pool creada en la database

//ocupamos un pool nos permite generar un pool de conexiones, basicamente habilita que 
//existan conexiones paralelas en nuestra infraestructura o sino de manera concurrente 
//entre las solicitudes
import {pool} from './database.js';

//parámetro "req" (request) es lo que solcita el cliente
//parámetro "res" (response) es lo que responde el servidor a la solicitud
class LibrosController{

//con "async" y "await" hacemos que nuestras consultas sean asíncronas lo que significa que 
//el servidor no se debe de estancar tras recibir varias solicitudes (arma una cola de estas)

    //Método getAll que va traer todo lo que se encuentre en la base de datos
    async getAll(req, res) {
        //la contante "result" consiste en una "query" (una consulta)
        
        //'SELECT * FROM nombretabla' va a ejecutar la consulta en la BD
        
        //Con los [] limitamos a que solo nos muestre la primer lista dentro del JSON y asi
        //evitamos que se traiga información del buffer 
        const [result] = await pool.query('SELECT * FROM libros');
        
        //aca se devuelven los resultados de esa consulta
        res.json(result);
    }
   
    //Método getOne va a dar un libro (en la BD) de acuerdo al id
    async getOne(req, res) {

        const libro = req.body;
        const id = req.body.id;
        const [result] = await pool.query('SELECT * FROM libros WHERE id=?', [id]);

        if (result[0] != undefined){
            //muestra los datos del id de la BD
            res.json(result);
        }else{
            //Mensaje de error
            res.json({"Error":`No hay libro registrado con el id ${id}`});
        }

    }

}

//exportamos una constante "libro" para que pueda ser visible fuera del controller
//en routes por ejemplo
export const libro = new LibrosController();