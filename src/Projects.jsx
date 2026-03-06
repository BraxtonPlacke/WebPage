import { Link } from 'react-router-dom';
import './App.css';

function Projects() {

    return (
        <> 
            <div className="center-wrapper">
                <Link to="/flagquiz">
            <div className = "card">
                    <p>Flag Quiz</p> 
                    </div>
                </Link>
        </div>
        </>
    )
}

export default Projects
