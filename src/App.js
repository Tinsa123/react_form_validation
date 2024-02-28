
import './App.css';
import Form from './Form';
import { createContext, useState } from 'react';
import Sample from './Sample.jsx';
import Intro from './components/Intro.jsx';

export const themeContext=createContext()
function App() {
 
  const[theme,setTheme]=useState("gray")
  return (
    <themeContext.Provider value={[theme,setTheme]}>
    <div className="App">
      {/* <Form/>
      <Sample/> */}
      <Intro/>
    </div>
    </themeContext.Provider>
  );
}

export default App;
