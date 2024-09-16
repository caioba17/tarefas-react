import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'

export function useTasks() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("task")) || []
    );

    
    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(tasks))
    }, [tasks]);

    function submitTask(title, description) {
        const newTask = {
        id: uuidv4(),
        title: title,
        isCompleted: false,
        description: description,
        };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        const taskDel = tasks.filter((task) => (
            task.id !== id
        )) 
        
        setTasks(taskDel);
    }

    function alterarTask(id) {
        const alterTask = tasks.map((task) => {
        if (task.id === id) {
            return {...task, isCompleted: !task.isCompleted}
        }
        else {
            return task;
        }
        })

        setTasks(alterTask);
    };


    return { tasks, submitTask, deleteTask, alterarTask };
}

