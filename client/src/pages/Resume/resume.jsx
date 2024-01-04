import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./resume.css";
import Modal from "../Modal/modal";

const Resume = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const industries = [
    "Call Center & Customer Service",
    "Engineering",
    "Banking & Finance",
    "Sales & Marketing",
    "Information Technology",
    "Education",
    "Healthcare",
    "Trades",
    "Building & Construction",
    "Social Workers",
    "Hospitality",
    "Cruise Lines Staff",
    "Administration & Operations",
    "Architecture",
    "Pharma & Bio",
  ];
  return (
    <>
      <Header />
      <div className="banner">
        <div className="content">
          <h1>Empower Your Career with Professional Resumes That Stand Out!</h1>
          <p>
            Unlock the door to your dream job with a resume that showcases your
            unique talents and experiences
          </p>
          <button onClick={() => setModalOpen(true)} className="btn-5">
            Get Started
          </button>
        </div>
      </div>
      <div className="home">
        <section className="hero">
          <h1>Welcome to Resume Marketing</h1>
          <p>
            Your premier online platform for connecting top talents with
            organizations.
          </p>
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            We're committed to offering a user-friendly, data-driven, and
            innovative platform that empowers job seekers to present their
            skills and experiences effectively, while helping employers find the
            ideal candidates efficiently.
          </p>
        </section>
      </div>
      <div className="containe">
        {industries.map((industry, index) => (
          <div className="industryCard" key={index}>
            {industry}
          </div>
        ))}
      </div>
      <div className="header-container">
        <h1 className="main-heading">Get Your Resume Marketed</h1>
        <p className="sub-heading">
          Reach out to our professionals to get landed in your dream job
        </p>
        <button className="action-button" onClick={() => setModalOpen(true)}>
          Contact Us
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <Footer />
    </>
  );
};

export default Resume;
