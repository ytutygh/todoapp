import { useEffect, useState } from "react";
import { ITodoProps } from "../../interface/type";
import { useAppDispatch } from "../../redux/hook";
import { deleteTodo, toggleTodoStatus, updateTodo } from "../../redux/thunk";
import {
  formatTimeLeft,
  isDeadline,
  isExpired,
  showTime,
  showTimeLeft,
} from "../../customMoment/formatTime";
import { ReactComponent as Delete } from "../../assets/images/delete.svg";
import { ReactComponent as Edit } from "../../assets/images/edit.svg";
import { ReactComponent as EditSubmit } from "../../assets/images/editsubmit.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import TodoCSS from "./Todo.module.scss";
import { toast } from "react-toastify";
import moment from "moment";
import classNames from "classnames";
import { ReactComponent as Calender } from "../../assets/images/calender.svg";

import { Size, Variant } from "../../redux/constants";
import TextInput from "../Shared/TextInput/TextInput";
import DatePicker from "../Shared/DatePicker/DatePicker";

export default function Todo({ todo }: ITodoProps) {
  const dispatch: Function = useAppDispatch();
  const [todoState, setTodoState] = useState({
    checked: todo.isCompleted,
    editable: false,
    todoName: todo.name,
    todoTime: todo.expiredDate,
    todoExpired: isExpired(todo.expiredDate, todo.isCompleted),
    todoDeadLine: isDeadline(todo.expiredDate, todo.isCompleted),
  });

  useEffect(() => {
    if (!todoState.todoExpired && !todoState.checked && !todoState.editable) {
      const itv = setInterval(() => {
        setTodoState({
          ...todoState,
          todoDeadLine: isDeadline(todoState.todoTime, todoState.checked),
          todoExpired: isExpired(todoState.todoTime, todoState.checked),
        });
      }, 1000);
      return () => clearInterval(itv);
    }
  }, [todoState]);

  const handleToggleCheckbox = () => {
    setTodoState({
      ...todoState,
      checked: !todoState.checked,
      todoDeadLine: isDeadline(todoState.todoTime, todoState.checked),
    });
    dispatch(toggleTodoStatus(todo));
  };

  const handleDeleteBtn = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEditBtn = () => {
    setTodoState({
      ...todoState,
      editable: true,
    });
  };

  const handleEditSubmit = () => {
    if (!todoState.todoName) {
      toast.warning("Please enter task name");
    } else if (!todoState.todoTime) {
      toast.warning("Please select due date");
    } else {
      setTodoState({ ...todoState, editable: false });
      dispatch(
        updateTodo({
          ...todo,
          name: todoState.todoName,
          expiredDate: todoState.todoTime,
        })
      );
    }
  };

  const handleCloseBtn = () => {
    setTodoState({
      ...todoState,
      editable: false,
    });
  };

  const handleTodoNameChange = (name: string) => {
    setTodoState({ ...todoState, todoName: name });
  };

  const handleTodoTimeChange = (time: string) => {
    setTodoState({ ...todoState, todoTime: time });
    if (moment(time).isBefore(moment())) {
      toast.warning("Please select a future due date");
      setTodoState({ ...todoState, todoTime: todo.expiredDate });
    }
  };

  const todoNameClass = classNames(`${TodoCSS.nameTodo}`, {
    [TodoCSS.nameExpired]: todoState.todoExpired,
    [TodoCSS.nameCompleted]: todoState.checked,
    [TodoCSS.nameDeadline]: todoState.todoDeadLine,
  });
  return (
    <div className={` ${TodoCSS.todoItem} d-flex row`}>
      {todoState.editable ? (
        <div className={`${TodoCSS.todoInfo} d-flex flex-col`}>
          <TextInput
            variant={Variant.OUTLINED}
            onChangeHandler={handleTodoNameChange}
            value={todoState.todoName}
            subSize={Size.MEDIUM}
          />
          <DatePicker
            variant={Variant.OUTLINED}
            onChangeHandler={handleTodoTimeChange}
            value={todoState.todoTime}
            subSize={Size.MEDIUM}
          />
          <Calender className={TodoCSS.calender} />
        </div>
      ) : (
        <>
          <div className={`${TodoCSS.checkboxWrapper} d-flex`}>
            <input
              className={classNames(`${TodoCSS.todoCheckbox}`, {
                [TodoCSS.todoCheckboxExpired]: todoState.todoExpired,
              })}
              type="checkbox"
              checked={todoState.checked}
              onChange={handleToggleCheckbox}
            />
          </div>
          <div className={`${TodoCSS.todoInfo} d-flex flex-col`}>
            <p className={todoNameClass}>
              {todo.name}
              {todoState.todoDeadLine && !todoState.checked && (
                <span>
                  {` will expired in 
                  ${formatTimeLeft(
                    showTimeLeft(todoState.todoTime, todoState.checked)
                  )}`}
                </span>
              )}
            </p>
            <p className={TodoCSS.todoTime}>
              Expired at: {showTime(todoState.todoTime)}
            </p>
          </div>
        </>
      )}
      <div className={`${TodoCSS.iconGroup} d-flex`}>
        {todoState.checked || todoState.todoExpired ? (
          <div
            onClick={handleDeleteBtn}
            className={`${TodoCSS.iconWrapper} d-flex`}
          >
            <Delete className={TodoCSS.icon} />
          </div>
        ) : (
          <>
            {todoState.editable ? (
              <div className="row d-flex">
                <div
                  className={`${TodoCSS.iconWrapper}  d-flex`}
                  onClick={handleEditSubmit}
                >
                  <EditSubmit className={TodoCSS.icon} />
                </div>
                <div
                  className={`${TodoCSS.iconWrapper}  d-flex`}
                  onClick={handleCloseBtn}
                >
                  <Close className={TodoCSS.icon} />
                </div>
              </div>
            ) : (
              <div className="row d-flex">
                <div
                  className={`${TodoCSS.iconWrapper}  d-flex`}
                  onClick={handleEditBtn}
                >
                  <Edit className={TodoCSS.icon} />
                </div>
                <div
                  className={`${TodoCSS.iconWrapper}  d-flex`}
                  onClick={handleDeleteBtn}
                >
                  <Delete className={TodoCSS.icon} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
