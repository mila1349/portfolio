import React from 'react'
import Navbar from './Navbar'
import './Skills.css'

function Skills() {
    return (
        <div className="skills">
            <Navbar
                no="02"
                name="Skills"
            />

            <div className="skill-container">
                <div className="skill-box">
                    <div className="logo-skill">
                        <img src="https://img.icons8.com/ios/50/000000/web.png"/>
                    </div>
                    <h3>Web App Development</h3>
                    <div className="skill">
                        <p>Speciality in front end web application</p>
                        <p>Technologies:</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaSript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>SASS</li>
                            
                        </ul>   
                    </div>
                </div>

                <div className="skill-box">
                    <div className="logo-skill">
                        <img src="https://img.icons8.com/ios/50/000000/design--v1.png"/>
                    </div>
                    <h3>UI/UX Design</h3>
                    <div className="skill">
                        <p>Creating mockups and Workflow for mobile and web applications for front end pages</p>
                        <p>Technologies and Software:</p>
                        <ul>
                            <li>Figma</li>
                            <li>Sketch</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Xd</li>
                        </ul>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="logo-skill">
                        <img src="https://img.icons8.com/ios/50/000000/ios-development.png"/>
                    </div>
                    <h3>Mobile Development</h3>
                    <div className="skill">
                        <p>Technologies:</p>
                        <ul>
                            <li>Java</li>
                        </ul>
                    </div>  

                </div>

                <div className="skill-box">
                    <div className="logo-skill">
                        <img src="https://img.icons8.com/ios/50/000000/database.png"/>
                    </div>
                    <h3>Other Computer Science-Related Skills</h3>
                    <div className="skill">
                        <p>Database Management:</p>
                        <ul>
                            <li>Mysql</li>
                            <li>MongoDB</li>
                        </ul>
                        <p>Data Analytics and Visualization:</p>
                        <ul>
                            <li>Ms.Excel</li>
                            <li>Google Charts</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills 
