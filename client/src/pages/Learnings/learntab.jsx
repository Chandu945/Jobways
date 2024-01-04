import React, { useState } from "react";

const Tab = ({ isActive, label, onClick }) => (
  <li className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </li>
);

const LearnTab = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const tabs = [
    {
      id: "contact",
      title: "Contact Us",
      content:
        "Our Jobways career counselor will talk with you to discuss your interests in which technology and then assign a personal tutor according to your opinion",
    },
    {
      id: "tutoring",
      title: "Get a Personal Tutor",
      content:
        "Welcome to Jobways, where personalized learning meets your unique needs! Are you seeking a tailored approach to mastering a subject or skill? Look no further. Our team of experienced tutors is dedicated to empowering your learning journey",
    },
    {
      id: "benefited",
      title: "Start A Career",
      content:
        "Empower your career path with personalized guidance from Jobways . Our expert counselors offer tailored advice, industry insights, resume support, interview preparation, and skill enhancement. Start your journey to success today",
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

export default LearnTab;
