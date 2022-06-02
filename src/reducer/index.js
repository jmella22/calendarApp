import dayjs from "dayjs";
import {
  ADD_WALK,
  CHANGE_MONTH,
  CLOSE_EVENT,
  GET_DAY,
  GET_MONTH,
  NEXT_MONTH,
  PREV_MONTH,
  SHOW_EVENT,
} from "../actions";

const initialState = {
  monthIndex: dayjs().month(),
  selectDay: dayjs(),
  showEventModal: false,
  walks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTH: {
      return {
        ...state,
        monthIndex: dayjs().month(),
      };
    }

    case PREV_MONTH: {
      const month = state.monthIndex - 1;
      return {
        ...state,
        monthIndex: month,
      };
    }
    case NEXT_MONTH: {
      const month = state.monthIndex + 1;
      return {
        ...state,
        monthIndex: month,
      };
    }
    case CHANGE_MONTH: {
      return {
        ...state,
        monthIndex: action.payload,
      };
    }
    case GET_DAY: {
      return {
        ...state,
        selectDay: action.payload,
      };
    }
    case SHOW_EVENT: {
      return {
        ...state,
        showEventModal: action.payload,
      };
    }
    case CLOSE_EVENT: {
      return {
        ...state,
        showEventModal: action.payload,
      };
    }
    case ADD_WALK: {
      return {
        ...state,
        walks: [...state.walks, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
