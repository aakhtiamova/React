import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.TodoListContainer}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {/*or we can use (!todo.lenght) */}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
