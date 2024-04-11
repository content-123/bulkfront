// EmailForm.js

import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendEmail = async () => {
    try {
        
      const response = await axios.post('https://capstone-3-jcg9.onrender.com/send-bulk-email', {
        to,
        subject,
        body,
      });
      console.log(response.data);
      alert('Emails sent successfully');
    } catch (error) {
      console.error('Error sending email:', error.response.data.error);
      alert('Failed to send emails');
    }
  };

  return (
    <div>
      <h2>Bulk Email Sender</h2>
      <label>To:</label>
      <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      <br /><br/>
      <label>Subject:</label>
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <br /><br/>
      <label>Body:</label>
      <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
      <br /><br/>
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default EmailForm;
