import { Link, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Login from './Login/Login';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <p>ebooks</p>
                <nav>
                    <label htmlFor="burger"><i className="fa-solid fa-bars"></i></label>
                    <input type="checkbox" name="burger" id="burger" />
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        {/* <li><Link to="/Login">Login</Link></li> */}
                        <li><a rel="noreferrer" target="_blank" href="https://vincentreddy25.github.io/portfolio/">Portfolio</a></li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
            </Routes>

        </>
    );
}
