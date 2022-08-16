import { ITodoItem } from "../interface/type";
import * as actionTypes from "./constants";

export const getTodosSuccess = (todos: ITodoItem[]) => ({
  type: actionTypes.GET_TODOS,
  payload: todos,
});

export const changeTab = (activeTab: string) => ({
  type: actionTypes.CHANGE_TAB,
  payload: activeTab,
});
