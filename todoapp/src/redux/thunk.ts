import { axiosInstance } from "../api/axios";
import { ITodoItem, ITodoItemAddAPI } from "../interface/type";
import { getTodosSuccess } from "./actions";
import { toast } from "react-toastify";

export const getTodos = () => {
  return async (dispatch: Function) => {
    try {
      const res = await axiosInstance.get("/todo");
      dispatch(getTodosSuccess(res.data));
    } catch (error) {
      toast.error("Failed");
    }
  };
};

export const addTodo = (todoItem: ITodoItemAddAPI) => {
  return async (dispatch: Function) => {
    try {
      await axiosInstance.post("/todo", todoItem);
      toast.success("Add todo successfully");
      dispatch(getTodos());
    } catch (error) {
      toast.error("Add todo failed");
    }
  };
};

export const deleteTodo = (id: number) => {
  return async (dispatch: Function) => {
    try {
      await axiosInstance.delete(`/todo/${id}`);
      toast.success("Delete successfully");
      dispatch(getTodos());
    } catch (error) {
      toast.error("Delete failed");
    }
  };
};

export const toggleTodoStatus = (todo: ITodoItem) => {
  return async (dispatch: Function) => {
    try {
      await axiosInstance.put(`/todo/${todo.id}`, {
        ...todo,
        isCompleted: !todo.isCompleted,
      });
      dispatch(getTodos());
    } catch (error) {
      toast.error("Change status failed");
    }
  };
};

export const updateTodo = (todo: ITodoItem) => {
  return async (dispatch: Function) => {
    try {
      await axiosInstance.put(`/todo/${todo.id}`, todo);
      dispatch(getTodos());
      toast.success("Update task successfully");
    } catch (error) {
      toast.error("update task failed");
    }
  };
};
