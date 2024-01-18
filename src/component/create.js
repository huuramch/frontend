import React, {useEffect, useState} from "react";
import axios from "axios";

const Create = () => {
    const [title, setTitle] = useState('')
    const [fact, setFact] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [userId, setUserId] = useState('')

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId')
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeInput = (e) => {
        setFact(e.target.value);
    };

    const handleCreateFact = async () => {
        try {
            const res = await axios.post('https://quizapp-0hs0.onrender.com/facts', {
                userID: userId,
                title: title,
                fact: fact
            });
            console.log('Fact created', res.data.id);
            setShowForm(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    return (
        <div>
      <button onClick={toggleForm}>Toggle Form</button>
      {showForm && (
        <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
            />
            <br />
          <label htmlFor="fact">Fact:</label>
          <textarea
            type="text"
            id="fact"
            value={fact}
            onChange={handleChangeInput}
          />
          <br />
          <button onClick={handleCreateFact}>Create Fact</button>
        </div>
      )}
    </div>
    )
}
export default Create;