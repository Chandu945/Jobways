import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./home.css";

const Home = () => {
  const infoData = [
    {
      title: "Our Mission",
      content:
        "Our mission is to find the easiest way out of your job search, Hiring Process and Human resource Management.",
      imageUrl: "/images/o-mission.avif",
    },
    {
      title: "Our Team",
      content:
        "We have a global team of passionate employees constantly working to improve your experience via reliable data and stories.",
      imageUrl: "/images/o-team.avif",
    },
    {
      title: "Our History",
      content:
        "Jobways was established in 2017. It is a global IT service company that provides IT job services in more than 50 countries. It is credited with being one of the prototypes of a job board.",
      imageUrl: "/images/his-3.jpeg",
    },
  ];

  return (
    <div id="app">
      <Header />
      <div id="open">
        <Carousel className="open">
          <Carousel.Item interval={2000}>
            <img src="/images/hd2.jpg" alt="Loading..." className="cor-img" />
            {/* <img1 text="First slide" /> */}
            <Carousel.Caption>
              <h3>Discover Your Path</h3>
              <p>
                Navigate your career journey with precision. Find opportunities
                that match your ambitions
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src="/images/hd1.jpg" alt="Loading..." className="cor-img" />
            <Carousel.Caption>
              <h3>Unlock Your Potential</h3>
              <p>
                Empower your growth. Unleash possibilities with tailored job
                matches and professional development
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src="/images/hd4.jpg" alt="Loading..." className="cor-img" />
            <Carousel.Caption>
              <h3>Elevate Your Career</h3>
              <p>
                Reach new heights in your profession. Elevate your career with
                opportunities aligned to your aspirations.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h1 className="heading">Explore Our Top services</h1>
      <div className="services-container">
        <div className="service-card">
          <img
            src="/images/learn.jpeg"
            alt="Loading..."
            className="service-image"
          />
          <h3>E-Learnings</h3>
          <p>Explore new skills</p>
        </div>
        <div className="service-card">
          <img
            src="/images/tutor.jpeg"
            alt="Loading..."
            className="service-image"
          />
          <h3>Become a Tutor</h3>
          <p>Join our teaching force</p>
        </div>
        <div className="service-card">
          <img
            src="/images/staff.jpeg"
            alt="Loading..."
            className="service-image"
          />
          <h3>Staffing and Recruiting</h3>
          <p>Find your dream team</p>
        </div>
        <div className="service-card">
          <img
            src="/images/resume.jpeg"
            alt="Loading..."
            className="service-image"
          />
          <h3>Resume Marketing</h3>
          <p>Enhance your career</p>
        </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-image">
          <img src="/images/choose.jpeg" alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>Why Students Choose Us To Gain Their Knowledge</h2>
          <p>
            Jobways is the platform for multiple services, like a Professional
            networking - People connect with professionals from all over the
            world.
          </p>
          <p>
            E Learning - Students can improve their skills by taking relevant
            online courses.
          </p>
          <p>
            Employment Services - Job seekers can train for the next job with
            services like Career counseling, Resume Making, Mock Interviews,
            Resume Marketing and Job Support.
          </p>
          <p>Become a Tutor - Tutors can sell their skills online.</p>
          <ul>
            <li>Scratch to HTML</li>
            <li>Learn how to code in Python</li>
            <li>Unlimited backend database creation</li>
            <li>Adobe XD Tutorials</li>
          </ul>
        </div>
      </div>

      <div className="info-section-container">
        {infoData.map((item, index) => {
          return (
            <div
              key={index}
              className={`info-block ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="info-text">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
              <div className="info-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="know-us-better-container">
        <h2 className="know-us-title">
          Know Us Better Than Other Education Platform
        </h2>
        <div className="know-us-content">
          <p>
            This platform suggests to students about relevant online courses and
            training required to upskill once they register.
          </p>
          <p>
            A strengthened workforce will then be able to make informed
            decisions via efficient job search engines.
          </p>
          <p>
            This again helps recruiters find the most suitable candidate who is
            abreast with the latest technology, resulting in overall growth.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
