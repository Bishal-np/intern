import React from 'react'
import "../../scss/pages/home.scss"
import "../../../public/images/blogs/blog2.webp"

function Blogs() {
  const blogs = [
    {
      img: "https://internsathi.com/_next/image?url=%2Fblog3.png&w=1080&q=75",
      description: "Kunal Sah - 19 Jan 2022",
      title: "Unlocking Success: 10 Best Reasons to Hire an Intern for Your Company",
      link: "Read Post"

    },
    {
      img: "https://internsathi.com/_next/image?url=%2Fblog2.png&w=1080&q=75",
      description: "Niraj Kafle - 19 Jan 2022",
      title: "Internship: Ultimate Guide 2023",
      link: "Read Post"

    },
    {
      img: "https://internsathi.com/_next/image?url=%2Fblog1.png&w=1080&q=75",
      description: "KunaL Sah - 19 Jan 2022",
      title: "Best Guide: How to Apply for Internship from InternSathi.",
      link: "Read Post"

    },
  ];
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <h2 className="blog-heading">From Our Blogs</h2>
          <p className="blog-sub-heading">A better career is out there. We'll help your first step to becoming everything you want to be.</p>
          <div className="blog-grid">
            {blogs.map((blogs, index) => (
              <div className="blog-card" key={index} style={{ '--secondary-color': blogs.color }} >
                <div className="blogs-image-container">
                  <img src={blogs.img} alt="" />
                </div>
                <p className="service-description">{blogs.description}</p>
                <h3 className="blogs-title">{blogs.title}</h3>
                <button className="read-post">{blogs.link}</button>
              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
