import React from 'react';
import "./body.css"



function Body() {

    return (
        <div className="slider">
            <span> <i className="fas fa-newspaper"></i>   <span id="blog-body">Blog</span>  </span>

            <div className="article-conatiner">
                <div className="article">
                    <div className="back">
                        <p>Read More</p>
                    </div>
                    <div className="front">
                        <div className="front-content">
                            <h1>Web Development</h1>
                            <p>What should you learn to be a web developer in 2020?</p>
                        </div>
                    </div>

                </div>
                <div className="article">
                    <div className="back">
                        <p>Read More</p>
                    </div>
                    <div className="front">
                        <div className="front-content">
                            <h1>Bootstrap Vue</h1>
                            <p>How do  you use Bootstrap with Vue?</p>
                        </div>
                    </div>

                </div>
                <div className="article">
                    <div className="back">
                        <p>Read More</p>
                    </div>
                    <div className="front">
                        <div className="front-content">
                            <h1>Vue.js Quasar</h1>
                            <p>Check out my latest tutorial on getting up with Quasar!</p>
                        </div>
                    </div>
                </div>





            </div>

            <button className="view-post-btn">View all posts</button>

            <div className="course-container">

                <p><i className="fab fa-vuejs"></i>  Courses</p>

                <div className="course-inf-container">

                    <div className="ad">
                        <div className="back-layer"></div>
                        <div className="front-layer">
                            <i className="fas fa-caret-right"></i>
                        </div>
                    </div>
                    <div className="course-inf">
                        <p className="course-name">Vue Fundamentals Course</p>
                        <p className="course-description">Learn the fundumentals of Vue if you’re looking to learn it from scratch. This is beginner friendly, including:</p>
                        <div className="course-inf-details">
                            <p><i className="fas fa-play-circle"></i> Introduction</p>
                            <p>4:00 mins</p>

                        </div>
                        <div className="course-inf-details">
                            <p><i className="fas fa-play-circle"></i> Installing Vue</p>
                            <p>6:15 mins</p>

                        </div>
                        <div className="course-inf-details">
                            <p><i className="fas fa-play-circle"></i> Setting up Vue Environment</p>
                            <p>2:15 mins</p>

                        </div>
                        <div className="course-inf-btn">
                            <button id="view">View Full Course</button>
                            <button id="sign-up">Sign Up</button>
                        </div>
                    </div>
                </div>
                
                
                <div className="course-inf-container">
                    <div className="ad">
                        <div className="back-layer"></div>
                        <div className="front-layer">
                            <i className="fas fa-caret-right"></i>
                        </div>
                    </div>
                    <div className="course-inf">
                        <p className="course-name">Vue Advanced/Intermediate Course</p>
                        <p className="course-description">Learn the fundumentals of Vue if you’re looking to learn it from scratch. This is beginner friendly, including:</p>
                        <div className="course-inf-details">
                            <p><i className="fas fa-play-circle"></i> Creating Functional Components</p>
                            

                        </div>
                        <div className="course-inf-details">
                            <p><i className="fas fa-play-circle"></i> Adding Styling Components</p>
                            

                        </div>
                        <div className="course-inf-details">
                            <p><i className="fas fa-play-circle"></i> Webpack Configuration</p>
                            

                        </div>
                        <div className="course-inf-btn">
                            <button id="view">View Full Course</button>
                            <button id="sign-up">Sign Up</button>
                        </div>
                    </div>


                    
                </div>
            </div>
            <button className="view-all-btn">View All Courses</button>

            <div className="clear"></div>
        </div>
    )

}
export default Body;
