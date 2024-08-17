import PropTypes from "prop-types";

const Question = ({ question, answer }) => {
  return (
    <div
      className={`w-[500px] relative max-w-full flex flex-col items-center justify-start gap-[15px] text-left text-base text-text-secondary font-body`}
    >
      <div className="self-stretch relative leading-[181.53%]">{question}</div>
      <div className="self-stretch relative text-sm leading-[204.27%] font-light">
        {answer}
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default Question;
