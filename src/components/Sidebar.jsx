import React from "react";
import S from "../styles/Sidebar.module.css";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

const Sidebar = () => {
  return (
    <aside className={S.container}>
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  );
};

export default Sidebar;
