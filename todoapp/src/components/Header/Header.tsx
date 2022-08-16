import Filter from "../Filter/Filter";
import TodoForm from "../TodoForm/TodoForm";
import HeaderCSS from "../Header/Header.module.scss";
import { ReactComponent as LogoImg } from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className={` ${HeaderCSS.headerWrapper} d-flex flex-col`}>
      <LogoImg className={HeaderCSS.logo} />
      <TodoForm />
      <Filter />
    </header>
  );
}
