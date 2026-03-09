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
                                src={`/FlagQuiz.png`}

                            />
                            <p>A REST API built with ASP.NET Core that serves country and flag data to a React frontend,
                                powering an interactive flag guessing quiz.
                                Data is pulled from a SQL Server database hosted on Azure.
                                May take a minute to load because it is hosted on Azure's shared infrastructure.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Projects
