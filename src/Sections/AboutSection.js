import Thato2 from "../images/Thato2.jpg"
import { Button } from "@mui/material";
import pdf from "../cv/Onthatile Modise CV.pdf"
import { ReactTyped } from "react-typed";

export default function AboutSection (){

    const handleCVDownload = () => {
        const pdfUrl = pdf;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Onthatile Modise CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={Thato2} alt=""/>
                    </div>
                    <div className="column right">
                        <div className="text">I'm Onthatile and I'm a <ReactTyped strings={["Intermediate Software Engineer","Web Developer", "Backend Developer"]} typeSpeed={100} loop/></div>
                        <p>Results-driven and detail-oriented Software Engineer with
                            over 3+ years of professional experience in designing,
                            developing, and maintaining robust and scalable
                            applications. Strong background in Java, Spring Boot, React,
                            and Angular with a solid understanding of system
                            architecture, DevOps, and technical support. Highly
                            adaptable, self-motivated, and a proactive team player who
                            thrives in fast-paced, collaborative environments.</p>
                        <Button onClick={handleCVDownload}>Download CV</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}