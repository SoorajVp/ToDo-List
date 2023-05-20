import { useState, useEffect } from "react";
import ToDoList from "./List";


const TextBox = () => {

    let [toDo, setToDo] = useState("");

    let [toDos, setToDos] = useState(() => {
        const initialvalue=JSON.parse(localStorage.getItem("toDos"))
        return (initialvalue || [])
    });

    useEffect(() => {
        localStorage.setItem("toDos", JSON.stringify(toDos));
    },[toDos])


    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1; 
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let date = `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;

    const addTodo = () => {
        if(toDo.length > 0) {
            setToDos([...toDos, {key: Date.now(), value: toDo, status: false, date: date}])
            setToDo("")
        }
    }

    const EmptyTodo = () => {
        return <h4 style={{textAlign: "center", color: "#ad1717"}}> List is Empty !</h4>
    }

    
    

    return (
        <div>
            <div style={{ display: "flex", marginBottom: "25px" }}>
                <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" className="text-box" placeholder="Add something ..." />
                <button className="add-button" onClick={addTodo}>+</button>
            </div>

            <div>
            
            {  
                toDos.length > 0 ? 
                <div>
                    <ToDoList toDos={toDos} setToDos={setToDos}/>
                </div>  :
                <EmptyTodo />
            }

            </div>
        </div>
    )
}

export default TextBox;