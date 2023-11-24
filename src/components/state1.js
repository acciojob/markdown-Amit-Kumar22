// markdownEditor.js
import React, { useState, useEffect } from 'react';
import CSS from '../styles/App.css'

const state1 = () => {
  const [markdown, setMarkdown] = useState('');

  // Function to handle changes in the markdown editor
  const handlemarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
  }, [markdown]);

  return (
    <div className="loading">
      <div className="markdownarea">
        <textarea
          value={markdown}
          onChange={handlemarkdownChange}
        />
      </div>

      {/* markdown Output */}
      <div className="preview">
        <p><b>{markdown}</b></p>
      </div>
    </div>
  );
};

export default state1;
