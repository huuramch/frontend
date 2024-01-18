import React, { useState } from 'react';
import axios from 'axios';

const UpdateFactComponent = ({ factId }) => {
  const [formData, setFormData] = useState({
    title: '',
    fact: '',
  });
  const [showUpdateForm, setShowUpdateFrom] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://quizapp-0hs0.onrender.com/facts/${factId}`, formData);
      setShowUpdateFrom(false);
    } catch (error) {
      console.error('Error updating fact:', error);
    }
  };
  const handleButtonClick = () => {
    setShowUpdateFrom(true);
  }
  return (
    <div>
      {showUpdateForm ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Fact:
            <textarea
              name="fact"
              value={formData.fact}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Update Fact</button>
        </form>
      ) : (
        <button onClick={handleButtonClick}>Wanna Edit?</button>
      )}
    </div>
  );
};

export default UpdateFactComponent;