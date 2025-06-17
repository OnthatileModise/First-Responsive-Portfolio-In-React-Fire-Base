
export default function ServicesSection (){
    return(
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My services</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-hammer"></i>
                            <div className="text">Full Stack Web Development</div>
                            <p> • Build complete web applications using Spring Boot (backend) and React/Angular (frontend)<br/><br/>
                                • Develop responsive UIs with modern JavaScript frameworks and clean HTML/CSS <br/><br/>
                                • Create and document RESTful APIs for mobile/web client consumption <br/><br/>
                                • Implement authentication and authorization using Spring Security & OAuth2 <br/><br/>
                                • Optimize application performance and ensure scalability across layers <br/><br/>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Backend Development</div>
                            <p>
                                • Design robust microservices architecture with Spring Boot and JPA/Hibernate <br/><br/>
                                • Implement database schemas, stored procedures, and business logic <br/><br/>
                                • Perform data transformation and aggregation with SQL Server <br/><br/>
                                • Handle file processing, batch jobs, and scheduled tasks <br/><br/>
                                • Build secure services using best practices (JWT, role-based access) <br/><br/>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Frontend Development</div>
                            <p>
                                • Build modern, interactive SPAs using React.js or Angular <br/><br/>
                                • Integrate REST APIs securely and efficiently <br/><br/>
                                • Develop responsive, cross-browser-compatible UI <br/><br/>
                                • Use TypeScript for scalable and maintainable frontend code <br/><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}