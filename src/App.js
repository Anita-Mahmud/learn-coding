import './style.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import React, {useState} from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="container">
      <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"> </span>
        </label>
      </div>
      <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
    </div>
    <div>
    </div>
    <RouterProvider router={router}></RouterProvider>
  </div>
   
   
  );
}

export default App;
