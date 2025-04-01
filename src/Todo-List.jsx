import { useState } from "react";

function ToDoList () {
    const [tasks, setTask] = useState(["Hotdog","Celery","Pancakes"]);
    const [newTask, setNewTask] = useState("");
    const [text, setText]= useState("");
    function handInputChange(event) {
        setNewTask(event.target.value)
    }
    function handInputText(event) {
        setText(event.target.value)
    }

    function clearAll() {
        setText("");
    }
    function addTask() {
        if (newTask.trim()==="")
            return;
        setTask(t => [...t,newTask])
        setNewTask("")
    }

    function removeTask(index) {
        const updatedTask = tasks.filter((_,i) => i !== index);
        setTask(updatedTask) 
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTask(updatedTask)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            setTask(updatedTask)
        }
    }
    
    return(
        <>
            <main>
                <header className="main-header">
                    <h1>My To-Do List</h1>
                </header>

                <div className="container">
                    <section className="add-task">
                        <h2>Add new task:</h2>
                        <div>
                            <textarea name="" id="" value={newTask} onChange={handInputChange}></textarea>
                        </div>
                        <div className="buttons">
                            <button className="add-btn" onClick={addTask}>Add</button>
                            <button className="clr-btn" onClick={clearAll}>Clear All</button>
                        </div>
                   
                    </section>

                    <section className="view-task">
                        <header className="second-header">
                            <h2>My task list</h2>
                        </header>

                        <div>
                            <ol className="tasks">
                                {tasks.map((task,index) =>
                                    <li key={index}>
                                        <div className="text">{task}</div>
                                        
                                        <button className="up-btn" onClick={() => moveTaskUp(index)}>
                                            Up
                                        </button>
                                        <button className="dwn-btn" onClick={() => moveTaskDown(index)}>
                                            Down
                                        </button>
                                        <button className="del-btn" onClick={() => removeTask(index)}>
                                            Delete
                                        </button>
                                    </li>
                                )}
                            </ol>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
export default ToDoList;