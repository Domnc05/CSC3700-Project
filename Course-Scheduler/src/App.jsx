import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App(){
    const version = "0.1.0";
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutPage version={version} />} />
            </Routes>
        </>
    )
}

export default App