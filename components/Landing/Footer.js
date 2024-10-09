import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Fragment, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const formData = new FormData(event.target);
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setIsPopupVisible(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setEmail("");
  };

  return (
    <div className="Footer">
      {/* <div className="FooterEmailSub">
        <form
          name="email-subscription"
          method="POST"
          data-netlify="true"
          netlify
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="form-name" value="email-subscription" />
          <input
            className="FooterEmailSubInput"
            placeholder="Enter your email to know when applications open!"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            <Fragment>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{ fontSize: 40, color: "black", marginRight: "10px" }}
              />
            </Fragment>
          </button>
        </form>
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </div>

      {isPopupVisible && (
        <div className="PopupOverlay">
          <div className="PopupContent">
            <h3>Success!</h3>
            <p>Thank you! Your email has been submitted.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )} */}

      <div className="FooterSocials">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          smooth="true"
          href="mailto:team@hackumass.com"
          className="social-links"
        >
          <FontAwesomeIcon icon={faSquareEnvelope} />
        </Link>

        <Link
          smooth="true"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/HackUMass/"
          className="social-links"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </Link>
        <Link
          smooth="true"
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/hackumass"
          className="social-links"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </Link>
        <Link
          smooth="true"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/hackumass/"
          className="social-links"
        >
          <FontAwesomeIcon icon={faSquareInstagram} />
        </Link>
      </div>
      <div className="FooterContent">
        <div className="FooterContentLeft">
          <p>
            <Link smooth="true" href="/">
              {" "}
              HackUMass XII
            </Link>
          </p>
          <p>
            <Link smooth="true" href="#aboutus">
              Why HackUMass
            </Link>
          </p>
          <p style={{ marginBottom: "0" }}>
            <Link smooth="true" href="#sponsors">
              Sponsors
            </Link>
          </p>
        </div>
        <Image
          src="/BlueWhiteLogo.png"
          sizes={1000}
          width={0}
          height={0}
          priority={true}
          alt="HackUMass Logo"
        />
        <div className="FooterContentRight">
          <p>
            <Link smooth="true" href="#faq">
              FAQ
            </Link>
          </p>
          <p>
            <Link smooth="true" href="#team">
              Team
            </Link>
          </p>
          <p style={{ marginBottom: "0" }}>
            <Link
              smooth="true"
              target="_blank"
              href="mailto:team@hackumass.com"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
