import { useState } from "react";
import Todoitems from "./Todoitems";
import Footer from "./Footer";

const Todo = () => {
  const [todo, setTodo] = useState({name:"", done:false})
  const [todos, setTodos] = useState([]);
  function handleSelect(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"", done:false});
  }
  const complatedTodos = todos.filter((todo) => todo.done).length
  const totalTasks = todos.filter((todo) => todo).length

  const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))
  return (
    <>
    <div className="header"> 
    <h1 className="text">Todo List</h1></div>
   <div  className=" card form">

    <form  onSubmit={handleSelect}>
      
      <input
        onChange={(e) => setTodo({name:e.target.value , done:false})}
        type="text"
        value={todo.name}
        placeholder=" Type here"
        />
      <button type="submit">submit</button>
      {sortedTodos.map((item, index) => (
        <Todoitems key={index} item={item} todo={todo} setTodos={setTodos}  todos={todos} />
        
      ))}
    </form>
    
      </div>
      <div>
        <Footer complatedTodos={complatedTodos} totalTasks={totalTasks} />
      </div>
    </>
  );
};
export default Todo;
