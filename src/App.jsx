import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./FlagPage";


function App() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;
