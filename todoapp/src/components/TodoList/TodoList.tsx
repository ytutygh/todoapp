import { ITodoItem } from "../../interface/type";
import { useAppSelector } from "../../redux/hook";
import { todoListSelector } from "../../redux/selector";
import Todo from "../Todo/Todo";
import TodoListCSS from "../TodoList/TodoList.module.scss";

export default function TodoList() {
  const todoList = useAppSelector(todoListSelector);
  return (
    <div className={`${TodoListCSS.todoList} d-flex flex-row`}>
      <ul>
        {todoList.reverse().map((todo: ITodoItem) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
