import * as React from 'react';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  eventType?: string;
  message: string;
}

export const ContactFormEmail = ({
  firstName,
  lastName,
  email,
  eventType,
  message,
}: Props) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', background: '#f9fafb' }}>
    <h2 style={{ color: '#1F473E' }}>New Contact Submission</h2>

    <p><strong>Name:</strong> {firstName} {lastName}</p>
    <p>
      <strong>Email:</strong>{' '}
      <a href={`mailto:${email}`} style={{ color: '#1F473E' }}>
        {email}
      </a>
    </p>

    {eventType && (
      <p><strong>Interested In:</strong> {eventType}</p>
    )}

    <p><strong>Message:</strong></p>
    <pre style={{ background: '#fff', padding: '12px', whiteSpace: 'pre-wrap' }}>
      {message}
    </pre>

    <hr style={{ margin: '24px 0' }} />

    <p style={{ fontSize: '12px', color: '#6b7280' }}>
      This email was sent automatically from the contact form.
    </p>
  </div>
);
