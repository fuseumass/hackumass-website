import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <div
      className={`w-[2080px] overflow-hidden shrink-0 flex flex-row items-start justify-between max-w-full gap-5 text-left text-lg text-lightest-grey font-body mq1100:flex-wrap ${className}`}
    >
      <img
        className="h-28 w-[157px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/whitelogo.svg"
      />
      <div className="w-[848px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-1 gap-5 mq1100:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-[5px]">
            <div className="relative leading-[33px] font-medium inline-block min-w-[80px]">
              About Us
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 pb-0 pl-0 pr-[5px]">
            <div className="relative leading-[33px] font-medium inline-block min-w-[35px]">
              FAQ
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 pb-0 pl-0 pr-[5px]">
            <div className="relative leading-[33px] font-medium inline-block min-w-[82px]">
              Sponsors
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[15px] pb-0 pl-0 pr-[5px]">
            <div className="relative leading-[33px] font-medium inline-block min-w-[48px]">
              Team
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 pb-0 pl-0 pr-[5px]">
            <div className="relative leading-[33px] font-medium inline-block min-w-[46px]">
              2023
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-5xl font-font-awesome-5-brands">
            <div className="relative inline-block min-w-[24px] mq450:text-lgi">
              
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-5xl font-font-awesome-5-brands">
            <div className="relative inline-block min-w-[24px] mq450:text-lgi">
              
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-5xl font-font-awesome-5-brands">
            <div className="relative inline-block min-w-[24px] mq450:text-lgi">
              
            </div>
          </div>
          <div className="w-64 flex flex-row items-start justify-start pt-[13px] px-[30px] pb-[5px] box-border relative whitespace-nowrap text-center text-text-secondary">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-lightest-grey" />
            <div className="flex-1 relative leading-[28px] font-semibold z-[1]">
              Applications Open!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
