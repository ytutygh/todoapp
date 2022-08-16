import { useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { getTodos } from "./redux/thunk";
import { useAppDispatch } from "./redux/hook";
import "../src/assets/scss/GlobalStyles.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch: Function = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className={`${styles.app} d-flex`}>
      <div className={`${styles.wrapper} d-flex`}>
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
