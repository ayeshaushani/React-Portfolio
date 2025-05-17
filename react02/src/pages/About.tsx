import '../index.css'; // You'll need to create this CSS file

import profilePhoto from '../assets/mee.jpg'; // Update this path to your actual photo

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content-wrapper">
                    <div className="profile-photo-container">
                        <img
                            src={profilePhoto}
                            alt="S.A.A. Ushani"
                            className="profile-photo"
                        />
                        <div className="photo-frame"></div>
                    </div>

                    <div className="about-content">
                        <p className="about-text">
                            Hi! I'm <span className="highlight">S.A.A. Ushani</span>, an enthusiastic undergraduate at the Institute of Java and Software Engineering (IJSE), currently diving deep into the world of full-stack development. I'm passionate about crafting clean, user-friendly interfaces and bringing ideas to life through modern web technologies.
                        </p>
                        <p className="about-text">
                            With a growing interest in <span className="highlight">UI/UX design</span>, I enjoy designing intuitive user experiences while also building the logic behind them using tools like <span className="highlight">Spring Boot, HTML, CSS, JavaScript, and React</span>. I'm always eager to learn, experiment, and take on new challenges.
                        </p>
                        <p className="about-text">
                            I've already worked on exciting projects like a <span className="highlight">Travel Booking System</span> and a <span className="highlight">Train Ticket System</span>, and I'm just getting started. Whether it's front-end design or back-end logic, I'm all in!
                        </p>
                        <p className="about-text">
                            When I'm not coding, you might find me exploring design trends, experimenting with animations, or enjoying a bit of peaceful time.
                        </p>
                    </div>
                </div>

                <div className="skills-section">
                    <h3 className="skills-title">My Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-item">React</div>
                        <div className="skill-item">JavaScript</div>
                        <div className="skill-item">HTML/CSS</div>
                        <div className="skill-item">Spring Boot</div>
                        <div className="skill-item">UI/UX Design</div>
                        <div className="skill-item">Responsive Design</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;