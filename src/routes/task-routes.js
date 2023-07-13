//importamos el modulo router para definir y manejar las rutas de la aplicación.
import {Router} from 'express';
const router = Router();

//generacion de la ruta task
router.get('/task', (req,res) => {
    res.send('Tasks')
});

//exportamos el modulo para poder utilizarlo en el index principal
export default router;