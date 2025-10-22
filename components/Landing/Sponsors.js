import Image from "next/image.js";

const sponsorLogos = [
  {
    href: "https://pit-un.org/",
    src: "/Partners/SponsorPITUN.png",
    alt: "Sponsor PITUN",
  },
  {
    href: "https://aws.amazon.com/",
    src: "/Partners/AWS-logo.png",
    alt: "AWS",
  },
  {
    href: "https://www.honda.com/research",
    src: "/Partners/HondaResearch.png",
    alt: "Honda Research",
  },
  {
    href: "https://engineering.umass.edu/",
    src: "/Sponsors/SponsorCOE.png",
    alt: "College of Engineering",
  },
  {
    href: "https://www.umass.edu/cics/",
    src: "/Sponsors/SponsorCICS.png",
    alt: "CICS",
  },
  {
    href: "https://ds.cs.umass.edu/",
    src: "/Sponsors/SponsorCDSAI.png",
    alt: "CDSAI",
  },
  {
    href: "https://groups.cs.umass.edu/makerspace/",
    src: "/Partners/CICS-makerspace.png",
    alt: "CICS Makerspace",
  },
  {
    href: "https://insomniacookies.com/",
    src: "/Partners/insomnia-cookies.png",
    alt: "Insomnia Cookies",
  },
  {
    href: "https://www.umassamherstm5.org/",
    src: "/Partners/M5Logo-removebg-preview.png",
    alt: "M5",
  },
  {
    href: "https://www.silverscreendesign.com/",
    src: "/Partners/silverscreen.png",
    alt: "Silver Screen Design",
  },
  {
    href: "https://sites.google.com/umass.edu/umassmakerspace/",
    src: "/Partners/MakerspaceVertical.png",
    alt: "UMass Makerspace",
  },
  {
    href: "https://pit-un.org/",
    src: "/Partners/PITLogo.png",
    alt: "PIT Logo",
  },
  {
    href: "https://www.analog.com/",
    src: "/Partners/ADI-Logo-AWP-Tagline-RGB-FullColor.jpg",
    alt: "Analog Devices",
  },
  {
    href: "https://mlh.io/",
    src: "/Partners/mlh-logo-color.png",
    alt: "MLH",
  },
  {
    href: "http://hackp.ac/mlh-StandOutStickers-hackathons",
    src: "/Partners/pureButtons.png",
    alt: "Pure Buttons",
  },
  {
    href: "https://sites.google.com/umass.edu/umassmakerspace/",
    src: "/Partners/AmherstCopyLogo.png",
    alt: "Amherst Copy",
  },
];

export default function Sponsors() {
  return (
    <div className="Sponsors" id="sponsors">
      <div className="LandingAboutHeader">
        <h1 className="heading">Our Sponsors</h1>
      </div>
      <div className="SponsorImages">
        <div className="SponsorGrid">
          {sponsorLogos.map(({ href, src, alt }, index) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="SponsorImageLink"
            >
              <Image
                src={src}
                alt={alt}
                width={375}
                height={375}
                className="SponsorImage"
              />
            </a>
          ))}
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
