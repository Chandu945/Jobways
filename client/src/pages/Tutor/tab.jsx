import React, { useState } from "react";
import "./Tabs.css";

const Tab = ({ isActive, label, onClick }) => (
  <li className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </li>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const tabs = [
    {
      id: "contact",
      title: "Contact Us",
      content:
        "You can become a tutor on Jobways if you are experienced or have knowledge of technology. For this, you have to sign up with your correct details in Jobways.",
    },
    {
      id: "tutoring",
      title: "Start Online Tutoring",
      content:
        "Step into the virtual classroom and share your expertise with eager learners worldwide. Online tutoring offers a flexible and impactful way to inspire and educate, transcending physical boundaries.",
    },
    {
      id: "benefited",
      title: "Get Benefited",
      content:
        "Experience the rewards of online tutoring firsthand as you enrich minds and expand horizons. Joining the world of online education brings both fulfillment in teaching and the opportunity to learn and grow in a diverse, global community.",
    },
  ];

  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            isActive={activeTab === tab.id}
            label={tab.title}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </ul>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
