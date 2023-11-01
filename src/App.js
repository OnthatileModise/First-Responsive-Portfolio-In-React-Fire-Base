import './App.css';
import SectionHome from "./Sections/SectionHeader";
import AboutSection from "./Sections/AboutSection";
import ServicesSection from "./Sections/ServicesSection";
import SkillsSection from "./Sections/SkillsSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactSection from "./Sections/ContactSection";
import FooterSection from "./Sections/FooterSection";
import ChatBotComponent from "./ChatBot/ChatBot";
import React from "react";
import DrawerComponent from "./Drawer/DrawerComponent";

function App() {
  return (
      <>
          <div className="scroll-up-btn">
              <i className="fas fa-angle-up"></i>
          </div>
          <nav className="navbar">
              <div className="max-width">
                  <div className="logo"><a href="#home">Ont<span>hati</span>le
                      Mo<span>dis</span>e's<span> Por</span>tfo<span>lio</span></a></div>
                  <ul className="menu">
                      <li><a href="#home" className="menu-btn">Home</a></li>
                      <li><a href="#about" className="menu-btn">About</a></li>
                      <li><a href="#services" className="menu-btn">Services</a></li>
                      <li><a href="#skills" className="menu-btn">Skills</a></li>
                      <li><a href="#projects" className="menu-btn">Projects</a></li>
                      <li><a href="#contact" className="menu-btn">Contact</a></li>
                  </ul>
                  <div className="menu-btn">
                      <i className="fas fa-bars"></i>
                      <DrawerComponent/>
                  </div>
              </div>
          </nav>
          <SectionHome id ="home" className = "home"/>
          <AboutSection id ="about" className = "about"/>
          <ServicesSection id ="services" className = "services"/>
          <SkillsSection id ="skills" className = "skills"/>
          <ProjectsSection id ="projects" className = "projects"/>
          <ContactSection id ="contact" className = "contact"/>
          <FooterSection/>
          <ChatBotComponent />
      </>
  );
}

export default App;
