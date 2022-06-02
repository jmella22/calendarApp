import React from "react";

import S from "../styles/Month.module.css";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <div className={S.container1}>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
