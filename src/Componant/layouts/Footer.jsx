import React from 'react'
import "../../scss/layouts/footer.scss"
import Logo from "../../assets/logo.png"

function Footer() {
    const footerItem = [
        {
            heading: "About intensathi",
            item: "About us",
            item1: "Our Services",
            item2: "Our Blogs",
            item3: "Contact us",
        },
        {
            heading: "For Candidates",
            item: "Build your CV and profile",
            item1: "Internship/Jobs",
            item2: "Browse Events",
            item3: "",
        },
        {
            heading: "For Employers",
            item: "Become an Employer",
            item1: "Post New Internship",
            item2: "",
            item3: "",
        },
        {
            heading: "For Institutes",
            item: "Register as Institute",
            item1: "Organize an event",
            item2: "",
            item3: "",
        },
        {
            heading: "Helpful Resources",
            item: "Privacy Policy",
            item1: "Terms of use",
            item2: "FAQs",
            item3: "",
        },
    ];
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-flex gap-5">
                        <div class="row gy-3">
                            <div class="col-2">
                                <div className="left-details">
                                    <a href=""><img src={Logo} alt="" /></a>
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div className="right-details d-flex gap-5 align-items-center">
                                    {footerItem.map((footerItem, index) => (
                                        <div className="right-items-details" key={index}>
                                            <h2 className="footer-item-heading  text-light">{footerItem.heading}</h2>
                                            <a href="" className='footer-nav'>{footerItem.item}</a>
                                            <a href="" className='footer-nav'>{footerItem.item1}</a>
                                            <a href="" className='footer-nav'>{footerItem.item2}</a>
                                            <a href="" className='footer-nav'>{footerItem.item3}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
