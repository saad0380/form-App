import React from 'react'

import"../node_modules/bootstrap/dist/css/bootstrap.min.css";


 

const  Navbar=() =>{
  return(
    
    
  <>
  <div className="container-fluid nav-bg">
  <div className="row">
    <div className="col-10 mx auto">
 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="Target">Target</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Contact">Contact</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
        
    );
}
export default Navbar;