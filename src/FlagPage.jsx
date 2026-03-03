import { useEffect, useState } from "react";

function Flags() {
    const [quiz, setQuiz] = useState(null);
    const [selected, setSelected] = useState(null); // Track selected answer
    const [flagLoaded, setFlagLoaded] = useState(false);


    useEffect(() => {
        fetch("https://countryquizapi-hgaqbjd0gmekahd9.canadacentral-01.azurewebsites.net/api/flag/quiz")
            .then(response => response.json())
            .then(data => {
                setQuiz(data);
                setSelected(null);


            })
            .catch(error => {
                console.error("Error fetching quiz:", error);
            });
    }, []);

    const handleGuess = (option) => {
        setSelected(option.id);


        // Fetch next question after a short delay
        setTimeout(() => {
            fetch("https://countryquizapi-hgaqbjd0gmekahd9.canadacentral-01.azurewebsites.net/api/flag/quiz")
                .then(res => res.json())
                .then(data => {
                    setQuiz(data);
                    setSelected(null);
                    setFlagLoaded(false);


                });
        }, 750); //delay
    };

    if (!quiz) {
        return <p>Loading quiz...</p>;
    }

    return (
        <div className="center-wrapper">
            <div>
                <h1>Guess the Flag</h1>

                {/* Flag Image */}
                <div className={`quiz-content ${flagLoaded ? "visible" : "hidden"}`}>

                    <div className="flag-frame">
                        <img
                            src={`https://flagsvgs.blob.core.windows.net/flags/${quiz.correct.id.toLowerCase()}.svg`}
                            onLoad={() => setFlagLoaded(true)}
                        />
                    </div>


                    {/* Answer Buttons */}

                    <div className="buttons-container">
                        {quiz.options.map(option => {
                            let className = "button";
                            if (selected) {
                                if (option.id === selected) {
                                    className += option.id === quiz.correct.id ? " correct" : " wrong";
                                } else if (option.id === quiz.correct.id) {
                                    className += " correct";
                                }
                                className += " disabled";
                            }

                            return (
                                <button
                                    key={option.id}
                                    className={className}
                                    onClick={() => handleGuess(option)}
                                >
                                    {option.countryName}
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Flags;