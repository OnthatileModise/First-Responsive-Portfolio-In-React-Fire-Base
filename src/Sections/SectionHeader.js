
import ReactTyped from "react-typed";

export default function SectionHome() {
    // Home  Section start
    return <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Onthatile Modise</div>
                <div className="text-3">And I'm a <ReactTyped strings={["Developer","Web Designer", "IT Systems Speciaist"]} typeSpeed={100} loop/></div>
                <a href="#">Hire me</a>
            </div>
        </div>
    </section>;
}