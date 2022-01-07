import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";
import formStyle from "../style/Form.module.css";

const Form = () => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDetail, setDetail] = useState("");
  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setDetail(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        title: enteredTitle,
        detail: enteredDetail,
      })
    );
    setTitle("");
    setDetail("");
  };

  return (
    <div className={formStyle["form-container"]}>
      <form onSubmit={addUserHandler}>
        <div className={formStyle.content}>
          <h1>Todo App</h1>
          <input
            type="text"
            placeholder="What you gonna do?"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Tell me the detail!"
            value={enteredDetail}
            onChange={detailChangeHandler}
          ></input>
          <Button />
        </div>
      </form>
    </div>
  );
};

export default Form;
