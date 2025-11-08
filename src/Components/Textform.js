import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleupClick = () => {
//     console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleonchange = (event) => {
//     console.log("On change");
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
