
import ReactTyped from "react-typed";
import React from "react";

export const SectionHome = () => {
    // Home  Section start
    return <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Onthatile Modise</div>
                <div className="text-3">And I'm a <ReactTyped strings={["Software Engineer","Web Developer", "IT Systems Specialist"]} typeSpeed={180} loop/></div>
                <a href="https://www.linkedin.com/in/onthatile-modise-02bba618b/">Hire me</a>
            </div>
        </div>
    </section>;
}
