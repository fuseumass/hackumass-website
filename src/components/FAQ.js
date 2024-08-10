import FAQQuestion from "./FAQQuestion";
import PropTypes from "prop-types";

const FAQ = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[120px] max-w-full text-center text-45xl text-text-secondary font-heading mq1100:gap-[60px] mq450:gap-[30px] ${className}`}
    >
      <div className="w-[1388px] flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
        <h1 className="m-0 relative text-inherit leading-[131.7%] font-semibold font-[inherit] inline-block max-w-full mq1100:text-32xl mq1100:leading-[67px] mq450:text-19xl mq450:leading-[51px]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[60px] max-w-full text-left text-lg font-body mq1100:gap-[30px]">
        <div className="w-[2080px] flex flex-row items-center justify-between py-0 px-60 box-border max-w-full gap-5 mq1100:pl-[60px] mq1100:pr-[60px] mq1100:box-border mq1700:flex-wrap mq1700:justify-center mq1700:pl-[120px] mq1700:pr-[120px] mq1700:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <FAQQuestion />
          <FAQQuestion />
        </div>
        <div className="w-[2080px] flex flex-row items-center justify-between py-0 px-60 box-border max-w-full gap-5 mq1100:pl-[60px] mq1100:pr-[60px] mq1100:box-border mq1700:flex-wrap mq1700:pl-[120px] mq1700:pr-[120px] mq1700:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <FAQQuestion />
          <FAQQuestion />
        </div>
        <div className="w-[2080px] flex flex-row items-center justify-between py-0 px-60 box-border max-w-full gap-5 mq1100:pl-[60px] mq1100:pr-[60px] mq1100:box-border mq1700:flex-wrap mq1700:pl-[120px] mq1700:pr-[120px] mq1700:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <FAQQuestion />
          <FAQQuestion />
        </div>
        <div className="w-[2080px] flex flex-row items-center justify-between py-0 px-60 box-border max-w-full gap-5 mq1100:pl-[60px] mq1100:pr-[60px] mq1100:box-border mq1700:flex-wrap mq1700:pl-[120px] mq1700:pr-[120px] mq1700:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <FAQQuestion />
          <FAQQuestion />
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
