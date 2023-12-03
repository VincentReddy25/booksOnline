import mrPenguin from '../../assets/images/book_bg.png'

export default function Hero() {
    return (
        <>
            <section className="hero">
                <img src={mrPenguin} alt="Mr. Penguin" />
                <div className="hero_box">
                    <p><span>"Welcome</span> to Ebooks, where a curated collection of ebooks meets a passion for storytelling. Explore new worlds, connect with authors, and join our community of avid readers."</p>
                    <a href="#books_container">Get Started</a>
                </div>
            </section>
        </>
    )
}