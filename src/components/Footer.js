import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[120px] box-border max-w-full text-left text-base text-text-secondary font-body mq1100:gap-[60px] mq1100:pb-[78px] mq1100:box-border mq450:gap-[30px] ${className}`}
    >
      <div className="w-[2080px] flex flex-col items-center justify-start gap-[60px] max-w-full mq1100:gap-[30px]">
        <div className="w-[1600px] flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
          <div className="w-[800px] flex flex-row items-end justify-between pt-[9px] pb-[46px] pl-8 pr-[9px] box-border relative max-w-full gap-5 mq1100:flex-wrap">
            <input
              className="border-accent-blue border-[3px] border-solid [outline:none] bg-lightest-grey h-16 w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-81xl box-border"
              type="text"
            />
            <div className="w-[556px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full z-[1]">
                <div className="h-[33px] flex-1 relative leading-[181.53%] flex items-center max-w-full">
                  Enter your email address to be the first to know when
                  applications open
                </div>
              </div>
            </div>
            <img
              className="h-[46px] w-[46px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/buttonicon@2x.png"
            />
          </div>
          <div className="w-[800px] flex flex-row items-start justify-between py-0 px-[254px] box-border gap-5 max-w-full text-5xl font-font-awesome-5-brands mq1100:flex-wrap mq1100:pl-[127px] mq1100:pr-[127px] mq1100:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[30.5px] relative font-font-awesome-5-free inline-block shrink-0 mq450:text-lgi">
              
            </div>
            <div className="relative inline-block min-w-[26.7px] shrink-0 mq450:text-lgi">
              
            </div>
            <div className="relative inline-block min-w-[26.7px] shrink-0 mq450:text-lgi">
              
            </div>
            <div className="w-7 relative inline-block shrink-0 mq450:text-lgi">
              
            </div>
          </div>
        </div>
        <div className="w-[1600px] flex flex-row items-center justify-between py-0 px-9 box-border max-w-full gap-5 text-5xl mq1100:flex-wrap">
          <div className="h-[186px] flex flex-row items-center justify-start py-5 px-0 box-border gap-[30px]">
            <div className="self-stretch w-0.5 relative border-text-secondary border-r-[2px] border-solid box-border" />
            <div className="flex flex-col items-start justify-center gap-[26px]">
              <div className="h-[29px] relative inline-block mq450:text-lgi">
                HackUMass XII
              </div>
              <div className="relative whitespace-nowrap mq450:text-lgi">
                Why HackUMass
              </div>
              <div className="relative inline-block min-w-[108px] mq450:text-lgi">
                Sponsors
              </div>
            </div>
          </div>
          <div className="h-[333px] w-[426px] flex flex-col items-center justify-center p-[30px] box-border max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/fullbluelogo@2x.png"
            />
          </div>
          <div className="h-[186px] flex flex-row items-center justify-end py-5 px-0 box-border gap-[30px]">
            <div className="flex flex-col items-end justify-center gap-[26px]">
              <div className="relative text-right inline-block min-w-[47px] mq450:text-lgi">
                FAQ
              </div>
              <div className="relative inline-block min-w-[63px] mq450:text-lgi">
                Team
              </div>
              <div className="relative inline-block min-w-[128px] mq450:text-lgi">
                Contact Us
              </div>
            </div>
            <div className="self-stretch w-0.5 relative border-text-secondary border-r-[2px] border-solid box-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
