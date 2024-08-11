import PropTypes from "prop-types";

const Question = ({ className = "" }) => {
  return (
    <div
      className={`w-[500px] relative max-w-full flex flex-col items-center justify-start gap-[15px] text-left text-base text-text-secondary font-body ${className}`}
    >
      <div className="self-stretch relative leading-[181.53%]">
        What is a hackathon?
      </div>
      <div className="self-stretch relative text-sm leading-[204.27%] font-light">
        A hackathon is where students bring their cool ideas to life. Over the
        course of 36 hours, participants can use software and/or hardware to
        build their idea and win prizes, whether as a team or as an individual.
      </div>
    </div>
  );
};

Question.propTypes = {
  className: PropTypes.string,
};

export default Question;
