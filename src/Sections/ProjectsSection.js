import mrsPatBakery from "../images/mrspatsbaker.png"
import oca from "../images/oca.png"
import git from "../images/git.png"
import a from "../images/A+.png"
import n from "../images/N+.png"
import { Carousel } from 'react-responsive-carousel';


export default function ProjectsSection() {
    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Projects and Certifications</h2>
                <div className="carousel owl-carousel">
                    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
                        <div className="card">
                            <div className="box">
                                <img src={mrsPatBakery} alt=""/>
                                <div className="text">Mrs Pat Bakery</div>
                                <p>Class Project in which i was responsible for the Data Access Layer.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={n} alt=""/>
                                <div className="text">N+ Certification</div>
                                <p>Certificate in Networking from CompTIA.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={a} alt=""/>
                                <div className="text">A+ Certification</div>
                                <p>Certificate in A+ Core1 and Core2 from CompTIA</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={oca} alt=""/>
                                <div className="text">Java SE8 Programmer |</div>
                                <p>An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of
                                    object-oriented concepts, the Java programming language and general knowledge of
                                    Java platforms and technologies</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={git} alt=""/>
                                <a href="https://github.com/OnthatileModise/">
                                    <div className="text">Git Repository</div>
                                </a>
                                <p>Take a look at all the projects i have embarked on so far!</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
