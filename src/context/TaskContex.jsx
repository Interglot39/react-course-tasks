import {createContext, useState, useEffect} from 'react'
import { tasks as data, tasks} from "../data/tasks"

export const TaskContext = createContext();

export function TaskContexProvider(props) {
    const [tasks, setTasks] = useState([]);

    const createTask = (task) => {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }]);
    }
    
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    
    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider value = {{
            tasks,
            deleteTask,
            createTask
        }}>{props.children}</TaskContext.Provider>
    )
}
