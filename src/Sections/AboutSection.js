import Thato2 from "../images/Thato2.jpg"
import ReactTyped from "react-typed";
import { Button } from "@mui/material";
import pdf from "../cv/Onthatile Modise CV.pdf"

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
                        <div className="text">I'm Onthatile and I'm a <ReactTyped strings={["Software Engineer","Web Developer", "IT Systems Speciaist"]} typeSpeed={180} loop/></div>
                        <p>An enthusiastic and knowledgeable young person, I am flexible, resourceful and willing to
                            take full ownership of user problems until they are fully resolved.</p>
                        <Button onClick={handleCVDownload}>Download CV</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}