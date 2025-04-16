import React from 'react'
import "../../scss/pages/home.scss"
import "../../../public/pic-1.webp"

function Subbanner() {
    return (
        <>
            <section className="sub-banner">
                <div className="container">
                    <div className="sub-banner-sub row">
                        <div className="col-lg-6 banner-card py-5">
                            <img src="public/pic-1.webp" alt="" />
                            <div className="sub-banner-items">
                                <h2 className="card-heading">For Candidate</h2>
                                <p className="card-sub-heading">
                                    Unlock endless opportunities and connect with
                                    top <br /> employers. Let your skills shine and land your <br /> dream job.
                                </p>
                                <button className="card-button"><a href="">Upload your CV</a></button>
                            </div>
                        </div>
                        <div className="col-lg-6 banner-card py-5">
                            <img src="public/pic-2.webp" alt="" />
                            <div className="sub-banner-items-1">
                                <h2 className="card-heading-1">For Employer or Company</h2>
                                <p className="card-sub-heading-1">
                                    Access a pool of skilled candidates and streamline <br /> your hiring process. Find the best talent for your <br /> company's success
                                </p>
                                <button className="card-button-1"><a href="">Start Hiring</a></button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Subbanner
