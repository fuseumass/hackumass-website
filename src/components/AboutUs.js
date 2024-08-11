import { useEffect } from "react";
import PropTypes from "prop-types";

const AboutUs = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[90px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[300] text-center text-45xl text-text-secondary font-heading `}
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[60px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit]">
            Why HackUMass?
          </h1>
          <div className="self-stretch relative text-lg leading-[181.53%] font-medium font-body">
            Welcome to HackUMass, a 36-hour hackathon where college students
            come together to learn, connect, and build their dream projects.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[60px] text-lightest-grey">
        <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
          <div className="w-[1120px] rounded-63xl h-[707px] flex flex-col items-center justify-end pt-0 px-[300px] pb-[30px] box-border bg-[url('/public/why-hackumass-photo@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit]">
                Extensive Hardware
              </h1>
              <div className="self-stretch relative text-lg leading-[181.53%] font-medium font-body whitespace-pre-wrap">{`From Arduinos to Raspberry Pis to Quadcopters and Oculus Rifts, HackUMass has an extensive hardware  toolkit to help you realize your wildest ideas `}</div>
            </div>
          </div>
          <img
            className="w-[142px] relative h-[15.8px] object-cover"
            alt=""
            src="/navigator@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
