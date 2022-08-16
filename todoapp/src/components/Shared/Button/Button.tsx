import { Color, Size, Variant } from "../../../redux/constants";
import ButtonCSS from "../Button/Button.module.scss";
import { IButtonProps } from "./type";

export default function Button({
  variant = Variant.OUTLINED,
  text = "",
  onClick,
  subSize = Size.MEDIUM,
  color = Color.PRIMARY,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={`${ButtonCSS[variant]} ${ButtonCSS[subSize]} ${ButtonCSS[color]}`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}
