//con routes definimos las rutas que nos daran el acceso a deteminados métodos 

import { Router } from "express";
//variable "libro" exportada en el controller
import { libro } from './controller.js';

//exportamos la constante router para que sea visible en el index
export const router = Router()

//los metodos "getAll" y "getOne" se definen en el controller
//router.tipodesolicitud('/personas'[esto sigue al ip:puerto], variable.metdefcontroller)

//get sirve para consultar recursos que estan ubicados en la URL especificada
//consulta los libros registrados en la BD
router.get('/libros', libro.getAll);

//consulta por el id ingresado si el libro esta disponible
router.get('/libro', libro.getOne);