import { Link } from 'react-router-dom';
import './App.css';

function Projects() {

    return (
        <>
            <div className="center-wrapper">
                <h1>Country Quiz REST API</h1>
                <Link to="/flagquiz">

                    <div className="card">
                        <div className="card-wrapper">
                            <img
                                src={`public/FlagQuiz.png`}

                            />
                            <p>A REST API built with ASP.NET Core that serves country and flag data to a React frontend,
                                powering an interactive flag guessing quiz.
                                Data is pulled from a SQL Server database hosted on Azure.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Projects
