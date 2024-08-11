import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Website = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#2b38c4,_#4b7bf5_20%,_#68bbe3_40%,_#7ec8e3_60%,_#cef6ff_80%)] flex flex-col items-center justify-start gap-[120px]">
      <Hero />
      <AboutUs />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Website;
