import React from 'react'
import "../../scss/pages/home.scss"


function Contactdepartment() {
  const department = [
    {
      title: "Sales",
      phone: "+9779802346002",
      email: "contact@internsathi.com",
    },
    {
      title: "Technical HR",
      phone: "+977 9802364008",
      email: "contact@internsathi.com ",
    },
    {
      title: "Creative & Marketing HR",
      phone: "+977 9802364007",
      email: "contact@internsathi.com",
    },
  ];
  return (
    <>
      <section className="contact-department">
        <div className="container">
          <h2 className="department-heading">Contact our Various Department</h2>
          <p className="departmanet-sub-heading">You can contact our various department.</p>
          <div className="row gy-4 contact-card">
            <div className="contact-grid">
              {department.map((department, index) => (
                <div className="department-card" key={index}>
                  <h2 className="card-heading">{department.title}</h2>
                  <p className="department-contact"><i class="bi bi-telephone-fill"></i> {department.phone}</p>
                  <p className="department-email"><i class="bi bi-envelope-fill"></i>  {department.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactdepartment
