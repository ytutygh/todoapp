import { Color, Size, Variant } from "../../../redux/constants";
import DatePickerCSS from "../DatePicker/DatePicker.module.scss";
import { IDatePickerProps } from "./type";

export default function DatePicker({
  variant = Variant.OUTLINED,
  value,
  onChangeHandler,
  subSize = Size.MEDIUM,
  color = Color.PRIMARY,
  ...rest
}: IDatePickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e.target.value);
  };

  return (
    <input
      type="datetime-local"
      onChange={handleChange}
      className={`${DatePickerCSS[variant]} ${DatePickerCSS[subSize]} ${DatePickerCSS[color]}`}
      value={value}
      {...rest}
    />
  );
}
