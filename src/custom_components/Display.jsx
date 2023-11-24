import TodoItem from "./TodoItem.jsx";
function Task({todoItem}){
    console.log(todoItem);
    return (<>
     {todoItem.map((item) => (
        <TodoItem
          todoName={item.task}
          todoDate={item.time}
          
        ></TodoItem>
      ))}
    </>)
}
export default Task;