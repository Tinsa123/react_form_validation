
import './App.css';
import Form from './Form';
import { createContext, useState } from 'react';
import Sample from './Sample.jsx';
import Intro from './components/Intro.jsx';
import Sample1 from './components/Sample1.js';
import Counter from './components/Counter.jsx';

export const themeContext=createContext()
function App() {
 
  const[theme,setTheme]=useState("gray")
  return (
    <themeContext.Provider value={[theme,setTheme]}>
    <div className="App">
      {/* <Form/>
      <Sample/> */}
      {/* <Intro/> */}
      <Sample1 />
      <Counter initalCount={4}/>
    </div>
    </themeContext.Provider>
  );
}

export default App;
