import me from "../photos/me-lipa.jpeg";

const AboutMe = () => {
    //create info paragraph
    // make background animation into ripple effect
    // make flex direction is column when screen small and width is 80%
return(
    <>
    
    <div className="section-about">
        <div className="about-me-background"></div>
        <div className="position flex">
            <div className="halfsection">
                <img className="me-photo" src={me} alt="Natasha crouched with her dog (Lipa)"/>
            </div>
            <div className="halfsection description">
                <div className="capital">ABOUT ME</div>
                <div className="profile-bio">Hi there! I’m Natasha Moses, a former Rehab Assistant turned Full Stack Web Developer living in beautiful BC. I’m a lifelong learner and lover of all things creative. I spend my free time exploring nature, doodling, and crafting jewelry with my trusty pup (Lipa) at my side. Let's collaborate and create something awesome!</div>
            </div>
        </div>
    </div>
        
    </>
);
};

export default AboutMe;