import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleupClick = () => {
//     console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
//     console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleonchange = (event) => {
//     console.log("On change");
    setText(event.target.value);
  };
  const cleartext = (event) => {
       let newText = "";
      setText(newText);
  };
  const extractEmail = (text)=>{
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
    const matches = text.match(emailRegex);
    if(matches){
       return matches;
    }
    else{
       return [];
    }
  }
  const handleExtractEmail = () => {
  const emails = extractEmail(text);
  if (emails.length > 0) {
    setText(emails.join(", "));  // convert array to string
  } else {
    setText("No email found");
  }
};
  return (
       <>
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
      <button className="btn btn-primary mx-3" onClick={handleupClick}>
        Convert to Uppercase
      </button>
       <button className="btn btn-primary mx-3" onClick={handleloClick}>
        Convert to lowercase
      </button>
       <button className="btn btn-primary mx-3" onClick={cleartext}>
        cleartext
      </button>
       <button className="btn btn-danger mx-3" onClick={handleExtractEmail}>
        Extract Email
      </button>
    </div>
    <div className='container my-3'>
       <h1>your text summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
  );
  
}
