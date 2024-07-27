"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

function NavigationBarLand(user) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar-landing">
                <div className="navbar-container">
                    <Link
                        href="/"
                        className="navbar-logo landing"
                        onClick={closeMobileMenu} >

                        <Image
                            src="/BlueWhiteLogo.png"
                            alt="logo"
                            width={120}
                            height={60}
                        />
                    </Link>

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

                    <ul className={click ? "nav-menu active landing" : "nav-menu landing"} >
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
                        <li className="nav-item">
                            <Link
                                smooth="true"
                                href="#pricing"
                                className="nav-links-landing landing"
                                onClick={closeMobileMenu}
                            >
                                FAQ
                            </Link>
                        </li>
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
                                Sponsors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth="true"
                                href="#pricing"
                                className="nav-links-landing landing"
                                onClick={closeMobileMenu}
                            >
                                Team
                            </Link>
                        </li>

                        <li className="nav-item">
                            {!user.user ? (
                                <Link
                                    smooth="true"
                                    href="/login"
                                    className="nav-links-landing landing"
                                    onClick={closeMobileMenu}
                                >
                                    Get Started
                                    <FontAwesomeIcon
                                        className="mobile"
                                        icon={faArrowRightLong}
                                        style={{ fontSize: 30, color: "white", marginLeft: 20 }}
                                    />
                                </Link>
                            ) : (
                                <Link
                                    smooth="true"
                                    href="/users"
                                    className="nav-links-landing landing"
                                    onClick={closeMobileMenu}
                                >
                                    Dashboard
                                    <FontAwesomeIcon
                                        className="mobile"
                                        icon={faArrowRightLong}
                                        style={{ fontSize: 30, color: "white", marginLeft: 20 }}
                                    />
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavigationBarLand;
