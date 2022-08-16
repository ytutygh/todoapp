import { Color, Size, Variant } from "../../../redux/constants";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  text?: string;
  onClick?: () => void;
  subSize?: Size;
  color?: Color;
}
