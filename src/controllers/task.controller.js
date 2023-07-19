import Task from '../models/Task';
import { getPagination } from '../libs/getPagination';

export const findAllTasks = async (req,res) => {
    try {

    //variables de la paginación
    const {size, page, title} = req.query

    //esta condición permite buscar por titulo
    const condition  = title ?
        {
            title: {$regex: new RegExp(title), $options: 'i'},
        } : {};

    const {limit, offset} = getPagination(page, size)
    //el async y await se deben usar cuando la tarea o consulta toma tiempo y se desea que se espere a la terminacion de la misma para enviar la respuesta
    const data = await Task.paginate(condition, {offset, limit});
    res.json({
        totalItems: data.totalDocs,
        tasks: data.docs,
        totalPage: data.totalPages,
        currentPage: data.page - 1
    });
    }catch(error){
        res.status(500).json({
            message: error.messsage || "Algo ha salido mal en la consulta de tareas"
        });
    }
};

export const createTask = async (req,res) =>{
    try{
    //el req.body permite recibir los datos de la cadena JSON
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        //mediante el ? decimos que si existe genere la siguiente instruccion y con el : en caso de que no exista la siguiente instrucción
        done: req.body ? req.body.done : false
    });
    //el .save permite guardar la tarea dentro de la base de datos  
    const TaskSaved = await newTask.save();
    console.log(newTask);
    res.json(TaskSaved);
    }catch(error){
        res.status(500).json({
            message: error.messsage || "Algo ha salido mal en la consulta de tareas"
        });
    }
};

export const findAllDoneTasks = async (req,res) => {
    try{
   //mediante las llaves podemos especificar parámetros en la búsqueda
    const tasks = await Task.find({done: true});
    res.json(tasks);
    }catch(error){
        res.status(500).json({
            message: error.messsage || "Algo ha salido mal en la consulta de tareas"
        });
    }
};

export const findOneTask = async (req, res) => {
    try{
    const id = req.params.id;
    const task = await Task.findById(id);
    
    if(!task) return res
        .status(404)
        .json({message: `La tarea con id: ${id} no  existe`});
    
    res.json(task);

    }catch(error){
        res.status(500).json({
            message: error.messsage || `Algo ha salido mal en la consulta de la tarea ${id}`
        });
    }
};

export const deleteTask = async (req,res) => {

    try{
    const id = req.params.id;
    const data = await Task.findByIdAndDelete(id);
    res.json({
        messsage:`${data.title} ha sido eliminada con éxito`
        });
    }catch(error){
        res.status(500).json({
            message: error.messsage || `La tarea con id: ${id} no ah podido ser borrada.`
        });
    }
}

export const updateTask = async(req,res) => {
    try{
    //el primer parámetro del update es para encontrar que actualizar y la segunda es el contenido a actualizar
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: `la tarea fue actualizada exitosamente`
    });
    }catch(error){
        res.status(500).json({
            message: error.messsage || "Algo ha salido mal en la consulta de tareas"
        });
    }
}