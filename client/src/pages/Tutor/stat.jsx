import React from "react";
import "./Stats.css";
import CountUp from "react-countup";

const Stat = ({ number, label }) => (
  <div className="stat">
    <div className="number">
      <CountUp end={number} duration={2.75} />
    </div>
    <div className="label">{label}</div>
  </div>
);

const Stats = () => (
  <div className="stats">
    <Stat number={68806} label="Students Enrolled" />
    <Stat number={5740} label="Classes Completed" />
    <Stat number={470} label="Skilled Instructors" />
    <Stat number={654} label="Technical Courses" />
  </div>
);

export default Stats;
