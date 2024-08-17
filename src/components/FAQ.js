import { useEffect } from "react";
import Question from "./Question";
import PropTypes from "prop-types";

const FAQ = () => {
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
      className={`self-stretch flex flex-col items-center justify-start gap-[90px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-center text-45xl text-text-secondary font-heading `}
      data-animate-on-scroll
    >
      <div className="flex flex-col items-center justify-start py-0 px-[60px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[60px] gap-[60px] lg:pl-[30px] lg:pr-[30px] lg:box-border md:gap-[15px] sm:gap-[15px] sm:pl-[30px] sm:box-border">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[30px] md:items-start md:justify-start">
          <Question
            question="What is a hackathon?"
            answer="A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual."
          />
          <Question
            question="Where is it?"
            answer="HackUMass XII will be completely in-person this year. This includes check-in, hardware checkout, swag pickup, participation and judging. Mentoring and most workshops will also take place in-person. More details regarding the career fair, opening and closing ceremonies, and catering will be given closer to the hackathon."
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[15px] md:items-start md:justify-start">
          <Question
            question="Who's coming?"
            answer="We expect over 1000 hackers from across the U.S. to attend our hackathon."
          />
          <Question
            question="Who can attend?"
            answer="Participation in HackUMass XII is not limited to UMass Amherst students. The hackathon and the workshops are open to all college/university students, across all majors!"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[15px] md:items-start md:justify-start">
          <Question
            question="Do I need experience?"
            answer="We welcome hackers of all experience levels to HackUMass! Our beginner track will help hackers who want to learn more about software and hardware hacking get started. We will also have mentors willing to help if you run into any problems during the event."
          />
          <Question
            question="Should I join a team?"
            answer="We encourage everyone to work in a team of up to 4 people. Larger teams are allowed, but we are unable to guarantee that every member of your team will be able to receive prizes if you win. There will be plenty of opportunities to form your team online and at the event -- so don't worry if you haven't yet planned it out."
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[15px] md:items-start md:justify-start">
          <Question
            question="Can I start my project before the event?"
            answer="No, you may not start your project beforehand. All of the work related to the project must be done during the event."
          />
          <Question
            question="Is there a Code of Conduct we need to abide by?"
            answer="Be smart about your actions. We enforce the MLH Code of Conduct at our event."
          />
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
