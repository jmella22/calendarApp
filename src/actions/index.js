export const GET_MONTH = "GET_MONTH";
export const PREV_MONTH = "PREV_MONTH";
export const NEXT_MONTH = "NEXT_MONTH";
export const CHANGE_MONTH = "CHANGE_MONTH,";
export const GET_DAY = "GET_DAY";
export const SHOW_EVENT = "SHOW_EVENT";
export const CLOSE_EVENT = "CLOSE_EVENT";
export const ADD_WALK = "ADD_WALK";

export const getMonthToDay = () => {
  return {
    type: GET_MONTH,
    paylodad: 1,
  };
};

export const prevMonth = () => {
  return {
    type: PREV_MONTH,
    payload: 1,
  };
};

export const nextMonth = () => {
  return {
    type: NEXT_MONTH,
    payload: 1,
  };
};

export const changeMonth = (current) => {
  return {
    type: CHANGE_MONTH,
    payload: current,
  };
};

export const getDay = (day) => {
  return {
    type: GET_DAY,
    payload: day,
  };
};

export const showEvent = () => {
  return {
    type: SHOW_EVENT,
    payload: true,
  };
};

export const closeEvent = () => {
  return {
    type: CLOSE_EVENT,
    payload: false,
  };
};

export const addWalk = (data) => {
  return {
    type: ADD_WALK,
    payload: data,
  };
};
