import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./learning.css";
import LearnTab from "./learntab";
import Modal from "../Modal/modal";

const Learning = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="elearning-container">
        <div className="elearning-content">
          <img
            className="elearning-image"
            src="/images/hd6.jpg" // Replace 'your-image-path.jpg' with the actual image path
            alt="Learn Anytime, Anywhere"
          />
          <h1 className="heading">Learning Made Easy</h1>
          <p className="elearning-subheading">
            Access quality education on your schedule, from any corner of the
            world.
          </p>
          <button
            className="elearning-button"
            onClick={() => setModalOpen(true)}
          >
            Let's Learn
          </button>
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <img
            className="card-image"
            src="/images/el-5.avif" // Replace 'image1.jpg' with the actual image path
            alt="Loading..."
          />
          <div className="card-content">
            <h2 className="card-heading">Who Needs E-Learnings</h2>
            <p className="card-paragraph">
              E-Learning serves everyone—from students seeking flexible
              education to professionals aiming to upskill. It's education
              tailored for the curious, the ambitious, and anyone eager to learn
              and grow on their own terms
            </p>
          </div>
        </div>
        {/* Repeat similar structure for the other two cards */}
        {/* Card 2 */}
        <div className="card">
          <img
            className="card-image"
            src="/images/el-6.jpeg" // Replace 'image2.jpg' with the actual image path
            alt="Loading..."
          />
          <div className="card-content">
            <h2 className="card-heading">Importance of E-Learnings</h2>
            <p className="card-paragraph">
              Learners can access course materials and participate in online
              classes from anywhere at any time, making it easier for them to
              balance their work and personal lives while pursuing their
              education.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <img
            className="card-image"
            src="/images/el-7.jpeg" // Replace 'image3.jpg' with the actual image path
            alt="Loading..."
          />
          <div className="card-content">
            <h2 className="card-heading">Benefits of E-Learnings</h2>
            <p className="card-paragraph">
              E-learning platforms can use data analytics and machine learning
              algorithms to personalize learning experiences for individual
              learners. This can lead to better engagement and improved learning
              outcomes
            </p>
          </div>
        </div>
      </div>
      <h1 className="heading">Top Learning Pathways</h1>
      <div className="gallery">
        <div className="card2">
          <h2>Progamming Languages</h2>
          <img src="/images/program.jpeg" alt="loading..." />
        </div>
        <div className="card2">
          <h2>Web Development</h2>
          <img src="/images/web.jpeg" alt="loading..." />
        </div>
        <div className="card2">
          <h2>Data Science</h2>
          <img src="/images/data.jpeg" alt="loading..." />
        </div>
        <div className="card2">
          <h2>Cybersecurity</h2>
          <img src="/images/cyber.jpeg" alt="loading..." />
        </div>
        <div className="card2">
          <h2>Cloud Computing</h2>
          <img src="/images/clo.jpeg" alt="loading..." />
        </div>
        <div className="card2">
          <h2>Database Management</h2>
          <img src="/images/databas.jpeg" alt="loading..." />
        </div>
      </div>
      <h1 style={{ marginTop: "20px" }}>How To Start</h1>
      <LearnTab />
      <div className="header-container">
        <h1 className="main-heading">Get E-Learnings Today</h1>
        <p className="sub-heading">
          Join one of the world’s best online E-Learnings platform, where Our
          tutor are ready to help you.
        </p>
        <button className="action-button" onClick={() => setModalOpen(true)}>
          Get Started Now
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <Footer />
    </>
  );
};

export default Learning;
