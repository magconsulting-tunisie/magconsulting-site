import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    email: '',
    phone: '',
    description: ''
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init('wjCcYneZbeDSTIi4N'); // Replace with your EmailJS Public Key (e.g., user_XXXXXXXXXXXXXX)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const result = await emailjs.send(
        'service_egw8i32', // Your Service ID
        'template_ayhwe48', // Your Template ID (corrected)
        formData,
        'wjCcYneZbeDSTIi4N'// Replace with your EmailJS Public Key (e.g., user_XXXXXXXXXXXXXX)
      );

      console.log('Email sent:', result.text);
      setStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        email: '',
        phone: '',
        description: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contactez-Nous</h1>
          <p>
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets. 
            Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="section-content">
          <h2 className="section-title">Envoyez-nous un message</h2>
          <p className="section-text">
            Partagez vos besoins et nous vous répondrons dans les plus brefs délais.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre prénom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre nom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Pays</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre pays"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Ville</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre ville"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Entrez votre numéro"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet ou vos besoins"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-button">
              Envoyer
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="section-content">
          <h2 className="section-title">Nos Coordonnées</h2>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <FaEnvelope className="info-icon" />
              <p>Email: <a href="mailto:magconsulting17@gmail.com">magconsulting17@gmail.com</a></p>
            </div>
            <div className="contact-info-item">
              <FaPhone className="info-icon" />
              <p>Bureau: <a href="tel:+216 96 111 262"> (+216) 74431511</a></p>
              <p>Mobile: <a href="tel:+216 96 111 262">(+216) 99727827</a></p>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Avenue 5 aôut - Résidence Youssef - 3002 Sfax Tunisie</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Contact;