import React from 'react'
import "../../scss/pages/home.scss"

function Beforefooter() {
    return (
        <>
            <secrtion className="before-footer">
                <div className="container">
                    <div className="flex-item ">
                        <div className="right-items">
                            <h2 className="b-heading">Download Our Mobile App.</h2>
                            <p className="s-heading">Build a Perfect Resume & Apply Internship.</p>
                            <div className="play-btn">
                                <div className="btn">
                                    <div className="play-icon">
                                        <i class="bi bi-google-play"></i>
                                    </div>
                                    <div className="btn-details">
                                        <p className="ft">GET IT ON</p>
                                        <p className="st">Google Play</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-item">
                            <div className="image"><img src="https://internsathi.com/mobile-app.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </secrtion>

        </>
    )
}

export default Beforefooter
