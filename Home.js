
import React from 'react'

const Home =() => {
    return(
        <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav-bg">
  <div className="row">
    <div className="col-10 mx auto">
        <div className="col-mf-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>Grow your Business with <strong>Target</strong></h1>
            <h2 className="my-3">We are the team of software developer </h2>
            <div className="mt-3">
         <a style={{color:"primary", border: "2px solid green",  borderradius: "25px"}} href="#" className="btn-get-started">Get Started</a>
            </div>
        </div>
</div>
</div>
</div>
    </section>
    </>
    );
};
export default Home;