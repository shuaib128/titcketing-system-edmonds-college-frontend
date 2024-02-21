import "./App.css";
import { Routes, Route } from "react-router-dom";
// Component import
import ResponsiveAppBar from "./utilities/Header";

// Pages import
import HomeStudent from "./pages/homestudent";
import Hometutor from "./pages/hometutor";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar />

            <Routes>
                <Route path="/student" element={<HomeStudent Status="student" />} />
                <Route path="/tutor" element={<Hometutor Status="tutor" />} />
            </Routes>
        </div>
    );
}

export default App;
