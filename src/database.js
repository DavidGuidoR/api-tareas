import mongoose from "mongoose";
//importamos el archivo de configuracion para la conexion con la base de datos
import config from './config';

//configuramos la conexion con la base de datos mongoDB 
(async () => { 
    const db = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log('database is connected to:',db.connection.name)
})();
    