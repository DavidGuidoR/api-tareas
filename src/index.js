//importamos la configuración  del servidor en app
import app from './app';
//importamos la configuración y conexión de la base de datos de manera automática
import './database';

//arranque de la aplicación en el puerto indicado en app
app.listen(app.get('port'))
console.log('Server on port', app.get('port'));