import React from 'react';
import "./banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="content-element">Welcome</h1>
                <p className="content-element">Learn Vue & how to code!</p>
                <button className="content-element">
                    <i className="fab fa-vuejs"></i>
                    View Courses
                </button>

                <i className="fab fa-youtube big-img"></i>
                <div className="small-img-container">

                    
                    <i className="fab fa-youtube small-img"></i>
                    <i className="fab fa-youtube small-img"></i>
                    <i className="fab fa-youtube small-img"></i>

                </div>






            </div>

        </div>
    )
}

export default Banner;