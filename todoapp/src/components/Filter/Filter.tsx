import { useState } from "react";
import FilterCSS from "./Filter.module.scss";
import { SINGLE, todoStatus } from "../../redux/constants";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { changeTab } from "../../redux/actions";
import { todoListSelector } from "../../redux/selector";

export default function Filter() {
  const dispatch: Function = useAppDispatch();
  const count = useAppSelector(todoListSelector).length;

  const tabList = Object.values(todoStatus);

  const [activeTab, setActiveTab] = useState(todoStatus.ALL as string);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    dispatch(changeTab(tab));
  };
  return (
    <div className="row">
      <div className={` ${FilterCSS.tabList} d-flex`}>
        {tabList.map((tab) => (
          <div key={tab} className="col-4">
            {tab === activeTab ? (
              <div className={"active-tab tab d-flex flex-col"}>
                <p className="text">{tab}</p>
                {count === SINGLE ? <p>{count} task</p> : <p>{count} tasks</p>}
              </div>
            ) : (
              <div
                className={"tab d-flex flex-col"}
                onClick={() => handleTabClick(tab)}
              >
                <p className="text">{tab}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
