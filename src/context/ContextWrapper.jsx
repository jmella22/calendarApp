import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider valeu={{ monthIndex, setMonthIndex }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
