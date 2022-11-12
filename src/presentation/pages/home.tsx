export const Home = () => {
    return (
        <>
        <nav>
            <ul className="container row justify-centered">
                <li><a href="#biography">Biography</a></li>
                <li><a href="#performances">Performances</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <section className="julianne_welcome">
            <div className="hero_text">
                <h1>Julianne Reynolds</h1>
                <h3>Soprano</h3>
            </div>
        </section>
        <section className="julianne_biography container row" id="biography">
            <div className="split block-padding red">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At ultrices mi tempus imperdiet nulla malesuada.
                    Cursus vitae congue mauris rhoncus aenean vel. Vel risus
                    commodo viverra maecenas accumsan. Enim neque volutpat ac
                    tincidunt vitae semper quis lectus nulla. Semper risus in
                    hendrerit gravida rutrum quisque non tellus orci. Amet risus
                    nullam eget felis. Ornare suspendisse sed nisi lacus sed
                    viverra tellus in. Tortor at risus viverra adipiscing at in.
                    Gravida neque convallis a cras semper. Gravida rutrum
                    quisque non tellus orci ac auctor.
                </p>
            </div>
            <div
                className="split container row justify-centered align-items-center"
            >
                <h2 className="">Biography</h2>
            </div>
        </section>
        <section className="julianne_performances" id="performances">
            <h2 className="white performance_heading">Performances</h2>
            <div className="peformance_controls">
                <button id="next_arrow">next</button>
                <button id="prev_arrow">previous</button>
            </div>
            <div className="performance_blocks">
                <div className="performance_block">carousel</div>
                <div className="performance_block">master class</div>
                <div className="performance_block">master class</div>
                <div className="performance_block">master class</div>
                <div className="performance_block">master class</div>
                <div className="performance_block">master class</div>
                <div className="performance_block">master class</div>
            </div>
        </section>
        <section className="julianne_contact container row" id="contact">
            <div
                className="split container row justify-centered align-items-center"
            >
                <h2>Contact</h2>
            </div>
            <div className="split container column red block-padding">
                <div className="contact_block">
                    <h3>Reach Me</h3>
                    <p>
                        <a href="mailto:julianne@gmail.com"
                            >julianne@gmail.com</a
                        >
                    </p>
                </div>
                <div className="contact_block">
                    <h3>I'm free to teach</h3>
                    <p>$50 an hour. $25 a half hour.</p>
                </div>
                <div className="contact_block">
                    <h3>Representation</h3>
                    <p>Link to my resume...</p>
                </div>
            </div>
        </section>
        <footer className="blue"><h2 className="white">Julianne Reynolds</h2></footer>
        </>
    );
}