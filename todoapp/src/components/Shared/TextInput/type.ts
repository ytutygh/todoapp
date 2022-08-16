import { Size, Color, Variant } from "../../../redux/constants";

export interface ITextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  placeHolder?: string;
  onChangeHandler: (inputText: string) => void;
  value: string;
  subSize?: Size;
  color?: Color;
}
