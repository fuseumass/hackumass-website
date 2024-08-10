import PropTypes from "prop-types";

const WantToSponsorUs = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between py-0 px-60 box-border max-w-full gap-5 text-left text-lg text-black font-body mq1100:flex-wrap mq1100:pl-[60px] mq1100:pr-[60px] mq1100:box-border mq1700:flex-wrap mq1700:pl-[120px] mq1700:pr-[120px] mq1700:box-border mq2325:flex-wrap mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1194px] flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[1194px] max-w-full mq1100:flex-1 mq1700:flex-1 mq2325:flex-1 mq2325:min-w-full mq450:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[90px] gap-[30px] mq1100:pl-[22px] mq1100:pr-[22px] mq1100:box-border mq1700:pl-[45px] mq1700:pr-[45px] mq1700:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative leading-[33px] font-medium">{`Why should you sponsor us? `}</div>
            <div className="self-stretch relative text-base leading-[181.53%] whitespace-pre-wrap">
              Sponsoring HackUMass is a strategic opportunity to engage with
              some of the brightest minds in technology and innovation. As a
              sponsor, you'll have direct access to a diverse pool of talented
              students and professionals eager to tackle real-world challenges.
              This event serves as a breeding ground for cutting-edge ideas and
              solutions, offering your company a chance to gain fresh
              perspectives and innovative approaches to your business
              challenges.
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[13px] px-[30px] pb-[5px] bg-[transparent] w-64 flex flex-row items-start justify-start box-border relative whitespace-nowrap">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-lightest-grey" />
            <div className="flex-1 relative text-lg leading-[28px] font-semibold font-body text-text-secondary text-center z-[1]">
              Sponsor HackUMass
            </div>
          </button>
        </div>
      </div>
      <img
        className="w-[796px] relative max-h-full overflow-hidden shrink-0 object-contain max-w-full mq1100:flex-1 mq1700:flex-1 mq2325:flex-1 mq450:flex-1"
        loading="lazy"
        alt=""
        src="/sposnsor-us-component@2x.png"
      />
    </div>
  );
};

WantToSponsorUs.propTypes = {
  className: PropTypes.string,
};

export default WantToSponsorUs;
