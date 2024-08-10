import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[470px] box-border relative max-w-full text-left text-77xl text-lightest-grey font-heading mq1100:pb-[198px] mq1100:box-border mq1700:pb-[305px] mq1700:box-border ${className}`}
    >
      <header className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[67px] px-5 box-border max-w-full text-left text-lg text-lightest-grey font-body">
        <Navbar />
      </header>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[73px] px-60 box-border max-w-full mq1100:py-[47px] mq1100:px-[60px] mq1100:box-border mq1700:pl-[120px] mq1700:pr-[120px] mq1700:box-border mq450:py-[31px] mq450:px-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit leading-[112.5%] font-bold font-[inherit] inline-block max-w-full mq1100:text-29xl mq1100:leading-[65px] mq450:text-10xl mq450:leading-[43px]">
          <p className="m-0">An outpost for,</p>
          <p className="m-0">Your Craziest ideas.</p>
        </h1>
        <img
          className="w-[1134px] relative max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/hum-text-large@2x.png"
        />
        <div className="w-[1138px] flex flex-col items-start justify-start gap-[30px] max-w-full text-45xl">
          <h1 className="m-0 self-stretch h-[90px] relative text-inherit leading-[131.7%] font-semibold font-[inherit] inline-block shrink-0 mq1100:text-32xl mq1100:leading-[67px] mq450:text-19xl mq450:leading-[51px]">
            Nov 8-10 | 36 Hours | Amherst, MA
          </h1>
          <div className="flex flex-row items-start justify-start pt-2 px-[30px] pb-[9px] box-border relative [row-gap:20px] max-w-full text-center text-19xl text-text-secondary mq1100:flex-wrap">
            <div className="h-full w-[calc(100%_-_20px)] absolute !m-[0] top-[0px] right-[20px] bottom-[0px] left-[0px] rounded-81xl bg-lightest-grey" />
            <div className="w-[407px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
              <h1 className="m-0 w-[451.8px] relative text-inherit leading-[131.7%] font-semibold font-[inherit] flex items-center justify-center shrink-0 max-w-[112%] z-[1] mq1100:text-11xl mq1100:leading-[40px] mq450:text-4xl mq450:leading-[30px]">
                Apply Now!
              </h1>
            </div>
            <img
              className="h-[65px] w-[65px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/arrow-rightcircle.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="w-full h-[1644px] absolute !m-[0] right-[0px] bottom-[-412px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src="/building@2x.png"
      />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
