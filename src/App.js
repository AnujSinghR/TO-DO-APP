import React, { useState } from "react";
import Header from "./custom_components/Header.jsx";
import Input_field from "./custom_components/Input.jsx";
import Task from "./custom_components/Display.jsx";
import "./style.css";
import  'bootstrap/dist/css/bootstrap.min.css';
function App() {
    
    const [toDo, setTask] = useState([]);
    let addData = (text,date) =>{
        const newtoDo = [
            ...toDo,
            {task:text , time:date},
        ];
        setTask(newtoDo);
    }

   return (<>
   <Header heading="To Do"/>
   <Input_field addNewItem={addData} placeHolder="Enter Task Here!!"  btnName="Add"/>
   <Task todoItem={toDo}/>
   </>)
}

export default App;