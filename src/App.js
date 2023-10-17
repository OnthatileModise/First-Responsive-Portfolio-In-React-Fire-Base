import './App.css';
import SectionHome from "./Sections/SectionHeader";
import AboutSection from "./Sections/AboutSection";
import ServicesSection from "./Sections/ServicesSection";
import SkillsSection from "./Sections/SkillsSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactSection from "./Sections/ContactSection";
import FooterSection from "./Sections/FooterSection";

function App() {
  return (
      <>
          <div className="scroll-up-btn">
              <i className="fas fa-angle-up"></i>
          </div>
          <nav className="navbar">
              <div className="max-width">
                  <div className="logo"><a href="#">Ont<span>hati</span>le
                      Mo<span>dis</span>e's<span> Por</span>tfo<span>lio</span></a></div>
                  <ul className="menu">
                      <li><a href="" className="menu-btn">Home</a></li>
                      <li><a href="" className="menu-btn">About</a></li>
                      <li><a href="" className="menu-btn">Services</a></li>
                      <li><a href="" className="menu-btn">Skills</a></li>
                      <li><a href="" className="menu-btn">Projects</a></li>
                      <li><a href="" className="menu-btn">Contact</a></li>
                  </ul>
                  <div className="menu-btn">
                      <i className="fas fa-bars"></i>
                  </div>
              </div>
          </nav>
          <SectionHome/>
          <AboutSection/>
          <ServicesSection/>
          <SkillsSection/>
          <ProjectsSection/>
          <ContactSection/>
          <FooterSection/>
      </>
  );
}

export default App;
