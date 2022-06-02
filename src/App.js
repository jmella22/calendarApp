import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import EventModal from "./components/EventModal";

import S from "./styles/App.module.css";

import { getMonth } from "./util/util";

import logo from "./assets/logo-calendar.png";
import { useDispatch } from "react-redux";
import { getMonthToDay, nextMonth, prevMonth } from "./actions";
import dayjs from "dayjs";

function App() {
  const { monthIndex, showEventModal } = useSelector((state) => state);
  const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndex));
  // console.log(monthIndex);
  // console.log(currentMonth);

  const dispatch = useDispatch();

  const handlePrevMonth = (e) => {
    e.preventDefault();
    dispatch(prevMonth());
  };

  const handleNexMonth = (e) => {
    e.preventDefault();
    dispatch(nextMonth());
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getMonthToDay());
    setCurrentMonth(getMonth());
  };

  useEffect(() => {
    dispatch(getMonthToDay());
  }, []);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className={S.container1}>
        <header className={S.containerh}>
          <img src={logo} alt="logo calendar" className={S.logo} />
          <h1 className={S.title1}>Calendar</h1>
          <button className={S.btn1} onClick={(e) => handleReset(e)}>
            Hoy
          </button>
          <button className={S.btn2} onClick={(e) => handlePrevMonth(e)}>
            <span className={S.span}>{`<`}</span>
          </button>
          <button className={S.btn2} onClick={(e) => handleNexMonth(e)}>
            <span className={S.span}>{`>`}</span>
          </button>
          <h2 className={S.title2}>
            {dayjs(new Date(dayjs().year(), monthIndex))
              .format("MMMM YYYY")
              .toUpperCase()}
          </h2>
        </header>

        <div className={S.container2}>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
