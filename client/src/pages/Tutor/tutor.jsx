import React, { useState } from "react";
import "./tutor.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Stats from "./stat";
import Tabs from "./tab";
import Modal from "../Modal/modal";

const Tutor = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="teach-with-us-container">
        <div className="image-section">
          <img src="/images/teach-2.avif" alt="Teach With Us" />
        </div>
        <div className="text-section">
          <h2>Let's Educate Together</h2>
          <p>Inspire, Educate and Lead - Make Your Mark as a Tutor</p>
          <button
            className="get-started-btn"
            onClick={() => setModalOpen(true)}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="three-sections-container">
        <div className="section">
          <img
            src="/images/inspire.jpeg"
            alt="Loading..."
            className="section-image"
          />
          <h3>Empower Others as a Tutor</h3>
          <p>
            Share your expertise and passion for learning. Join us to inspire
            and guide students towards academic success. Your knowledge could
            shape future leaders.
          </p>
        </div>
        <div className="section">
          <img
            src="/images/teach-u.jpeg"
            alt="Loading..."
            className="section-image"
          />
          <h3>Ignite Minds, Shape Futures</h3>
          <p>
            Embrace the role of a mentor. Guide and inspire students on their
            educational journey. Your guidance today shapes tomorrow's leaders.
          </p>
        </div>
        <div className="section">
          <img
            src="/images/reward.jpeg"
            alt="Loading..."
            className="section-image"
          />
          <h3>Join Our Tutoring Community</h3>
          <p>
            Join a network of dedicated educators. Collaborate, grow, and thrive
            in an inclusive environment focused on student development and
            teaching excellence.
          </p>
        </div>
      </div>
      <Stats />
      <h1 style={{ marginTop: "20px" }}>How To Start</h1>
      <Tabs />
      <div className="header-container">
        <h1 className="heading">Become a Tutor Today</h1>
        <p className="subheading">
          So, why are you waiting? Start your steps toward becoming an online
          tutor with Jobways and earn extra money.
        </p>
        <button
          className="get-started-button"
          onClick={() => setModalOpen(true)}
        >
          Get Started Now
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <Footer />
    </>
  );
};

export default Tutor;
