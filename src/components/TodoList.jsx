import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  todos.sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          todos={todos}
          setTodos={setTodos}
          item={item}
        />
      ))}
    </div>
  );
}
