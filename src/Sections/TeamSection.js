import { Button } from "@mui/material";
import React, { useState } from "react";
import aphiwe from "../images/aphiwe.jpg"
import noel from "../images/noel.jpg"
import matshidiso from "../images/matshidiso.jpg"

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

export default function TeamSection (){
    return(
        <section className="team" id="team">
            <div className="max-width">
                <h2 className="title">The Team</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <img src={aphiwe} alt={aphiwe} style={{width : '69%'}}/>
                            <div className="text">Aphiwe Dumeko</div>
                            <p>Marketing </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <img src={noel} alt={noel} style={{width : '101%'}}/>
                            <div className="text">Noel Ndinisa</div>
                            <p>Executive Director</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <img src={matshidiso} alt={matshidiso} style={{width : '101%'}}/>
                            <div className="text">Matshidiso Ndinisa</div>
                            <p>Production</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}