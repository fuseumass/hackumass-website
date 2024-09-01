import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  return (
    <div className="FAQ" id="faq">
      <div className="LandingAboutHeader2">
        <h1 className="heading">Frequently Asked Questions</h1>
      </div>
      <div className="FAQContent">
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a
            hackathon?
          </h3>
          <p className="FAQContentItemText">
            Hackathons are events where programmers come together to collaborate
            on innovative software and hardware projects. You’re encouraged to
            build anything your imagination inspires! “Innovation is the ability
            to see change as an opportunity–not a threat.” - Steve Jobs
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Where is it?
          </h3>
          <p className="FAQContentItemText">
            HackUMass XII is an in-person hackathon hosted by UMass Amherst.
            This includes check-in, hardware checkout, swag pickup,
            participation and judging. Mentoring and most workshops will also
            take place in-person. More details regarding the career fair,
            opening and closing ceremonies, and catering will be given closer to
            the hackathon!
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Do I need
            experience?
          </h3>
          <p className="FAQContentItemText">
            We’re excited to welcome hackers of all experience levels to
            HackUMass! Whether you’re new to software and hardware hacking or
            looking to sharpen your skills, our beginner track is designed to
            help you get started with confidence. Plus, our team of mentors will
            be on hand throughout the event to guide you through any challenges
            you encounter.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Who can attend?
          </h3>
          <p className="FAQContentItemText">
            HackUMass XII is open to all college and university students,
            regardless of major! Our goal is for you to leave with new
            experiences, lasting friendships, and, of course, a satisfied
            appetite.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Can I start my
            project before the event?
          </h3>
          <p className="FAQContentItemText">
            While getting a head start is a smart strategy, we require every
            participant to start their project during the hours of hacking. Any
            hint of a project being created/edited before the event will cause
            instant disqualification.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Should I be in a
            team?
          </h3>
          <p className="FAQContentItemText">
            Absolutely! We highly encourage everyone to get in a team of 4 or
            less. There is no stopping you from going at it solo or working
            within a team of more than 4. However, we are unable to guarantee
            that every member of your team will be able to receive prizes if you
            win. There will be plenty of opportunities to form your team online
            and at the event -- so don't worry if you haven't yet planned it
            out.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Will my travel
            be reimbursed?
          </h3>
          <p className="FAQContentItemText">
            Unfortunately we are unable to reimburse travel expenses for
            HackUMass XII. Kindly reach out to us if you have any concerns or
            questions regarding this.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            {" "}
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Is there a Code
            of Conduct we need to abide by?
          </h3>
          <p className="FAQContentItemText">
            We want to create a safe environment for participants, speakers, and
            sponsors. For this reason, we expect everyone to follow the MLH Code
            of Conduct.
          </p>
        </div>
      </div>
    </div>
  );
}
