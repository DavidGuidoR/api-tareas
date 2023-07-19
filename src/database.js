import mongoose from "mongoose";
//importamos el archivo de configuración para la conexión con la base de datos
import config from './config';

//configuramos la conexion con la base de datos mongoDB 
(async () => { 
    try{
    const db = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log('database is connected to:',db.connection.name)
    }catch (error) {
        console.error(error);
    }
})();
    