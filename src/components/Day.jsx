import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import S from "../styles/Day.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDay, showEvent } from "../actions";

const Day = ({ day, rowIdx }) => {
  const dispatch = useDispatch();
  const [dayEvent, setDayEvent] = useState([]);
  const { walks } = useSelector((state) => state);

  const getCurrentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? S.today : "";
  };

  useEffect(() => {
    const event = walks.filter((walk) => {
      return dayjs(walk.day).format("DD-MM-YY") === day.format("DD-MM-YY");
    });
    setDayEvent(event);
  }, [walks, day]);

  return (
    <div className={S.container1}>
      <header className={S.header}>
        {rowIdx === 0 && (
          <p className={S.day1}>{day.format("ddd").toUpperCase()}</p>
        )}

        <p
          className={`${S.day2} ${getCurrentDay()}`}
          onClick={() => {
            dispatch(getDay(day));
            dispatch(showEvent());
          }}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className={S.container11}
        // onClick={() => {
        //   dispatch(getDay(day));
        //   dispatch(showEvent());
        // }}
      >
        {dayEvent.map((w, i) => (
          <div key={i}>
            <p>{w.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
