import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(item) {
    console.log("handle clickis called " + todos);
    // todos.filter!((todo) => todo !== item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClickItem(item) {
    console.log(todos);
    console.log(item);
    setTodos(
      todos.map((todo) => {
        if (todo.name == item.name) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
    console.log(todos);
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          onClick={() => handleClickItem(item)}
          className={item.done ? styles.completed : ""}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleClick(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
