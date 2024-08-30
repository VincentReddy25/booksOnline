import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <>
            <div className="super_footer"> 
                <footer>
                    <nav>
                        <Link to="/Home">Home</Link>
                        <Link to="/Contact">Contact</Link>
                        {/* <Link to="/Login">Login</Link> */}
                        <a rel="noreferrer" target="_blank" href="https://vincentreddy25.github.io/slashmark-portfolio/">Portfolio</a>
                    </nav>
                </footer>
                <div className="copyrights">
                    <p>2023. Vincent Reddy</p>
                </div>
            </div>
        </>
    )
}