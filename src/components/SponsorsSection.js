import SponsorsCard from "./SponsorsCard";
import PropTypes from "prop-types";

const SponsorsSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[30px] max-w-full text-center text-45xl text-text-secondary font-heading ${className}`}
    >
      <div className="w-[2080px] flex flex-col items-start justify-start gap-[30px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit] whitespace-pre-wrap mq1100:text-32xl mq1100:leading-[67px] mq450:text-19xl mq450:leading-[51px]">
          Our Sponsors
        </h1>
        <div className="self-stretch relative text-lg leading-[33px] font-medium font-body text-black">
          <span>Want to Sponsor HackUMass? Reach out to us at </span>
          <a
            className="text-darkblue"
            href="mailto:team@hackumass.com"
            target="_blank"
          >
            <span>team@hackumass.com</span>
          </a>
        </div>
      </div>
      <div className="w-[2080px] flex flex-col items-start justify-start py-0 px-[188px] box-border gap-[60px] max-w-full mq1100:gap-[30px] mq1100:pl-[47px] mq1100:pr-[47px] mq1100:box-border mq1700:pl-[94px] mq1700:pr-[94px] mq1700:box-border mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="self-stretch grid flex-row items-start justify-start gap-[60px] max-w-full grid-cols-[repeat(3,_minmax(396px,_1fr))] mq1100:gap-[30px] mq1100:grid-cols-[minmax(396px,_1fr)] mq1700:justify-center mq1700:grid-cols-[repeat(2,_minmax(396px,_686px))]">
          <SponsorsCard propFlex="unset" propMinWidth="unset" />
          <SponsorsCard propFlex="unset" propMinWidth="unset" />
          <SponsorsCard propFlex="unset" propMinWidth="unset" />
        </div>
        <div className="w-[1410px] flex flex-row items-start justify-end max-w-full">
          <div className="w-[1116px] flex flex-row items-start justify-start gap-[60px] max-w-full mq1700:flex-wrap mq1700:gap-[30px]">
            <SponsorsCard propFlex="1" propMinWidth="343px" />
            <SponsorsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

SponsorsSection.propTypes = {
  className: PropTypes.string,
};

export default SponsorsSection;
