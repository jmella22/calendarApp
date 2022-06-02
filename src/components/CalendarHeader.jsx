import React, { useState } from "react";
import S from "../styles/CalendarHeader.module.css";

import logo from "../assets/logo-calendar.png";
import { useDispatch } from "react-redux";
import { nextMonth, prevMonth } from "../actions";

const CalendarHeader = ({ currentMonth, setCurrentMonth }) => {
  const dispatch = useDispatch();

  const handlePrevMonth = (e) => {
    setCurrentMonth(currentMonth - 1);
    dispatch(prevMonth());
  };

  const handleNexMonth = (e) => {
    setCurrentMonth(currentMonth + 1);
    dispatch(nextMonth());
  };

  return (
    <header className={S.container}>
      <img src={logo} alt="logo calendar" className={S.logo} />
      <h1 className={S.title}>Calendar</h1>
      <button className={S.btn1}>Hoy</button>
      <button className={S.btn2} onClick={(e) => handlePrevMonth(e)}>
        <span className={S.span}>{`<`}</span>
      </button>
      <button className={S.btn2} onClick={(e) => handleNexMonth(e)}>
        <span className={S.span}>{`>`}</span>
      </button>
    </header>
  );
};

export default CalendarHeader;
