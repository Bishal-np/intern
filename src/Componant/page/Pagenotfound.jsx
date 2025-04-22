import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

function Pagenotfound() {
  return (
    <>
    <Header />
    <section className="container my-5">
       <h1 className="text-center text-danger">404 page not found</h1>
       <p className='text-center'>The page you're looking for is not found</p>
    </section>
    <Footer />  
    </>
  )
}

export default Pagenotfound
