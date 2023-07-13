import {config} from 'dotenv'
config();

export default{
    //Definimos la importacion del nombre de la conexion
    mongodbURL: process.env.MONGODB_URI,
};