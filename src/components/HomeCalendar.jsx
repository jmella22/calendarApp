import React from "react";
import S from "../styles/HomeCaledar.module.css";
import { getMonth } from "../util/util";

import logo from "./assets/logo-calendar.png";
import { useDispatch } from "react-redux";
import { nextMonth, prevMonth } from "../actions";

const HomeCalendar = () => {
  const { monthIndex } = useSelector((state) => state);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const handlePrevMonth = (e) => {
    e.preventDefault();
    setCurrentMonth(currentMonth - 1);
    // dispatch(prevMonth());
  };

  const handleNexMonth = (e) => {
    e.preventDefault();
    setCurrentMonth(currentMonth + 1);
    // dispatch(nextMonth());
  };

  return (
    <div className={S.container}>
      <header className={S.container1}>
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

      <div className={S.container2}>
        <div className={S.container21}>
          {currentMonth.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, idx) => (
                <Day day={day} key={idx} rowIdx={i} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCalendar;
