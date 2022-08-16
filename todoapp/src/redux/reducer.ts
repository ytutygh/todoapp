import * as actionTypes from "./constants";
import { ITodoAction, ITodoItem, ITodoState } from "../interface/type";
import { todoStatus } from "./constants";

const initState: ITodoState = {
  todoList: [],
  statusFilter: todoStatus.ALL,
};

const reducer = (
  state: ITodoState = initState,
  action: ITodoAction
): ITodoState => {
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return {
        ...state,
        todoList: action.payload as ITodoItem[],
      };
    case actionTypes.CHANGE_TAB:
      return {
        ...state,
        statusFilter: action.payload as string,
      };

    default:
      return state;
  }
};

export default reducer;
