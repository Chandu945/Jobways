import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  let url = process.env.REACT_APP_HOST;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}comment/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
          number: "",
        });
      } else {
        // alert("Error sending message");
      }
    } catch (error) {
      // alert("An error occurred");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>
      <div className={`modal-container ${isOpen ? "active" : ""}`}>
        <h2>Get in Touch</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.number}
            onChange={(e) => {
              setFormData({
                ...formData,
                number: e.target.value,
              });
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            required
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });
            }}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
