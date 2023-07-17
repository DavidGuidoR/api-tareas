//importamos el modulo router para definir y manejar las rutas de la aplicación.
import {Router} from 'express';
import Task from '../models/Task';

const router = Router();


//generacion de la ruta task
router.get('/', (req,res) => {
    res.send('Tasks')
});

router.post('/', async (req,res) =>{
    //el req.body permite recibir los datos de la cadena JSON
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description
    });
    //el .save permite guardar la tarea dentro de la base de datos  
    await newTask.save();
    console.log(newTask);
    res.json('New task created');
})

//exportamos el modulo para poder utilizarlo en el index principal
export default router;