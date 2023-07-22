import React from 'react'

export default function Navbar() {
  const LOGO_IMG = "https://companieslogo.com/img/orig/YTRA_BIG-b94c937a.png?t=1660019129";
  
  return (
    <div className="row" >
      <nav className="navbar navbar-expand-lg bg-light px-5">
        <a className="navbar-brand" href="#"><img src={LOGO_IMG} alt="logo" width="80" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-muted fw-bold" aria-current="page" href="/">My Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-muted fw-bold" aria-current="page" href="/">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-muted fw-bold" aria-current="page" href="/">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-muted fw-bold" aria-current="page" href="/">Yatra For Business</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
