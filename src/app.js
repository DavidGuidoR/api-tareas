//importamos el modulo de express el cual devuelve un objeto
import express from 'express'
//importamos nuestro archivo de rutas
import TasksRoutes from './routes/task-routes';

//guardamos este objeto en la variable APP
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res) => {
    res.json('Welcome to my application');
    }
)

//uso de la rutas del archivo, agregar el primer  dato permite establecer la ruta mas compleja /api/tasks
app.use('/api',TasksRoutes)

export default app;