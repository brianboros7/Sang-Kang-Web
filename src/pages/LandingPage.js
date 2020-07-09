import React from 'react';

function LandingPage() {
    return (
        <div className="landing-container pt-5"> 
            <div className="landing-content"> 
                <div className="header-banner"> 
                    <img src="../assets/images/sang-work.jpg" alt="Sang at work with a hard hat" /> 
                </div>


                <div className="landing-title"> 
                    <h1 className="border bg-primary">
                        Hi, I'm Sang, I love to design structures and play my guitar!!
                    </h1>
                </div> 


                <div className="about pt-20"> 
                    <div className="about-hobbies bg-primary">
                        <div className="py-20">  
                            <h1>Education Video's</h1>
                        </div>
                    </div>


                    <div className="about-hobbies bg-primary">
                        <div className="py-20">
                            <h1>Volunteering</h1>
                        </div> 
                    </div>


                    <div className="about-hobbies bg-primary"> 
                        <div className="py-20">
                            <h1>Music</h1> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage; 