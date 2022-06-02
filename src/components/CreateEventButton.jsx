import React from "react";
import S from "../styles/CreateEventButton.module.css";
import plus from "../assets/plus.png";
import { useDispatch } from "react-redux";
import { showEvent } from "../actions";

const CreateEventButton = () => {
  const dispatch = useDispatch();

  const handleEvent = (e) => {
    e.preventDefault();
    dispatch(showEvent());
  };

  return (
    <button className={S.btn1} onClick={handleEvent}>
      <img src={plus} alt="create_event" className={S.plusimg} />
      <span className={S.create}>Create</span>
    </button>
  );
};

export default CreateEventButton;
