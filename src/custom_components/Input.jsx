import React, { useState } from "react";

function Input_field({addNewItem}){
    const [text, setText] = useState();
    const [date, setDate] = useState();
   let handelTextChange = (event) => {
        setText(event.target.value);
    }
   let handelDateChange = (event) =>{
    setDate(event.target.value);
       }

       let addTask = () => {
        console.log(`add task function called !! ${text}`);
        addNewItem(text,date);
        setText("");
        setDate("");
        }


   return (<>
         <div className="row">
         <input
          className="col-7"
          value={text}
          onChange={handelTextChange}
          placeholder="hello"/>
          <input
          className="col-2"
          value={date}
          onChange={handelDateChange}
          type="date"
          />
          <button 
          type="button"
          onClick={() => addTask(text,date)}
          className="col-1">add</button>
          </div>
    </>)
}
export default Input_field;