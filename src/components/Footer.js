import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="newsletter">
                    <p className="heading"><i className="fas fa-paper-plane"></i> Newsletter</p>
                    <p className="newsletter-description">Are you a software developer? Sign up and You'll also receive information on the latest in Node.js, Vue.js and JavaScript</p>
                </div>

                <div className="form">
                    <input type="text" placeholder="Your Name"></input> <br/>
                    <input type="text" placeholder ="Your Email Address"></input><br/>
                    <button>Join Now!</button>

                </div>
            </div>

            <div className="footer-bottom"> 
                <p>Copyright 2021 All Rights Reserved</p>
                
            </div>
        </div>
    )
}

export default Footer;