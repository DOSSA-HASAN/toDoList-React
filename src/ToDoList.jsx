import React,{useState} from "react"

function ToDoList(){

    const [tasks, setTask] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask(event){
        
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask])
            setNewTask("")
        }
        
    }

    function handleDeleteTask(index){
        const updateTask = tasks.filter((_, i) => i !== index);
        setTask(updateTask)

    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index - 1]] = [updateTask[index -1], updateTask[index]];
            setTask(updateTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]]
            setTask(updateTask)
        }
    }


    return(
        <>
            <div className="to-do-list">
                <h1>To Do List</h1>

                <div>
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={(event) => handleInputChange(event)}/>
                    <button className="add-button" onClick={(index) => handleAddTask(index)}>Add task</button>
                </div>

                <ol>
                    {tasks && tasks.map((task, index) => <li key={index}><span className="text">{task}</span>
                    <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button className="move-up-button" onClick={() => moveTaskUp(index)}>👆</button>
                    <button className="move-down-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
                </ol>
            </div>
        </>
    )

}

export default ToDoList