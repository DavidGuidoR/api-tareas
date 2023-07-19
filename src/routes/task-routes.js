//importamos el modulo router para definir y manejar las rutas de la aplicación.
import {Router} from 'express';
import * as taskController from "../controllers/task.controller";

const router = Router();


//generacion de la ruta task
router.get('/', taskController.findAllTasks);

router.post('/', taskController.createTask);

router.get ('/done', taskController.findAllDoneTasks);

router.get('/:id', taskController.findOneTask);

router.delete('/:id', taskController.deleteTask);

router.put('/:id', taskController.updateTask)

//exportamos el modulo para poder utilizarlo en el index principal
export default router;