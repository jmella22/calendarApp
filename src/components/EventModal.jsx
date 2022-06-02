import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWalk, closeEvent } from "../actions";
import S from "../styles/EventModal.module.css";
import reloj from "../assets/reloj.png";
import booktag from "../assets/booktag.png";

const EventModal = () => {
  const dispatch = useDispatch();
  const { selectDay } = useSelector((state) => state);

  const [input, setInput] = useState({
    title: "",
    description: "",
    day: selectDay,
    turn: [],
  });

  const handleCloseEvent = (e) => {
    e.preventDefault();
    dispatch(closeEvent());
    setInput({
      title: "",
      description: "",
      day: selectDay,
      turn: [],
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleChangeTurn = (e) => {
    e.preventDefault();
    const noRepit = input.turn.find((t) => {
      return t === e.target.value;
    });
    if (!noRepit) {
      setInput({
        ...input,
        turn: [...input.turn, e.target.value],
      });
    }
  };
  const handleDelet = (e, t) => {
    e.preventDefault();
    const turn = input.turn.filter((tr) => t !== tr);
    setInput({
      ...input,
      turn: turn,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWalk(input));
    dispatch(closeEvent());
    alert(JSON.stringify(input));
  };

  console.log(input);

  return (
    <div className={S.container}>
      <form className={S.form} onSubmit={(e) => handleSubmit(e)}>
        <header className={S.header}>
          <span className={S.drag}>=</span>
          <button onClick={handleCloseEvent}>
            <span className={S.drag}>X</span>
          </button>
        </header>
        <div className={S.container2}>
          <div className={S.container21}>
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={input.title}
              className={S.inputTitle}
              onChange={(e) => handleChange(e)}
            />
            <span>=</span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={input.description}
              className={S.inputTitle}
              onChange={(e) => handleChange(e)}
            />
            <span>
              <img className={S.reloj} src={reloj} alt="reloj de calendario" />
            </span>
            <p>{selectDay.format("dddd, MMMM DD")}</p>
            <span>
              <img src={booktag} alt="book tag" className={S.reloj} />
            </span>
            <div className={S.tag}>
              <select
                name="turn"
                value={input.turn}
                onChange={(e) => handleChangeTurn(e)}
              >
                <option value="">su Turno</option>
                <option value="morning">mañana</option>
                <option value="afternoon">tarde</option>
                <option value="evening">noche</option>
              </select>
            </div>
            <div></div>
            <div>
              {input.turn.map((t) => {
                return (
                  <div key={t}>
                    <span>{`${t}`}</span>
                    <button onClick={(e) => handleDelet(e, t)}>X</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <footer className={S.footer}>
          <button type="submit" className={S.btnsub}>
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
