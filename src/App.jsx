import './App.css'
import AddTask from './components/addTask/AddTask'
import Task from './components/task/Task'
import { useTasks } from './hooks/useTasks'

function App() {

  const { tasks, submitTask, deleteTask, alterarTask } = useTasks();

  const tasksFeitas = tasks.filter((task) => {
    if (task.isCompleted === false) {
      return task;
    }  
  });

  return (
    <div className='container'>
      <h1>Todo List <span>- {tasksFeitas.length} tarefa(s) para fazer</span></h1>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} alterarTask={alterarTask}/>
        ))}  
      </div>
      <AddTask submitTask={submitTask}></AddTask>
    </div>
  )
}

export default App
