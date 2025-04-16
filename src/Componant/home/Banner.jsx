import React from 'react'
import "../../scss/pages/home.scss"

function Banner() {
    return (
        <>
            <section className="banner-section">
                <div className="container banner-container ">
                    <h1 className="banner-heading">Join the most popular internship <br /> and companies.</h1>
                    <p className="banner-sub-heading">We've helped over 2,500 freshers to get into the most popular internships.</p>
                    <form action="" className='form'>
                        <button className="all">All Opportunities <i class="bi bi-chevron-down"></i></button>
                        <input type="text" id='text' name='text' placeholder='Enter the title, keywords and phrse' className='text' />
                        <button className="search-button"><i class="bi bi-search"></i></button>
                    </form>
                    <div className="popular-search">
                        <p className='heading'>Popular searches:</p>
                        <ul className='search-items'>
                            <li><a href="">Business Development</a></li>
                            <li> <a href="">UI/UX Design</a></li>
                            <li><a href="">Front End</a></li>
                            <li><a href="">Back End</a></li>
                        </ul>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Banner
