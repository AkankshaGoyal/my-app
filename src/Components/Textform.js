import React, { useState } from 'react'

export default function Textform(props) {
       const [text,setText] = useState('Enter text here2');
    // //    text = "new Text";
    //    setText("new text");
       return (
       <div>
              <h1>{props.heading}</h1>
              <div className="mb-3">
              <textarea className="form-control" value = {text} id="myBox" rows="8"></textarea>
               </div>
              <button className="btn btn-primary">Convert to Uppercase</button>
       </div>
  )
}
