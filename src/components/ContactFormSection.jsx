import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ContactFormSection.css'; 

function ContactFormSection() {
  const [message, setMessage] = useState('');
  const maxCharacters = 500;
  const { t } = useTranslation();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: message,
    });
    alert(t('contact_form.alert_message'));
  
    e.target.reset();
    setMessage('');
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>{t('contact_form.title')}</h2>
        <p className="contact-subheading">
          {t('contact_form.subheading')}
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact_form.name_label')}</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('contact_form.email_label')}</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">{t('contact_form.phone_label')}</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group message-group">
            <label htmlFor="message">{t('contact_form.message_label')}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              maxLength={maxCharacters}
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <div className="message-info">
              
              <span className="edit-icon">📝</span>
              <span>{message.length}/{maxCharacters}</span>
            </div>
          </div>

          <button type="submit" className="send-message-button">
            {t('contact_form.send_button')}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;