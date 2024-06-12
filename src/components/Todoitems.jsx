const Todoitems = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const classTOdo = item.done ? "completed" : "";
  return (
    <div className="card list">
      <div className="card-body list1">
        {" "}
        <span className={classTOdo}id="item3" onClick={() => handleClick(item.name)}>
          {item.name}{" "}
        </span>
        <span onClick={() => handleDelete(item)} className="span">
          x
        </span>
      </div>
      <hr />
    </div>
  );
};
export default Todoitems;
