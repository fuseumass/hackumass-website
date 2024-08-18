import Image from "next/image.js";

export default function Sponsors() {
  return (
    <div className="Sponsors" id="sponsors">
      <div className="LandingAboutHeader">
        <h1 className="heading">Our Sponsors</h1>
        {/* <p className="p">Want to Sponsor HackUMass? Reach out to us at <span style={{ color: "#2832C1", cursor: "pointer", textDecoration: "underline" }} onClick={() => (window.open("mailto:team@hackumass.com", "_blank"))}>team@hackumass.com</span></p> */}
      </div>
      <div className="SponsorImages">
        <div className="SponsorImagesUpper">
          <Image
            src="/SponsorCOE.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
          />
          <Image
            src="/SponsorCICS.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
          />
          <Image
            src="/SponsorBE.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
          />
        </div>
        <div className="SponsorImagesUpper">
          <Image
            src="/SponsorKPMG.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
          />
          <Image
            src="/SponsorMitre.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
          />
        </div>
      </div>
      <div className="WhySponsor">
        <div className="WhySponsorLeft">
          <h1 className="h1">Why should you sponsor us?</h1>
          <p className="p">
            Sponsoring HackUMass is a strategic opportunity to engage with some
            of the brightest minds in technology and innovation. As a sponsor,
            you'll have direct access to a diverse pool of talented students and
            professionals eager to tackle real-world challenges. This event
            serves as a breeding ground for cutting-edge ideas and solutions,
            offering your company a chance to gain fresh perspectives and
            innovative approaches to your business challenges.
          </p>

          <button
            className="WhySponsorButton"
            onClick={() => window.open("mailto:team@hackumass.com", "_blank")}
          >
            <p style={{ margin: "auto" }}>Sponsor HackUMass</p>
          </button>
        </div>
        <div className="WhySponsorRight">
          <Image
            src="/SponsorUsRight.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
          />
        </div>
      </div>
      <div className="LandingAboutHeader">
        <h1 className="heading">Our Partners</h1>
      </div>
      <div className="PartnerImages">
        <Image
          src="/Partners.png"
          sizes={2000}
          width={0}
          height={0}
          priority={true}
        />
      </div>
    </div>
  );
}
