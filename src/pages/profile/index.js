import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label htmlFor="location">Location:</label>
      <textarea id="location" value={location} onChange={(e) => setLocation(e.target.value)}></textarea>

      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;