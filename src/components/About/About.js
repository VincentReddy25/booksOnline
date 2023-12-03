import bulb from '../../assets/images/books_bg.png';

export default function About () {
    return (
        <>
            <section className="about">
                <header>"Knowledge is power"</header>
                <div className="container">
                    <div className="about_box">
                        <p><span>"Discover</span> what makes Ebooks unique. From our carefully curated selection of ebooks to user-friendly features, explore how we stand out in the digital realm, providing an unparalleled reading experience for every visitor."</p>
                    </div>

                    <div className="about_box_dull"></div>
                    <div className="about_box_dull">
                        <img src={bulb} alt="" />
                    </div>

                    <div className="about_box">
                        <p><span>"As</span> the world embraces digital storytelling, ebooks not only redefine the reading experience but also provide accessibility, affordability, and instant gratification for book enthusiasts worldwide.</p>
                    </div>

                    <div className="about_box_dull"></div>
                    <div className="about_box_dull"></div>

                    <div className="about_box">
                        <p><span>“Ebooks</span> revolutionise the way we access and enjoy literature, offering a portable and versatile digital format for books.”</p>
                    </div>

                    <div className="about_box_dull"></div>
                    <div className="about_box_dull"></div>

                    <div className="about_box">
                        <p><span>“With</span> the convenience of e-readers and mobile devices, readers can carry entire libraries in their pockets, customise their reading experience, and explore a vast array of genres at their fingertips.”</p>
                    </div>
                    <div className="about_box_dull"></div>
                </div>
            </section>
        </>
    )
}