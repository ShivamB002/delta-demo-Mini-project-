import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
let [todos , setTodos] = useState([{task:"sample Task", id: uuidv4() , isDone:false }]);
    let [newTodo , setNewTodo] = useState("");

    let addNewTask = () =>{
        //console.log("we have to add new task in todo");
        // setTodos([...todos , {task:newTodo , id:uuidv4()}]);
        setTodos((prevTodos)=>{
            return [...prevTodos , {task:newTodo , id:uuidv4() , isDone:false}]
        });
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value);

    }

    let deleteTodo =(id)=>{
        //console.log(id,"task to be deletd");
        
        // let copy=todos.filter((todo)=>todo.id!=id);
        // console.log(copy);

        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));
    }

    let markAllDone = () =>{
        // let newArr=todos.map((todo)=>{
            //console.log(todo);
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{    
            return{
                ...todo,
                //task: todo.task.toUpperCase(),
                isDone:true
            };
        })
    
    );
        // console.log(newArr)
    }


    let markAsDone =(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{ 
                if(todo.id  === id){
                    return{
                        ...todo,
                        //task: todo.task.toUpperCase(),
                        isDone: true
                    };
                }else{
                    return todo;
                }   
            
            })
    
        );
    }


    return(
        <div>
            {/* <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input><br />  */}
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input><br />
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr/>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo)=>(

                    <li key={todo.id}>  
                        <span style={todo.isDone ? { textDecorationLine : "line-through"} : {}} >{todo.task}</span>&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}