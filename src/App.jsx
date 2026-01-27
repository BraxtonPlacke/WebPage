import { useState } from 'react'
import './App.css'
import { ImGithub } from "react-icons/im";
import {FaLinkedin} from "react-icons/fa";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="list">
              <a href="https://github.com/BraxtonPlacke" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <ImGithub />
              </a>
              <a href="https://www.linkedin.com/in/braxton-placke-290917306" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <FaLinkedin />
              </a>
      </div>
    </>
  )
}

export default App
