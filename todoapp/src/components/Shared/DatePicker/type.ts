import { Color, Size, Variant } from "../../../redux/constants";

export interface IDatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  value: string;
  onChangeHandler: (time: string) => void;
  subSize?: Size;
  color?: Color;
}
