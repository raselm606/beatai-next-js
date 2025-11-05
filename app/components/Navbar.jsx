'use client'; 
import Logo from '@/app/beatai_assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
        <div className={`navbar_area fixed-top ${navBg ? "scrolled" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
              <Image src={Logo} alt="BeatAI" width={160} height={45} />

              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav main_nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" href="#">Lex</Link>
                  </li>
                  <li className="nav-item">
                    <Link     className="nav-link " href="#about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link     className="nav-link " href="#key-features">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#pricing">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " href="#howitworks">How it works</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " href="#faq">FAQ</Link>
                  </li>
                </ul>
                <div className="button_right">
                  <Link href="#" >Sign Up</Link>
                </div>
              </div>
            </div>
          </nav>
              </div>
            </div>
          </div>
        </div>
    </>
    
  )
}

export default Navbar
