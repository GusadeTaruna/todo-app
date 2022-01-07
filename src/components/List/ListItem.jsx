import React from "react";
import listStyle from '../../style/List.module.css'

const ListItem = (props) => {
  return (
    <div>
      <p className={listStyle.todoTitle}>{props.title}</p>
      <p className={listStyle.todoDetail}>{props.detail}</p>
    </div>
  );
};

export default ListItem;
