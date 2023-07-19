import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"; 

//definimos el nombre de los datos, su tipo y propiedades del esquema a crear
const taskSchema = new Schema({
    //dato titulo
    title: {
        //establecemos el tipo de dato
        type: String,
        //definimos la obligatoriedad
        required: true,
        //funcion trim que remueve espacios
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        //establecemos que si no pasan el dato por defecto sera false.
        default:false
    }
},  {
        //mongoose por defecto agrega un __v al dato, estableciendo la versionkey por defecto en false evitamos esto
        versionKey: false,
        //timestamps no ayuda agregando las propiedades createdAt de la fecha de creación y updatedAt del momento de actualización 
        timestamps: true
    });

taskSchema.plugin(mongoosePaginate);
export default model('Task', taskSchema)
