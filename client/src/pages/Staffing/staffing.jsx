import { useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Modal from "../Modal/modal";
import "./staffing.css";

const Staffing = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="inf-section">
        <img
          src="/images/hirings.jpeg"
          alt="Loading..."
          className="inf-image"
        />
        <div className="inf-content">
          <h2 className="inf-heading">
            Cease the quest ! Your next hire awaits
          </h2>
          <ul className="inf-points">
            <li>
              Find top talent for short-term or permanent roles effortlessly
            </li>
            <li>Expert Matching of Talent to Positions</li>
            <li>Match talent, all levels, no hassle</li>
          </ul>
          <button
            className="action-button"
            style={{ marginTop: "10px" }}
            onClick={() => setModalOpen(true)}
          >
            Find Your Next Hire
          </button>
        </div>
      </div>
      <div className="welcome-container">
        <header className="banne">
          <h1>Empowering Connections, Unlocking Potential.</h1>
          <p>
            Welcome to Jobways - Your ultimate staffing and recruitment partner.
          </p>
        </header>
        <section className="short-intro">
          <p>
            At Jobways, we bridge the gap between talent and opportunity. Our
            dedicated team leverages deep industry knowledge and a vast network
            to connect top-tier companies with the professionals who will drive
            their success.
          </p>
        </section>
      </div>
      <div className="mvv-container">
        <section className="vision">
          <h2>Our Mission</h2>
          <p>
            "To provide innovative staffing solutions that empower individuals
            and organizations to reach their full potential."
          </p>
        </section>

        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            "To be the leading and trusted recruitment partner known for our
            commitment to quality, integrity, and personalized service."
          </p>
        </section>

        <section className="vision">
          <h2>Our Values</h2>
          <ul className="ul">
            <li>
              <strong>Integrity:</strong> We operate with honesty and uphold
              high ethical standards.
            </li>
            <li>
              <strong>Excellence:</strong> We strive for excellence in all we
              do, delivering quality results every time.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of
              teamwork and work closely with clients and candidates to achieve
              their goals.
            </li>
          </ul>
        </section>
      </div>
      <div className="partner-container">
        <section className="why-partner">
          <h2>Why Partner with Us</h2>
          <p>
            "Our comprehensive approach to staffing ensures that you not only
            find candidates but the right talent who aligns with your company's
            culture and objectives. From temporary staffing to permanent
            placements, we offer a range of services tailored to your business
            needs."
          </p>
        </section>

        <section className="services-offered">
          <h2>Services Offered</h2>
          <ul>
            <li>Temporary and Contract Staffing</li>
            <li>Permanent Recruitment</li>
            <li>Talent Management Consultancy</li>
          </ul>
        </section>
      </div>
      <div className="contact-blog-container">
        <section className="contact">
          <h2>Ready to unlock potential? Connect with us today.</h2>
          <p>
            Our expert team is ready to support your staffing and career needs.
          </p>
          <div className="contact-details">
            <p>Phone: +1 240 558 8717</p>
            <p>Email: contactus@jobways.com</p>
          </div>
        </section>
      </div>
      <div className="header-container">
        <h1 className="main-heading">Get Your Hire Today</h1>
        <p className="sub-heading">
          Connect with Industry Leaders and Top Talent to Propel Your Business
          Forward.
        </p>
        <button className="action-button" onClick={() => setModalOpen(true)}>
          Get Your Hire
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <Footer />
    </>
  );
};
export default Staffing;
