import { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContex';

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("Title is required");
            return;
        }
        if (!description.trim()) {
            alert("Description is required");
            return;
        }
        createTask({
            title,
            description
        });
        setTitle("");
        setDescription("");
    }

    return (
        <div className='max-w-md  mx-auto'>
            <form onSubmit={handleSubmit} className = "bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input 
                    placeholder="Task Name"
                    onChange = {(e) => setTitle(e.target.value)}
                    value={title}
                    className = "bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea 
                    placeholder="Task Description"
                    onChange = {(e) => setDescription(e.target.value)}
                    className = "bg-slate-300 p-3 w-full mb-2"
                    value ={description}
                />
                <button
                    className='bg-indigo-500 w-full p-3 text-white font-bold uppercase rounded-md hover:bg-indigo-400 '
                >Save</button>
            </form>
        </div>
    )
}

export default TaskForm
