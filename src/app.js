//importamos el modulo de express el cual devuelve un objeto
import express from 'express'
//morgan permite ver la petición de las rutas por consola debe ir antes de las rutas
import morgan from 'morgan';
//CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web para controlar las solicitudes de recursos (como archivos JavaScript, imágenes o datos) que se hacen entre diferentes dominios.
import cors from 'cors';
//importamos nuestro archivo de rutas
import TasksRoutes from './routes/task-routes';

//guardamos este objeto en la variable APP
const app = express();

//establecemos el puerto de escucha
app.set('port', process.env.PORT || 3000);

//middleware
app.use(cors());
app.use(morgan('dev'));
//permite la lectura y ejecución de métodos JSON                  
app.use(express.json());
//La función express.urlencoded() es un middleware de Express que analiza los datos en formato URL-encoded y los convierte en un objeto JavaScript que se puede utilizar en el manejo de las solicitudes
app.use(express.urlencoded({extended:false}));

//rutas
app.get('/', (req,res) => {
    res.json('Welcome to my application');
    });

//uso de la rutas del archivo, agregar el primer  dato permite establecer la ruta mas compleja /api/tasks
app.use('/api/task',TasksRoutes);

export default app;