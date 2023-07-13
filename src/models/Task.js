import { Schema, Model } from "mongoose";

const taskSchema = new Schema({
    title: String,
    description: String,
    done: Boolean,
});

export default model('Task', taskSchema)