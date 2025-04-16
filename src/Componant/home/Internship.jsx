import React from 'react'

function Internship() {
    return (
        <>
            <section className='intern-ship'>
                <div className="container">
                    <div className="content py-5">
                        <div className="right-content">
                            <h1 className="content-heading">Get your dream Internship now</h1>
                            <p className="content-subheading">Search your career opportunity through the available positions</p>
                            <div className="tab-buttons">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button className="nav-link active bg-danger text-light" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Featured Internship</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Nearest</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Newest</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >Oldest</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="left-content"><a href="">Browse all Intenships <i className="bi bi-chevron-right"></i></a></div>
                    </div>
                </div>
            </section >
            <section className='tab-section'>
                <div className="container">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <h2 className="tab-heading">How can we help</h2>
                            <p className="tab-sub-heading">Making your talent search easy</p>
                         
                                <div className=" d-flex tab-row">
                                    <div className="col-lg-4  tab-col">
                                        <div className="card">
                                        <img src="https://internsathi.com/posting.svg" alt="" />
                                        <div className="card-items">
                                        <h2>Free Internship Posting</h2>
                                        <p>Post an Internship of your open vacancies absolutely for free.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4  tab-col">
                                        <div className="card">
                                        <img src="https://internsathi.com/posting.svg" alt="" />
                                        <div className="card-items">
                                        <h2>Free Internship Posting</h2>
                                        <p>Post an Internship of your open vacancies absolutely for free.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4  tab-col">
                                        <div className="card">
                                        <img src="https://internsathi.com/posting.svg" alt="" />
                                        <div className="card-items">
                                        <h2>Free Internship Posting</h2>
                                        <p>Post an Internship of your open vacancies absolutely for free.</p>
                                        </div>
                                    </div>
                                    </div>
                                    

                                </div>
                           
                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
                        <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Internship
