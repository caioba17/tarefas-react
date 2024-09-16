import { useState } from 'react';
import './addTask.css'

export default function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <h3>Adicione uma nova tarefa...</h3>
            <div className="input-container">
                <input type="text" placeholder='Tarefa...' value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="text" placeholder='Descrição...' value={description} onChange={event => setDescription(event.target.value)}/>
            </div>

            <button onClick={() => {
                    if (!title.trim()) 
                    {
                        return alert("Informe a tarefa!");
                    }
                    props.submitTask(title, description)}}>Enviar</button>
        </div>

    )
}