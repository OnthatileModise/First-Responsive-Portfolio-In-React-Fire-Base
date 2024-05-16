import './App.css';
import 'animate.css';
import {SectionHome} from "./Sections/SectionHeader";
import AboutSection from "./Sections/AboutSection";
import ServicesSection from "./Sections/ServicesSection";
import SkillsSection from "./Sections/SkillsSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactSection from "./Sections/ContactSection";
import FooterSection from "./Sections/FooterSection";
import ChatBotComponent from "./ChatBot/ChatBot";
import React, {useEffect, useState} from "react";
import DrawerComponent from "./Drawer/DrawerComponent";
import handleViewport from 'react-in-viewport';

const App = () => {
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
                      {/*<DrawerComponent/>*/}
                  </div>
              </div>
          </nav>
          <ViewPortSectionHomeBlock onEnterViewport={() => {return (<SectionHomeBlock/>)}} onLeaveViewport={() => {return (<SectionHomeBlock/>)}}/>
          <br/>
          <br/>
          <ViewPortSectionAboutBlock onEnterViewport={() => {return (<SectionAboutBlock/>)}} onLeaveViewport={() => {return(<SectionAboutBlock/>)}}/>
          <br/>
          <br/>
          <ViewportSectionServicesBlock onEnterViewport={() => {return(<SectionServicesBlock/>)}} onLeaveViewport={() => {return(<SectionServicesBlock/>)}} />
          <br/>
          <br/>
          <ViewPortSectionSkillsBlock onEnterViewport={() => {return (<SectionSkillsBlock/>)}} onLeaveViewport={() => {return (<SectionSkillsBlock/>)}} />
          <br/>
          <br/>
          <ProjectsSection id ="projects" className = "projects"/>
          <br/>
          <br/>
          <ViewPortSectionContactBlock onEnterViewport={() => {return (<SectionContactBlock/>)}}  onLeaveViewport={() => {return (<SectionContactBlock/>)}}/>
          <FooterSection/>
          <ChatBotComponent />
      </>
  );
}

const SectionHomeBlock = (props) => {
    const {forwardedRef} = props;
    const [key , setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return(
        <>
            <div ref={forwardedRef}>
                <div key={key}>
                    <SectionHome forwardRef={forwardedRef} id ="home" className = "home" key={key}/>
                </div>
            </div>
        </>
    )
}

const SectionAboutBlock = (props) => {
    const {forwardedRef} = props;
    const [key , setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return(
        <>
            <div ref={forwardedRef}>
                    <div key={key}>
                        <AboutSection forwardRef={forwardedRef} id ="about" className = "about" key={key}/>
                    </div>
            </div>
        </>
    )
}

const SectionServicesBlock = (props) => {
    const {forwardedRef} = props;
    const [key , setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return(
        <>
            <div ref={forwardedRef}>
                <div key={key}>
                    <ServicesSection forwardRef={forwardedRef} id ="services" className = "services" key={key}/>
                </div>
            </div>
        </>
    )
}

const SectionSkillsBlock = (props) => {
    const {forwardedRef} = props;
    const [key , setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return(
        <>
            <div ref={forwardedRef}>
                <div key={key}>
                    <SkillsSection forwardRef={forwardedRef} id ="skills" className = "skills" key={key}/>
                </div>
            </div>
        </>
    )
}

const SectionContactBlock = (props) =>{
    const {forwardedRef} = props;
    const [key , setKey] = useState(0);

    const incrementKey = () => {
        let min = Math.floor(100)
        let max = Math.floor(200)
        setKey(Math.floor(Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        incrementKey()
    }, [props])

    return(
        <>
            <div ref={forwardedRef}>
                <div key={key}>
                    <ContactSection id ="contact" className = "contact" forwardRef={forwardedRef} key={key}/>
                </div>
            </div>
        </>
    )
}


const ViewPortSectionHomeBlock = handleViewport(SectionHomeBlock, /** options: {}, config: {} **/);
const ViewPortSectionAboutBlock = handleViewport(SectionAboutBlock , /** options: {}, config: {} **/)
const ViewportSectionServicesBlock = handleViewport(SectionServicesBlock , /** options: {}, config: {} **/)
const ViewPortSectionSkillsBlock = handleViewport(SectionSkillsBlock, /** options: {}, config: {} **/)
const ViewPortSectionContactBlock = handleViewport(SectionContactBlock , /** options: {}, config: {} **/ )

export default App;
