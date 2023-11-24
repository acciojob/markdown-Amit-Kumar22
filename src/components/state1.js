// TextEditor.js
import React, { useState, useEffect } from 'react';
import CSS from '../styles/App.css'

const state1 = () => {
  const [Text, setText] = useState('');

  // Function to handle changes in the Text editor
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
  }, [Text]);

  return (
    <div className="loading">
      <div className="textarea">
        <textarea
          value={Text}
          onChange={handleTextChange}
        />
      </div>

      {/* Text Output */}
      <div className="preview">
        <h1>{Text}</h1>
      </div>
    </div>
  );
};

export default state1;
