import Task from '../models/Task';

export const findAllTasks = async (req,res) => {
    //el async y await se deben usar cuando la tarea o consulta toma tiempo y se desea que se espere a la terminacion de la misma para enviar la respuesta
    const tasks = await Task.find();
    res.json(tasks);
};

export const createTask = async (req,res) =>{
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
};

export const findAllDoneTasks = async (req,res) => {
   //mediante las llaves podemos especificar parámetros en la búsqueda
    const tasks = await Task.find({done: true});
    res.json(tasks);
};

export const findOneTask = async (req, res) => { 
    const task = await Task.findById(req.params.id);
    res.json(task);
};

export const deleteTask = async (req,res) => {
    const data = await Task.findByIdAndDelete(req.params.id);
    res.json({
        messsage:`${data.title} ha sido eliminada con éxito`
        });
}

export const updateTask = async(req,res) => {
    //el primer parámetro del update es para encontrar que actualizar y la segunda es el contenido a actualizar
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: `la tarea fue actualizada exitosamente`
    })
}