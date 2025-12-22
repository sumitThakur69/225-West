"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import CircleBtn from "@/ui-kit/CircleBtn";
import AreaOfInterestDropdown from "@/components/common/EventTypeDropdown";
import { EVENT_MESSAGES, SOLUTION_MESSAGES } from "@/constants/eventTypes";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  eventType: string;
  message: string;
}

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    eventType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEventTypeChange = (value: string): void => {
    // Check if the value is in EVENT_MESSAGES or SOLUTION_MESSAGES
    const message = EVENT_MESSAGES[value] ?? SOLUTION_MESSAGES[value] ?? "";
    
    setFormData((prev) => ({
      ...prev,
      eventType: value,
      message: message,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage(result.message || "Thanks for your message!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          eventType: "",
        });

        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.message;

  return (
    <section id="contact" className="py-24 bg-(--west-bg-2)">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          <div className="space-y-6">
            <CircleBtn text="Contact us" />

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-tight">
              Grow with us
            </h1>

            <p className="text-xl md:text-2xl text-(--west-bg-secondary)/70">
              Don't miss out on the latest news, events, and resources to help
              your business blossom!
            </p>
          </div>

          <div className="space-y-6">
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

            <AreaOfInterestDropdown
              value={formData.eventType}
              onChange={handleEventTypeChange}
              disabled={isSubmitting}
              label="Area of interest *"
              showLabel={true}
            />

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

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !isFormValid}
              className="btn-submit"
            >
              {isSubmitting ? (
                <span className="animate-pulse">SENDING...</span>
              ) : (
                "SEND MESSAGE"
              )}
            </button>

            {submitMessage && (
              <div className="text-center text-lg font-medium p-3 rounded-4xl bg-green-100 text-green-800">
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