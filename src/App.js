import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
function App() {
   const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
   const toggleMode = ()=>{
     if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black';
     }
     else{
        setMode('light');
        document.body.style.backgroundColor = 'white';

     }
   }
  return (
      <>
      <Navbar title = "TextUtils"  mode = {mode} toggleMode = {toggleMode} />
      <div className = "container">
     <Textform heading = "Enter the text to analyze below" /> 
    </div>
      </>
  
  );
}

export default App;
