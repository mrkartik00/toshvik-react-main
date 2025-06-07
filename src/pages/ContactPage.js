import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

// Animations
const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactWrapper = styled.div`
  animation: ${fadeSlideUp} 0.8s ease-in;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .container {
    max-width: 1000px;
    margin: auto;
    background: ${({ theme }) => theme.card || theme.navBackground};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: ${({ theme }) =>
      theme.isDark
        ? '0 10px 25px rgba(255, 255, 255, 0.05)'
        : '0 10px 25px rgba(0, 0, 0, 0.07)'};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

    h1 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.primary};
    }

    p.text-center {
      text-align: center;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.text};
    }
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${fadeSlideUp} 1s ease;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => (theme.isDark ? '#ccc' : '#444')};
  }

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 0.9rem;
    border: 1px solid ${({ theme }) => (theme.isDark ? '#555' : '#ccc')};
    border-radius: 8px;
    font-size: 1rem;
    background: ${({ theme }) => (theme.isDark ? '#222' : '#fff')};
    color: ${({ theme }) => (theme.isDark ? '#eee' : '#222')};
    box-shadow: ${({ theme }) => (theme.isDark ? '0 1px 2px #000' : '0 1px 2px rgba(0,0,0,0.1)')};
    transition: all 0.3s ease;

    &:focus {
      border-color: ${({ theme }) => theme.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}55;
      outline: none;
    }

    &:hover {
      background: ${({ theme }) => (theme.isDark ? '#2c2c2c' : '#f9f9f9')};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  button {
    background: ${({ theme }) => theme.primary};
    color: white;
    padding: 0.9rem 1.4rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 0.5rem;

    &:hover {
      background: ${({ theme }) => theme.primary}dd;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px ${({ theme }) => theme.primary}55;
    }

    &:active {
      transform: scale(0.98);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .success {
    color: #22c55e;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

const ContactInfo = styled.div`
  animation: ${fadeSlideUp} 1.2s ease;

  h3 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => (theme.isDark ? '#bbb' : '#555')};
    font-size: 1rem;

    svg {
      margin-right: 8px;
      vertical-align: middle;
      color: ${({ theme }) => theme.primary};
    }
  }

  strong {
    color: ${({ theme }) => theme.text};
  }

  a {
    color: ${({ theme }) => (theme.isDark ? '#90cdf4' : '#0a66c2')};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Form submitted (client-side only):', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <ContactWrapper>
      <div className="container">
        <h1>Get in Touch</h1>
        <p className="text-center">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.</p>

        <div className="contact-grid">
          <ContactInfo>
            <h3>Our Contact Details</h3>
            <p><MdLocationOn /><strong>Address:</strong><br/> SHRI RADHE FLOUR MILLS <br/> Balran road , Moonak (Distt-Sangrur)Punjab 148033</p>
            <p><MdPhone /><strong>Phone:</strong> <a href="tel:+919815062740">9464680000 </a> <a href="tel:+919464680000">9464680000</a></p>
            <p><MdEmail /><strong>Email:</strong> <a href="mailto:toshvik7@gmail.com">toshvik7@gmail.com</a></p>
            <p><strong>Business Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM</p>
            <p>"<strong>Your Health, Our Priority.</strong>" - Reach out for any queries!</p>
          </ContactInfo>

          <Form onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

            {submitted && <p className="success">Thank you for your message! (Logged to console)</p>}

            <button type="submit">Send Message</button>
          </Form>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default ContactPage;
