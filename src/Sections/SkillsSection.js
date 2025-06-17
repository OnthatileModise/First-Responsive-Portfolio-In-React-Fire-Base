import { Button } from "@mui/material";
import React, { useState } from "react";

const ReadMore = ({ children }) => { 
    const text = children; 
    const [isReadMore, setIsReadMore] = useState(true); 
    const toggleReadMore = () => { 
      setIsReadMore(!isReadMore); 
    }; 
    return ( 
      <p className="text"> 
        {isReadMore ? text.slice(0, 10) : text}
        <br/>
            <div className="skills-content">
                <div className="column left"> 
                    <Button onClick={toggleReadMore}> 
                    {isReadMore ? "read more" : " show less"} 
                    </Button> 
                </div>
            </div>
      </p> 
    ); 
  }; 

export default function SkillsSection (){
    return(
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React JS.</span>
                                <span>80%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>80%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Angular</span>
                                <span>60%</span>
                            </div>
                            <div className="line aj"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Thymleaf</span>
                                <span>60%</span>
                            </div>
                            <div className="line tl"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Spring boot</span>
                                <span>90%</span>
                            </div>
                            <div className="line sb"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Java</span>
                                <span>80%</span>
                            </div>
                            <div className="line java"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>SQL</span>
                                <span>70%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                    </div>
                </div>
                <div className="skills-content" style={{marginTop : '35px'}}>
                    <div className="column left">
                        <h2 className="title">Technical Skills (3+ years’ experience)</h2>
                        <p>
                            <ReadMore>
                                <div className="header-container">
                                    <h1><ul>Backend Development</ul></h1>
                                    <div className="underline"></div>
                                </div>
                                • Advanced proficiency in Java SE 8 & 17 & 19, with a thorough understanding of Java frameworks, including Spring Boot, Spring Security, Oauth2, Keycloak, Spring MVC, and JavaFX <br/><br/>
                                • Expert in building RESTful APIs and microservices using Spring Boot <br/><br/>
                                • Strong command of Maven for dependency and build management <br/><br/>
                                • Solid experience with Node.js for backend scripting and API development <br/><br/>
                                <div className="header-container">
                                    <h1><ul>Frontend Development</ul></h1>
                                    <div className="underline"></div>
                                </div>
                                • Proficient in React.js, with experience in component-based architecture and hooks <br/><br/>
                                • Skilled in Angular (up to v17) and TypeScript, with knowledge of reactive forms and RxJS <br/><br/>
                                • Advanced knowledge of HTML5, CSS3, and responsive design principles <br/><br/>
                                • In-depth expertise in JavaScript (ES6+), including async patterns, DOM manipulation, and modern toolchains <br/><br/>
                                <div className="header-container">
                                    <h1><ul>Database & Data Handling</ul></h1>
                                    <div className="underline"></div>
                                </div>
                                • Proficient in SQL Server <br/><br/>
                                • Filtering, modifying, and aggregating data <br/><br/>
                                • Writing and optimizing stored procedures and functions <br/><br/>
                                • Comprehensive knowledge of SQL across relational databases <br/><br/>
                                • Strong knowledge of JPA (Java Persistence API) and Hibernate ORM for object-relational mapping, persistence contexts, and entity management <br/><br/>
                                • Extensive Knowledge of Hibernate <br/><br/>
                                <div className="header-container">
                                    <h1><ul>DevOps & Deployment</ul></h1>
                                    <div className="underline"></div>
                                </div>
                                • Proficient with Docker for containerization and isolated development environments <br/><br/>
                                • Hands-on experience with NGINX for reverse proxy configuration and static content serving <br/><br/>
                                • Familiar with CI/CD pipelines, version control (Git), and build automation tools <br/><br/>
                                <div className="header-container">
                                    <h1><ul>Soft Skills & Working Style</ul></h1>
                                    <div className="underline"></div>
                                </div>
                                • Strong ability to prioritize tasks in dynamic and fast-paced development environments <br/><br/>
                                • Adept at problem-solving, debugging, and collaborating in Agile/Scrum teams <br/><br/>
                            </ReadMore>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}