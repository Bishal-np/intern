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
                <div className="container ">
                    <div className="footer-flex d-flex ">
                      
                            <div class="col-3">
                                <div className="left-details">
                                    <a href=""><img src={Logo} alt="" /></a>
                                    <p className="left-details-items">logo
                                    InternSathi - Sathi Edtech Pvt. Ltd. <br />Krishna Galli, Pulchowk, Lalitpur, Nepal</p>
                                    <p className="contact-links"><a href="">+977-9802346002</a> | <a href="">contact@internsathi.com</a> </p>
                                    <div className="social-media">
                                        <h3 className="social-media-heading  text-light w-4 py-4">Follow our Social Media</h3>
                                        <div className="social-icons d-flex gap-5 justify-content-space-between">
                                            <a href="" ><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div className="right-details d-flex gap-4">
                                    {footerItem.map((footerItem, index) => (
                                        <div className="right-items-details" key={index}>
                                            <div className="footer-nav-dtl">
                                                <h2 className="footer-item-heading  text-light">{footerItem.heading}</h2>
                                            </div>
                                            <div className="footer-nav-detail">
                                                <a href="" className='footer-nav '>{footerItem.item}</a>
                                                <a href="" className='footer-nav'>{footerItem.item1}</a>
                                                <a href="" className='footer-nav'>{footerItem.item2}</a>
                                                <a href="" className='footer-nav'>{footerItem.item3}</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                   
                    </div>
                </div>
                <div className="copy-right">
                    <p className="copy-right-title py-4 text-center text-light ">2024 All Rights Reserved © InternSathi - Sathi Edtech Pvt. Ltd.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
