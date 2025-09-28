"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function NavigationBarLand(user) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar-landing">
        <div className="navbar-container">
        

          <div className="menu-icon landing" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: 20, color: "black" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{ fontSize: 20, color: "black" }}
              />
            )}
          </div>

          <ul
            className={click ? "nav-menu active landing" : "nav-menu landing"}
          >
            <li className="nav-item landing">
              <Link
                smooth="true"
                href="#aboutus"
                className="nav-links-landing landing"
                style={{ borderTop: "none" }}
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item landing">
              <Link
                smooth="true"
                href="#schedule"
                className="nav-links-landing landing"
                style={{ borderTop: "none" }}
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth="true"
                href="#sponsors"
                className="nav-links-landing landing"
                style={{ borderTop: "none" }}
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Sponsors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth="true"
                href="#faq"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth="true"
                href="#team"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                smooth="true"
                href="https://hackumass-xii.devpost.com/project-gallery"
                className="nav-links-landing landing"
                style={{ borderTop: "none" }}
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                XII (2024)
              </Link>
            </li>
            <li className="nav-item">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                smooth="true"
                href="https://www.linkedin.com/company/hackumass"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                smooth="true"
                href="https://www.instagram.com/hackumass/"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </Link>
            </li>
            {/*
                        <li className="nav-item application-button" style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", paddingLeft: "20px", paddingRight: "20px", paddingTop: "7px", paddingBottom: "7px", borderRadius: "30px" }}>
                            <Link
                                rel="noopener noreferrer" target="_blank"
                                style={{ color: "black" }}
                                smooth="true"
                                href="https://dashboard.hackumass.com"
                                className="nav-links-landing landing"
                                onClick={closeMobileMenu}>
                                Coming Soon!
                            </Link>
                        </li> */}
          </ul>
          <Link
            href="/"
            className="navbar-logo landing"
            onClick={closeMobileMenu}
          >
          <div className="flex items-center gap-[var(--block)]" style={{ '--block': '8px' }}>
            <Image src="/TFC-whiteLogo.png" alt="PIT Tech for Change Butterfly" width={120} height={60} className="h-14 w-auto" />
            <Image src="/PastelPinkPlus.png" alt="Plus" width={60} height={60} className="h-7 w-auto" />
            <Image src="/darkHUMLogo.png" alt="HMLogo" width={120} height={60} className="h-16 w-auto" />
          </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavigationBarLand;
