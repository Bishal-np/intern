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
            <section className="tab-section-2">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-12  col-sm-6 mb-4 grid-card">
                            <div className="card p-3">
                                <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href="" className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href="" className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="card p-3">
                                <div className="image">
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1744441026171-838505274.jpg&w=256&q=75" alt="" />
                                </div>
                                <div className="card-details">
                                    <h2 className="card-heading">Digital media officer</h2>
                                    <p className="card-sub">cn brothers international pvt.ltd</p>
                                    <p className="card-sub-sub">C.N. Brothers International Pvt. Ltd., a B2B company..</p>
                                    <div className="card-buttons">
                                        <a href=""><i class="bi bi-clock"></i> 7 Days Left</a>
                                        <a href=""><i class="bi bi-geo-alt-fill"></i> Kathmandu</a>
                                        <a href=""><i class="bi bi-backpack4"></i> Full Time</a>
                                    </div>
                                    <a href=""  className='apply-now'>Apply Now <i class="bi bi-arrow-right"></i> </a>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Internship
