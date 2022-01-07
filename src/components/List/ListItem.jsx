import React from "react";

const ListItem = ({id, title, detail}) => {
  return (
    <div>
      <h3>Todo: {title}</h3>
      <p>Detail: {detail}</p>
    </div>
  );
};

export default ListItem;
