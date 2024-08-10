import PropTypes from "prop-types";

const FAQQuestion = ({ className = "" }) => {
  return (
    <div
      className={`w-[600px] flex flex-col items-center justify-start gap-[15px] max-w-full text-left text-lg text-text-secondary font-body ${className}`}
    >
      <div className="self-stretch relative leading-[33px] font-medium">
        What is a hackathon?
      </div>
      <div className="self-stretch relative text-base leading-[181.53%] inline-block min-h-[117px]">
        <p className="m-0">
          A hackathon is where students bring their cool ideas to life. Over the
          course of 36 hours, participants can use software and/or hardware to
          build their idea and win prizes, whether as a team or as an
          individual.
        </p>
      </div>
    </div>
  );
};

FAQQuestion.propTypes = {
  className: PropTypes.string,
};

export default FAQQuestion;
