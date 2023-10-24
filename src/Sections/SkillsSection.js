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
                    <div className="column left">
                        <div className="text">My creative skills & experiences.</div>
                        <p>
                            <ReadMore>
                                • Object-oriented Programming Fundamentals <br/>
                                • Advanced HTML5 <br/>
                                • HTML5 Layout <br/>
                                • HTML5 Forms <br/>
                                • HTML5 and CSS3 <br/>
                                • HTML5 Layout with CSS3 <br/>
                                • HTML5 and Advanced CSS3 <br/>
                                • HTML5 and JavaScript <br/>
                                • HTML Graphics and Canvas <br/>
                                • Advanced Feature of JavaScript, CSS3 and HTML5 <br/>
                                • T-SQL Querying <br/>
                                • Spring boot APIs <br/>
                                • Encapsulation, Polymorphism, and Abstraction <br/>
                                • Interfaces, Lambda Expressions, Collections, and Generics <br/>
                                • Inheritance, Interfaces, Exceptions, and Deployment <br/>
                                • Date/Time API, I/O and File I/O (N/O.2), and Concurrency <br/>
                                • Concurrency, Parallelism, the JDBC API, and Localization<br/>
                                • Classes and Objects <br/>
                                • Methods, Encapsulation, and Conditionals <br/>
                                • Data Manipulation and Inheritance Interfaces, Exceptions, and Deployment<br/>
                            </ReadMore>
                        </p>
                    </div>
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
                                <span>60%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React JS.</span>
                                <span>60%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Spring boot</span>
                                <span>60%</span>
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
                                <span>Java</span>
                                <span>80%</span>
                            </div>
                            <div className="line java"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>MySQL</span>
                                <span>70%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}