import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="FooterSocials">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:team@hackumass.com"
          className="social-links"
        >
          <FontAwesomeIcon icon={faSquareEnvelope} />
        </Link>

        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/HackUMass/"
          className="social-links"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/hackumass"
          className="social-links"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </Link>
        <Link
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
            <Link href="/">HackUMass XII</Link>
          </p>
          <p>
            <Link href="#aboutus">Why HackUMass</Link>
          </p>
          <p style={{ marginBottom: "0" }}>
            <Link href="#sponsors">Sponsors</Link>
          </p>
        </div>
        <Image
          src="/BlueWhiteLogo.png"
          sizes="2000"
          width={0}
          height={0}
          priority={true}
          alt="HackUMass Logo"
        />
        <div className="FooterContentRight">
          <p>
            <Link href="#faq">FAQ</Link>
          </p>
          <p>
            <Link href="#team">Team</Link>
          </p>
          <p style={{ marginBottom: "0" }}>
            <Link target="_blank" href="mailto:team@hackumass.com">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
