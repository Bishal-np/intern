import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
     
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Dreamjobs() {
    return (
        <>
            <section className='intern-ship'>
                <div className="container">
                    <div className="content py-5">
                        <div className="right-content">
                            <h1 className="content-heading">Get your dream Job now</h1>
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
                        <div className="left-content"><a href="">Browse all Jobs <i className="bi bi-chevron-right"></i></a></div>
                    </div>
                </div>
            </section >
            <section className='dream-tab'>
                <div className="container">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <Carousel responsive={responsive}>
                                <div className='carousel-card'>
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75" alt="" />
                                    <div className="carausel-content">
                                        <h2>Mid-Level Django Developer</h2>
                                        <p className='white'>TALENTSATHI</p>
                                        <p className="black">Our client is looking for...</p>
                                        <div className="carousel-buttons d-flex gap-3">
                                            <button className="button"><i class="bi bi-clock"></i> 4 days left<a href=""></a></button>
                                            <button className="button"><a href=""><i class="bi bi-geo-alt"></i> kathmandu</a></button>
                                            <button className="button"><a href=""><i class="bi bi-backpack2-fill"></i> Full Time</a></button>
                                        </div>
                                        <button className="apply">Apply Now <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                                <div className='carousel-card'>
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75" alt="" />
                                    <div className="carausel-content">
                                        <h2>Mid-Level Django Developer</h2>
                                        <p className='white'>TALENTSATHI</p>
                                        <p className="black">Our client is looking for...</p>
                                        <div className="carousel-buttons d-flex gap-3">
                                            <button className="button"><i class="bi bi-clock"></i> 4 days left<a href=""></a></button>
                                            <button className="button"><a href=""><i class="bi bi-geo-alt"></i> kathmandu</a></button>
                                            <button className="button"><a href=""><i class="bi bi-backpack2-fill"></i> Full Time</a></button>
                                        </div>
                                        <button className="apply">Apply Now <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                                <div className='carousel-card'>
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75" alt="" />
                                    <div className="carausel-content">
                                        <h2>Mid-Level Django Developer</h2>
                                        <p className='white'>TALENTSATHI</p>
                                        <p className="black">Our client is looking for...</p>
                                        <div className="carousel-buttons d-flex gap-3">
                                            <button className="button"><i class="bi bi-clock"></i> 4 days left<a href=""></a></button>
                                            <button className="button"><a href=""><i class="bi bi-geo-alt"></i> kathmandu</a></button>
                                            <button className="button"><a href=""><i class="bi bi-backpack2-fill"></i> Full Time</a></button>
                                        </div>
                                        <button className="apply">Apply Now <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                                <div className='carousel-card'>
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75" alt="" />
                                    <div className="carausel-content">
                                        <h2>Mid-Level Django Developer</h2>
                                        <p className='white'>TALENTSATHI</p>
                                        <p className="black">Our client is looking for...</p>
                                        <div className="carousel-buttons d-flex gap-3">
                                            <button className="button"><i class="bi bi-clock"></i> 4 days left<a href=""></a></button>
                                            <button className="button"><a href=""><i class="bi bi-geo-alt"></i> kathmandu</a></button>
                                            <button className="button"><a href=""><i class="bi bi-backpack2-fill"></i> Full Time</a></button>
                                        </div>
                                        <button className="apply">Apply Now <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                                <div className='carousel-card'>
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75" alt="" />
                                    <div className="carausel-content">
                                        <h2>Mid-Level Django Developer</h2>
                                        <p className='white'>TALENTSATHI</p>
                                        <p className="black">Our client is looking for...</p>
                                        <div className="carousel-buttons d-flex gap-3">
                                            <button className="button"><i class="bi bi-clock"></i> 4 days left<a href=""></a></button>
                                            <button className="button"><a href=""><i class="bi bi-geo-alt"></i> kathmandu</a></button>
                                            <button className="button"><a href=""><i class="bi bi-backpack2-fill"></i> Full Time</a></button>
                                        </div>
                                        <button className="apply">Apply Now <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                                <div className='carousel-card'>
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75" alt="" />
                                    <div className="carausel-content">
                                        <h2>Mid-Level Django Developer</h2>
                                        <p className='white'>TALENTSATHI</p>
                                        <p className="black">Our client is looking for...</p>
                                        <div className="carousel-buttons d-flex gap-3">
                                            <button className="button"><i class="bi bi-clock"></i> 4 days left<a href=""></a></button>
                                            <button className="button"><a href=""><i class="bi bi-geo-alt"></i> kathmandu</a></button>
                                            <button className="button"><a href=""><i class="bi bi-backpack2-fill"></i> Full Time</a></button>
                                        </div>
                                        <button className="apply">Apply Now <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                                <div className='carousel-card'>
                                    <img src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75" alt="" />
                                    <div className="carausel-content">
                                        <h2>Mid-Level Django Developer</h2>
                                        <p className='white'>TALENTSATHI</p>
                                        <p className="black">Our client is looking for...</p>
                                        <div className="carousel-buttons d-flex gap-3">
                                            <button className="button"><i class="bi bi-clock"></i> 4 days left<a href=""></a></button>
                                            <button className="button"><a href=""><i class="bi bi-geo-alt"></i> kathmandu</a></button>
                                            <button className="button"><a href=""><i class="bi bi-backpack2-fill"></i> Full Time</a></button>
                                        </div>
                                        <button className="apply">Apply Now <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </Carousel>

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

export default Dreamjobs
