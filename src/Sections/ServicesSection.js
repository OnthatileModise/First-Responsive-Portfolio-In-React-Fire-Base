
export default function ServicesSection (){
    return(
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My services</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Web Design</div>
                            <p>•	HTML5 and CSS
                                •	Styling HTML5 and JavaScript
                                •	Advanced HTML5 and JavaScript
                                •	HTML5 APIs and Local Data Storage
                                •	More Advanced HTML5 and CSS3
                                •	Adaptive AI, Graphics, and Animation.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Systems Support</div>
                            <p>Diagnosis of desktop, application, networking and infrastructure issues. Experience of supporting a wide and varied client base. Troubleshooting PC’s, laptops and mobile devices. Providing 1st/2nd line support to users.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Apps Design</div>
                            <p>•	Developing Windows and Web Applications
                                •	Object-oriented Programming Fundamentals
                                •	Windows Store Applications and Databases
                                •	Design Principles and Data Manipulation
                                •	Creating, Optimizing, and Securing Databases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}