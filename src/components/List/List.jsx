import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import listStyle from "../../style/List.module.css";

const List = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className={listStyle["list-container"]}>
      <h3>ToDo List</h3>
      <div className={listStyle.itemList}>
        {users.map((user) => {
          return (
            <ListItem
              key={user.id}
              id={user.id}
              title={user.title}
              detail={user.detail}
              status={user.done}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
