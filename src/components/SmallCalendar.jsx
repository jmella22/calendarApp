import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "../util/util";
import S from "../styles/SmallCalendar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeMonth, getDay } from "../actions";

const SmallCalendar = () => {
  const [currentMonthIndx, setCurrentMonthIndx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, selectDay } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePrevMonth = (e) => {
    e.preventDefault();
    setCurrentMonthIndx(currentMonthIndx - 1);
  };

  const handleNextMonth = (e) => {
    e.preventDefault();
    setCurrentMonthIndx(currentMonthIndx + 1);
  };
  const handleChangeDay = (e) => {
    e.preventDefault();
    dispatch(changeMonth(currentMonthIndx));
    // dispatch(getDay(e.target.value));
    console.log();
  };

  const getdayClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);

    const slcDay = selectDay && selectDay.format(format);
    if (nowDay === currDay) {
      return S.toDay;
    } else if (currDay === slcDay) {
      return S.daySelect;
    } else {
      return "";
    }
  };

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndx));
  }, [currentMonthIndx]);

  useEffect(() => {
    setCurrentMonthIndx(monthIndex);
  }, [monthIndex]);

  return (
    <div className={S.container}>
      <header className={S.container1}>
        <p className={S.text}>
          {dayjs(new Date(dayjs().year(), currentMonthIndx))
            .format("MMMM YYYY")
            .toUpperCase()}
        </p>
        <div>
          <button className={S.btn2} onClick={(e) => handlePrevMonth(e)}>
            <span className={S.span}>{`<`}</span>
          </button>
          <button className={S.btn2} onClick={(e) => handleNextMonth(e)}>
            <span className={S.span}>{`>`}</span>
          </button>
        </div>
      </header>
      <div className={S.container2}>
        {currentMonth[0].map((day, i) => (
          <span key={i} className={S.dayName}>
            {day.format("dd").charAt(0).toUpperCase()}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                className={`${S.btn3} ${getdayClass(day)}`}
                key={idx}
                onClick={() => {
                  dispatch(changeMonth(currentMonthIndx));
                  dispatch(getDay(day));
                }}
              >
                <span className={S.dayNum}>{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
