import { Color, Size, Variant } from "../../../redux/constants";
import TextInputCSS from "../TextInput/TextInput.module.scss";
import { ITextInputProps } from "./type";

export default function TextInput({
  variant = Variant.OUTLINED,
  placeHolder = "",
  onChangeHandler,
  value,
  subSize = Size.MEDIUM,
  color = Color.PRIMARY,
  ...rest
}: ITextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e.target.value);
  };
  return (
    <input
      type="text"
      className={`${TextInputCSS[variant]} ${TextInputCSS[subSize]} ${TextInputCSS[color]}`}
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
}
