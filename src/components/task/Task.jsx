import { ChevronRight, CircleCheck, CircleX, Trash2 } from 'lucide-react'
import './task.css'
import { useNavigate } from 'react-router-dom';

export default function Task(props) {
    const { title, isCompleted, id } = props.task;
    const navigation = useNavigate();
    
    return (
        <div className="task-container">
            <div className="task">
                {!isCompleted ? <CircleX onClick={() => props.alterarTask(id)}/> : <CircleCheck onClick={() => props.alterarTask(id)}/>}
                <h3 className="task-title">{title} <span>{isCompleted ? "(Feito)" : "(Não feito)"}</span></h3>
            </div>
            <div className='icons'>
                <ChevronRight size={30} className='arrow' onClick={() => {
                    navigation("/task", { state: {task: props.task}})
                }}/>
                <Trash2 className='trash' size={25} onClick={() => props.deleteTask(id)}/> 
            </div>
        </div>
    )
}