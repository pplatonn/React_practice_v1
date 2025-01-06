import React from 'react';
import ReactDOM from 'react-dom/client';

const toDoListArr = [
    {
        "id": 1,
        "taskToDo": "laundry"
    },
    {
        "id": 2,
        "taskToDo": "cooking"
    },
    {
        "id": 3,
        "taskToDo": "feeding the cat"
    }
]

function TaskToDo(props) {
    return (
        <li>{props.taskToDo}</li>
    )
}

function ToDoList() {
    return (
        <>
            <h1>Your tasks for today:</h1>
            <ol>
                {
                    toDoListArr.map((task) => 
                        <TaskToDo key={task.id} taskToDo={task.taskToDo} />
                    )
                }
            </ol>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< ToDoList />);