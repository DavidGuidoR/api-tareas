import {config} from 'dotenv'
config();

export default{
    //Definimos la importación del nombre de la conexión
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tasksdb',
};