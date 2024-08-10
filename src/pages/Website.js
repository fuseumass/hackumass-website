import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import SponsorsSection from "../components/SponsorsSection";
import WantToSponsorUs from "../components/WantToSponsorUs";
import PartnersSection from "../components/PartnersSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Website = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#2b38c4,_#4b7bf5_20%,_#68bbe3_40%,_#7ec8e3_60%,_#cef6ff_80%)] flex flex-col items-start justify-start gap-[180px] leading-[normal] tracking-[normal] mq1100:gap-[45px] mq1700:gap-[90px] mq450:gap-[22px]">
      <Hero />
      <AboutUs />
      <section className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[120px] max-w-full mq1100:gap-[30px] mq1700:gap-[60px] mq450:gap-[15px]">
        <SponsorsSection />
        <WantToSponsorUs />
        <PartnersSection />
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Website;
