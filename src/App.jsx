import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Footer from "./Footer";
import FlagQuiz from "./FlagPage";



function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/flagquiz" element={<FlagQuiz />} />

                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
