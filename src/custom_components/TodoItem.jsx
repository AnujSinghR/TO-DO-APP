function TodoItem({ todoName, todoDate }) {
    return (
        <div className="row">
        <p className="col-8">{todoName}</p>
        <p className="col-2">{todoDate}</p>
        </div>
    );
  }
  
  export default TodoItem;