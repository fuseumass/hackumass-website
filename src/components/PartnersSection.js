import PropTypes from "prop-types";

const PartnersSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[30px] max-w-full text-center text-45xl text-text-secondary font-heading ${className}`}
    >
      <div className="w-[2080px] flex flex-row items-start justify-start max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit leading-[131.7%] font-semibold font-[inherit] whitespace-pre-wrap inline-block max-w-full mq1100:text-32xl mq1100:leading-[67px] mq450:text-19xl mq450:leading-[51px]">
          Our Partners
        </h1>
      </div>
      <div className="w-[2080px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-8 box-border gap-x-[60px] gap-y-[34.5px] max-w-full mq1100:gap-[17px]">
          <div className="w-[657px] flex flex-col items-end justify-start gap-[106px] max-w-full mq1100:gap-[53px] mq450:gap-[26px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[23px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[60px] max-w-full mq1100:flex-wrap mq1100:gap-[30px]">
                <img
                  className="h-[115px] w-[273px] relative object-cover mq1100:flex-1"
                  alt=""
                  src="/image-17@2x.png"
                />
                <img
                  className="h-52 flex-1 relative max-w-full overflow-hidden object-cover min-w-[196px]"
                  loading="lazy"
                  alt=""
                  src="/image-20@2x.png"
                />
              </div>
            </div>
            <img
              className="w-[622px] relative max-h-full object-cover max-w-full"
              alt=""
              src="/image-15-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[60px] min-w-[512px] max-w-full mq1100:gap-[30px] mq1100:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq1100:gap-[30px] mq1700:flex-wrap">
              <img
                className="h-[254px] w-[511px] relative object-cover max-w-full mq1700:flex-1"
                loading="lazy"
                alt=""
                src="/image-13-2@2x.png"
              />
              <img
                className="h-[118px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[461px] mq1100:min-w-full"
                loading="lazy"
                alt=""
                src="/image-14-1@2x.png"
              />
            </div>
            <div className="w-[1255.5px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full mq1100:gap-[30px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[60px] max-w-full mq1100:gap-[30px] mq1700:flex-wrap">
                    <img
                      className="h-[346px] w-[311px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-16@2x.png"
                    />
                    <img
                      className="w-[568px] relative max-h-full object-cover max-w-full"
                      loading="lazy"
                      alt=""
                      src="/image-19@2x.png"
                    />
                    <img
                      className="h-[221px] w-[222px] relative object-cover"
                      alt=""
                      src="/image-18@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="w-[564px] relative max-h-full object-cover max-w-full"
                  alt=""
                  src="/image-15-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PartnersSection.propTypes = {
  className: PropTypes.string,
};

export default PartnersSection;
