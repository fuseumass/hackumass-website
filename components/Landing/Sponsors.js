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
            src="/Partners/AmherstCopy-logo.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://amherstcopy.com/", "_blank")}
          />

        </div>
        <div className="PartnerImagesUpper">
          <Image
            src="/Partners/Makerspace-Logo2.png"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://sites.google.com/umass.edu/umassmakerspace/", "_blank")}
          />

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
          <Image
            src="/Partners/Panera-Bread.png"
            className="bg-white"
            sizes={2000}
            width={0}
            height={0}
            priority={true}
            onClick={() => window.open("https://www.panerabread.com/", "_blank")}
          />
        </div>

      </div>
      <div className="WhySponsor">
        <h1 className="heading">Why Sponsor Us</h1>
      </div>
        <div className="WhySponsorLeft">
          <p className="p">
            Sponsoring HackUMass offers companies a unique opportunity to connect with some of the brightest and most ambitious students in technology and engineering. 
          As one of the largest hackathons in the Pioneer Valley, HackUMass brings together over 600 participants from top universities across the nation, all eager to innovate, 
          learn, and showcase their skills. Sponsors gain exclusive access to a highly talented pool of future engineers and leaders through resume directories, direct networking, mentorship, and workshops. 
          Beyond recruiting, HackUMass provides companies with a platform to highlight their technologies, inspire participants to build projects aligned with their vision, and establish their brand as a champion of innovation and education. 
          By partnering with HackUMass, sponsors not only fuel the growth of the next generation of creators but also benefit from meaningful engagement and visibility in a dynamic, collaborative environment.
          </p>

          <button
            className="WhySponsorButton"
            onClick={() => window.open("mailto:team@hackumass.com", "_blank")}
          >
            <p style={{ margin: "auto" }}>Sponsor HackUMass</p>
          </button>
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
