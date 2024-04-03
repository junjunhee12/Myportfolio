import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Body from "./components/Body";
import AboutMe from "./components/AboutMe";
// import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Features from "./components/Educationcomponents/Features";

function Main(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Body />}/>
                        <Route path="about" element={<AboutMe />}/>
                        <Route path="features" element={<Features />}/>
                        <Route path="portfolio" element={<Portfolio />}/>
                        <Route path="contact" element={<Contact />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;