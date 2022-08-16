import { isExpired } from "./../customMoment/formatTime";
import { ITodoState } from "../interface/type";
import { todoStatus } from "./constants";

export const todoListSelector = (state: ITodoState) => {
  const list = state.todoList;
  switch (state.statusFilter) {
    case todoStatus.ALL:
      return list;
    case todoStatus.ACTIVE:
      return list.filter(
        (todo) =>
          !todo.isCompleted && !isExpired(todo.expiredDate, todo.isCompleted)
      );
    case todoStatus.COMPLETED:
      return list.filter((todo) => todo.isCompleted);
    case todoStatus.EXPIRED:
      return list.filter((todo) =>
        isExpired(todo.expiredDate, todo.isCompleted)
      );
    default:
      return list;
  }
};
