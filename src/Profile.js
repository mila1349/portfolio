import React from 'react'
import Navbar from './Navbar'
import './Profile.css'
import profile from './image/profile.jpg'

function Profile() {
    return (
        <div className="profile">
            <Navbar
                no="02"
                name="Profile"
            />
            <div className="desc-container">
                <div className="photo">
                    <img src={profile} alt="" />
                </div>
                <div className="desc">
                    <h3>About Me</h3>
                    <img src={profile} alt="" />
                    <p>
                        My name is Inne Kamila, i'm freelance Full Stack Web Developer and UI/UX Designer based in Indonesia, 
                        I'm student of Computer Science of University Computer Indonesia, learned large range 
                        of computer science related knowledge with main interest in software development project.</p><p>
                        I also skilled in graphic design and layouting in general since it helps in designing application.
                        Hardworking, fully motivated, strong attention to detail, innovate, and eager to learn and cooperate 
                        are my best personal qualities.</p><p>
                        My hobbies include designing and reading articles on internet  
                    </p>
                    <div className="about">
                        <span>
                            <p>Name: Inne Kamila</p>
                            <p>Sex: Female</p>
                            <p>Age: 20 Years Old</p>
                            <p>Address: Bandung, Indonesia</p>
                        </span>
                        <span>
                            <p>Phone: +62 896 7152 1509</p>
                            <p>Email: innekamila@gmail.com</p>
                            <p>Nationality: Indonesian</p>
                            <p>Language(s): Bahasa Indonesia, English</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile 
