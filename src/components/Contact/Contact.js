import profile_pic from '../../assets/images/bg-pic.jpeg'

export default function Contact () {
    return (
        <>
            <section className="contact">
                <header>Get in Touch</header>
                <div className="container">
                    <img src={profile_pic} alt="profile pic" />
                    <p>Vincent Reddy. Thanugundla</p>
                    <p>Full Stack Developer | UI / UX Designer</p>
                    <div className="icons">
                        <a target="_blank" href="mailto:vincentreddy25@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/vincentreddy/"><i className="fa-brands fa-linkedin"></i></a>
                        <a target="_blank" href="https://codepen.io/collection/OLwrbr"><i className="fa-brands fa-codepen"></i></a>
                        <a target="_blank" href="https://github.com/VincentReddy25"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}