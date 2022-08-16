import moment from "moment";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { addTodo } from "../../redux/thunk";
import TodoFormCSS from "./TodoForm.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as Calender } from "../../assets/images/calender.svg";
import { showTime } from "../../customMoment/formatTime";
import { Size, Variant } from "../../redux/constants";
import TextInput from "../Shared/TextInput/TextInput";
import DatePicker from "../Shared/DatePicker/DatePicker";
import Button from "../Shared/Button/Button";

export default function TodoForm() {
  const [todoName, setTodoName] = useState("");
  const [expiredDate, setExpiredDate] = useState("");

  const dispatch: Function = useAppDispatch();

  const handleInputChange = (name: string) => {
    setTodoName(name);
  };

  const handleTimeChange = (time: string) => {
    setExpiredDate(time);
    if (moment(time).isBefore(moment())) {
      toast.warning("Please select a future due date");
      setExpiredDate("");
    }
  };

  const handleAddBtnClick = () => {
    if (!todoName) {
      toast.warning("Please enter task name");
    } else if (!expiredDate) {
      toast.warning("Please select due date");
    } else {
      dispatch(
        addTodo({
          name: todoName,
          isCompleted: false,
          expiredDate: expiredDate,
        })
      );
      setTodoName("");
      setExpiredDate("");
    }
  };
  return (
    <div className={`${TodoFormCSS.formWrapper} d-flex`}>
      <ToastContainer />
      <div className={`${TodoFormCSS.taskNameField}`}>
        <TextInput
          variant={Variant.OUTLINED}
          placeHolder="Enter task name"
          onChangeHandler={handleInputChange}
          value={todoName}
          subSize={Size.LARGE}
        />
      </div>
      <div className={`${TodoFormCSS.dueDateWrapper} d-flex flex-col`}>
        <div className={`${TodoFormCSS.dueDateInput} d-flex`}>
          <p className={`${TodoFormCSS.dueDateHeader}`}>Due date: </p>
          {!expiredDate ? (
            <span className={TodoFormCSS.timeText}>--- dd/mm/yyyy --:--</span>
          ) : (
            <span className={TodoFormCSS.timeText}>
              {showTime(expiredDate)}
            </span>
          )}
          <DatePicker
            variant={Variant.STANDARD}
            onChangeHandler={handleTimeChange}
            value={expiredDate}
            subSize={Size.LARGE}
          />
          <Calender className={TodoFormCSS.calender} />
        </div>
      </div>
      <Button
        variant={Variant.CONTAINED}
        text="Add"
        onClick={handleAddBtnClick}
        subSize={Size.LARGE}
      />
    </div>
  );
}
