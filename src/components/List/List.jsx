import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const List = () => {
  const users = useSelector((state) => state.users)
  return (
    <div>
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
  );
};

export default List;
