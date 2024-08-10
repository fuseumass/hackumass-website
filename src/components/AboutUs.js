import WhyHackUMassPhoto from "./WhyHackUMassPhoto";
import PropTypes from "prop-types";

const AboutUs = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[120px] max-w-full z-[2] text-center text-45xl text-text-secondary font-heading mq1100:gap-[60px] mq450:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
        <div className="w-[2080px] flex flex-col items-center justify-start gap-[30px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit] mq1100:text-32xl mq1100:leading-[67px] mq450:text-19xl mq450:leading-[51px]">
            Why HackUMass?
          </h1>
          <div className="self-stretch relative text-lg leading-[33px] font-medium font-body">
            Welcome to HackUMass, a 36-hour hackathon where college students
            come together to learn, connect, and build their dream projects.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start max-w-full text-lightest-grey">
        <div className="w-[2080px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[30px] max-w-full">
          <WhyHackUMassPhoto />
          <img
            className="w-[142px] h-[15.8px] relative"
            loading="lazy"
            alt=""
            src="/navigator.svg"
          />
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
