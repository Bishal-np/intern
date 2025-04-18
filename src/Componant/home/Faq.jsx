import React from 'react'
import { useState } from 'react';



function Faq() {

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "What benefits does the InternSathi offer?",
            answer: "InternSathi offers various features from candidate listing, company listing, Applicant Tracking System, Interview Scheduling, candidate export, application deadline, apply with LinkedIn, email alert, Internship Alert, Profile Builder, Resume Builder, Resume Manager, Social App Login and many more."
        },
        {
            question: "How will the dapartment contact me ?",
            answer: "InternSathi offers various features from candidate listing, company listing, Applicant Tracking System, Interview Scheduling, candidate export, application deadline, apply with LinkedIn, email alert, Internship Alert, Profile Builder, Resume Builder, Resume Manager, Social App Login and many more."
        },
        {
            question: "How do i apply for internship opening ?",
            answer: "InternSathi offers various features from candidate listing, company listing, Applicant Tracking System, Interview Scheduling, candidate export, application deadline, apply with LinkedIn, email alert, Internship Alert, Profile Builder, Resume Builder, Resume Manager, Social App Login and many more."
        },
        {
            question: "How do i know if i'm shortlisted ?",
            answer: "InternSathi offers various features from candidate listing, company listing, Applicant Tracking System, Interview Scheduling, candidate export, application deadline, apply with LinkedIn, email alert, Internship Alert, Profile Builder, Resume Builder, Resume Manager, Social App Login and many more."
        },
    ];

    return (
        <>
            <section className="faq-section">
                <div className="container">
                    <h2 className="faq-heading">Frequently Asked Questions</h2>
                    <p className="faq-sub-heading">Still you have any questions? Contact our Team via <a className='faq-email' href="">support@internsathi.com</a></p>
                    <div className="faq-itms d-flex py-5">
                        <div className="right-items col-lg-4 ">
                            <h2 className="faq-right-heading">Ask Your Question</h2>
                            <p className="faq-right-sub">If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts.</p>
                            <button className="contact-us"><i className="bi bi-chat-dots"></i>  Contact us </button>
                        </div>
                        <div className="faq-section-bar col-lg-8">
                            {faqs.map((faqs, index) => (
                                <div className="faq-bar" key={index}>
                                    <div className="faq-question" onClick={() => toggleAnswer(index)}>{faqs.question}</div>
                                    {activeIndex === index && (
                                        <div className="faq-answer">
                                            <span className="faq-ans">{faqs.answer}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Faq
