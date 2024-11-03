import Image from "next/image.js";

export default function Sponsors() {
  return (
    <div className="Sponsors" id="sponsors">
      <div className="LandingAboutHeader">
        <h1 className="heading">Our Sponsors</h1>
      </div>
      <div className="SponsorImages">
        <div className="SponsorImagesUpper">
          <Image
            src="/Sponsors/SponsorCOE.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://engineering.umass.edu/", "_blank")}
          />
          <Image
            src="/Sponsors/SponsorCICS.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.umass.edu/cics/", "_blank")}

          />
          <Image
            src="/Sponsors/SponsorBE.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.umass.edu/entrepreneurship/", "_blank")}
          />
          <Image
            src="/Sponsors/STR_Sponsor.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.str.us/", "_blank")}
          />
        </div>
      </div>
      <div className="PartnerImages">
        <div className="PartnerImagesUpper">
          <Image
            src="/Partners/saily-color.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://saily.com/", "_blank")}
          />
          <Image
            src="/Partners/wolfram-corporate-logo-horizontal-1-removebg-preview.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.wolframalpha.com/", "_blank")}
          />
          <Image
            src="/Partners/insomnia-cookies.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://insomniacookies.com/", "_blank")}
          />
          <Image
            src="/Partners/nordpass-color-vertical.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://nordpass.com/", "_blank")}
          />
          <Image
            src="/Partners/M5Logo-removebg-preview.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.umassamherstm5.org/", "_blank")}
          />
          <Image
            src="/Partners/Makerspace-Logo2.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://sites.google.com/umass.edu/umassmakerspace/", "_blank")}
          />

        </div>
        <div className="PartnerImagesUpper">
          <Image
            src="/Partners/CICS-makerspace.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://groups.cs.umass.edu/makerspace/", "_blank")}
          />
          <Image
            src="/Partners/silverscreen.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.silverscreendesign.com/", "_blank")}
          />
          <Image
            src="/Partners/StandOut-Stickers-Logo.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("http://hackp.ac/mlh-StandOutStickers-hackathons", "_blank")}
          />
          <Image
            src="/Partners/MakerspaceVertical.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://sites.google.com/umass.edu/umassmakerspace/", "_blank")}
          />
          <Image
            src="/Partners/incogni-black.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://incogni.com/", "_blank")}
          />


        </div>
        <div className="PartnerImagesUpper">
          <Image
            src="/Partners/balsamiq-logo-screen.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://balsamiq.com/", "_blank")}
          />
          <Image
            src="/Partners/mlh-logo-color.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://mlh.io/", "_blank")}
          />
          <Image
            src="/Partners/nordVPN-color.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://nordvpn.com/", "_blank")}
          />
          <Image
            src="/Partners/ADI-Logo-AWP-Tagline-RGB-FullColor.jpg"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.analog.com/", "_blank")}
          />
        </div>

      </div>
      <div className="WhySponsor">
        <div className="WhySponsorLeft">
          <h1 className="h1">Why should you sponsor us?</h1>
          <p className="p">
          HackUMass is one of the largest tech events at UMass Amherst, providing sponsors with exclusive access to hundreds of participant resumes and direct opportunities to engage with students during the event, along with other valuable benefits. Our team collaborates with sponsors to customize packets tailored to the company’s needs, ensuring maximum exposure that benefits both students and the company.
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
            src="/Sponsors/SponsorUsRight.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
          />
        </div>
      </div>
      {/* <div className="LandingAboutHeader2">
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
      </div> */}
    </div>
  );
}
