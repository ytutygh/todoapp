export type ITodoItem = {
  id: number;
  name: string;
  isCompleted: boolean;
  expiredDate: string;
};

export type ITodoItemAddAPI = {
  name: string;
  isCompleted: boolean;
  expiredDate: string;
};

export type ITodoState = {
  todoList: ITodoItem[];
  statusFilter: string;
};

export type ITodoAction = IGetTodosAction | IChangeTabAction;

export type IGetTodosAction = {
  type: string;
  payload: ITodoItem[];
};

export type IChangeTabAction = {
  type: string;
  payload: string;
};

export type ITodoProps = {
  todo: ITodoItem;
};

export type ITab = {
  tab: string;
};
