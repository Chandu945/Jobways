import "./header.css";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src="/images/jobways_header_logo.png" alt="Logo" />
        </a>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/staffing">STAFFING AND RECRUITMENT</a>
          </li>
          <li>
            <a href="/learning">E-LEARNINGS</a>
          </li>
          <li>
            <a href="/tutor">BECOME A TUTOR</a>
          </li>
          <li>
            <a href="/resume-marketing">RESUME MARKETING</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
