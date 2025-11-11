import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleOnChange = (e) => setText(e.target.value);
  const clearText = () => setText('');

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  const extractEmail = (text) => {
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
    const matches = text.match(emailRegex);
    return matches ? matches : [];
  };

  const handleExtractEmail = () => {
    const emails = extractEmail(text);
    setText(emails.length > 0 ? emails.join(', ') : 'No email found');
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtractEmail}>
          Extract Email
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Content
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>
          {
            0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something above to preview it here'}</p>
      </div>
    </>
  );
}
