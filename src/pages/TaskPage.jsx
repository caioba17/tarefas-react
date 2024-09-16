import { useLocation } from "react-router-dom"
import './TaskPage.css'
import { Undo2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function TaskPage() {
    const navigation = useNavigate();  
    const location = useLocation();
    const { task } = location.state;
    
    return (
        <div className="container-detalhes">
            <div className="container-volta">
                <Undo2 size={30} className="botao-voltar" onClick={() => {navigation("/")}}/>
                <h1>Detalhes da tarefa</h1>
            </div>
            <div className="container-task">
                <p><b>Nome</b> - {task.title}</p>
                <hr />
                <p><b>Descrição</b> - {task.description}</p>
            </div>
        </div>
        
    )
}