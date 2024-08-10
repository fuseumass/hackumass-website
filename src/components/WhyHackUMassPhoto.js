import PropTypes from "prop-types";

const WhyHackUMassPhoto = ({ className = "" }) => {
  return (
    <div
      className={`w-[1674px] rounded-63xl flex flex-col items-center justify-end py-[30px] px-5 box-border bg-[url('/public/why-hackumass-photo@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[1057px] max-w-full text-center text-45xl text-lightest-grey font-heading ${className}`}
    >
      <div className="w-[1074px] flex flex-col items-center justify-start max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit] mq1100:text-32xl mq1100:leading-[67px] mq450:text-19xl mq450:leading-[51px]">
          Extensive Hardware
        </h1>
        <div className="self-stretch relative text-lg leading-[181.53%] font-medium font-body whitespace-pre-wrap">{`From Arduinos to Raspberry Pis to Quadcopters and Oculus Rifts, HackUMass has an extensive hardware  toolkit to help you realize your wildest ideas `}</div>
      </div>
    </div>
  );
};

WhyHackUMassPhoto.propTypes = {
  className: PropTypes.string,
};

export default WhyHackUMassPhoto;
