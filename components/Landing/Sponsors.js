import Image from "next/image.js";

export default function Sponsors() {
    return (
        <div className="Sponsors">
            <div className="LandingAboutHeader">
                <h1 className="heading">Our Sponsors</h1>
                <p className="p">Want to Sponsor HackUMass? Reach out to us at <span style={{ color: "#2832C1", cursor: "pointer", textDecoration: "underline" }} onClick={() => (window.open("mailto:team@hackumass.com"))}>team@hackumass.com</span></p>
            </div>
            <div className="SponsorImages">
                <div className="SponsorImagesUpper">
                    <Image src="/SponsorCOE.png" sizes={2000} width={0} height={0} priority={true} />
                    <Image src="/SponsorCICS.png" sizes={2000} width={0} height={0} priority={true} />
                    <Image src="/SponsorBE.png" sizes={2000} width={0} height={0} priority={true} />
                </div>
                <div className="SponsorImagesUpper">
                    <Image src="/SponsorKPMG.png" sizes={2000} width={0} height={0} priority={true} />
                    <Image src="/SponsorMitre.png" sizes={2000} width={0} height={0} priority={true} />
                </div>
            </div>
            <div className="LandingAboutHeader">
                <h1 className="heading">Our Partners</h1>
            </div>
            <div className="PartnerImages">
                <Image src="/Partners.png" sizes={2000} width={0} height={0} priority={true} />
            </div>
        </div>

    )
}