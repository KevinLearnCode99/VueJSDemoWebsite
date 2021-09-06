import React,{useState} from 'react'
import "./navbar.css"
import "../fontawesome-free-5.15.4-web/css/fontawesome.min.css"
function Navbar() {
    return (
        <div className="wrapper">
            <div className="navbar">
                <h1>Programming With Erik</h1>
                <div className="navigation-option">
                   <div className="option" id="home">
                        <p>Home</p>
                    </div>
                   <div  className="option" id="course">
                        <p>Courses</p>
                    </div>
                    <div  className="option" id="blog">
                        <p>Blog</p>
                    </div>
                    <div  className="option" id="course">
                        <p>Courses</p>
                    </div>
                    <div  className="option" id="youtube">
                        <p> <i className="fab fa-youtube"></i>  <span > Youtube </span></p>
                    </div>
                </div>

                <div className="logo">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-reddit"></i>
                </div>

            </div>
        </div>
    )
}

export default Navbar
