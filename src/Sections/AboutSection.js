import Thato2 from "../images/Thato2.jpg"
import ReactTyped from "react-typed";


export default function AboutSection (){
    return(
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={Thato2} alt=""/>
                    </div>
                    <div className="column right">
                        <div className="text">I'm Onthatile and I'm a <ReactTyped strings={["Developer","Web Designer", "IT Systems Speciaist"]} typeSpeed={180} loop/></div>
                        <p>An enthusiastic and knowledgeable young person, I am flexible, resourceful and willing to
                            take full ownership of user problems until they are fully resolved.</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}