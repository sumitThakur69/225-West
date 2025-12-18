"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import CircleBtn from '@/ui-kit/CircleBtn';
import EventTypeDropdown from './common/EventTypeDropdown';
import { EVENT_MESSAGES } from '@/constants/eventTypes';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  eventType: string;
  message: string;
  subscribed: boolean;
}

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    eventType: '',
    subscribed: false
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEventTypeChange = (value: string): void => {
    setFormData(prev => ({
      ...prev,
      eventType: value,
      message: value ? EVENT_MESSAGES[value] ?? "" : "",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // API call 
    setTimeout(() => {
      setSubmitMessage('Thanks for your message!');
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        eventType: '',
        subscribed: false
      });
    }, 1000);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.message;

  return (
    <section id='contact' className="py-24  bg-(--west-bg-2)">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Side */}
            <div className="space-y-6">
            <CircleBtn text="Contact us" />
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-tight">
                Grow with us
            </h1>
            
            <p className="text-xl md:text-2xl" style={{ color: '#1F473E', opacity: 0.8 }}>
                Don't miss out on the latest news, events, and resources to help your business blossom!
            </p>
            </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* first Name or last Name */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="form-label">
                  First name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                  disabled={isSubmitting}
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="form-label">
                  Last name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                  disabled={isSubmitting}
                  className="form-input"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="form-label">
                Enter your email address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
                className="form-input"
              />
            </div>

            <EventTypeDropdown 
              value={formData.eventType}
              onChange={handleEventTypeChange}
              disabled={isSubmitting}
              label="Event type of interest *"
              showLabel={true}
            />

            {/* message */}
            <div>
              <label htmlFor="message" className="form-label">
                Your message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us what you're interested in..."
                required
                disabled={isSubmitting}
                rows={5}
                className="form-textarea"
              />
            </div>

            {/* checkbox */}
            <div className="flex items-start gap-3 py-2">
              <input
                type="checkbox"
                name="subscribed"
                id="subscribe-checkbox"
                checked={formData.subscribed}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="mt-1 w-5 h-5 cursor-pointer accent-(--west-bg-secondary) disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="subscribe-checkbox" className="text-base cursor-pointer text-(--west-bg-secondary) opacity-70 select-none">
                I would like to subscribe to receive news and promotional offers from The Seed Hub.
              </label>
            </div>

            {/* submit button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !isFormValid}
              className="btn-submit"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">SENDING...</span>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      fill="none" 
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
                    />
                  </svg>
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M4 10H16M16 10L10 4M16 10L10 16" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </>
              )}
            </button>

            {submitMessage && (
              <div className="text-center text-lg font-medium p-4 rounded-3xl bg-green-100 text-green-800 animate-fade-in">
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;