
import './App.css';
import { ImGithub } from "react-icons/im";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";




function Home() {

    return (
        <>
            <div className="center-wrapper">

                <h1>Braxton's Links</h1>

                <div className="list">

                    <a href="https://github.com/BraxtonPlacke" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                        <ImGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/braxton-placke-290917306" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                        <FaLinkedin />
                    </a>
                    <a href="/2025 Resume.pdf" download>
                        <FaFileDownload />
                        <span className="label">Resume</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home
