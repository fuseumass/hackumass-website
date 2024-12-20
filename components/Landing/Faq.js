import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Faq() {
  return (
    <div className="FAQ" id="faq">
      <div className="LandingAboutHeader2">
        <h1 className="heading">Frequently Asked Questions</h1>
      </div>
      <div className="FAQContent">
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?
          </h3>
          <p className="FAQContentItemText">
            A hackathon is a competitive sprint where people come together to collaborate and build innovative software and hardware projects to win prizes. However, students also have the option to participate in other activities instead of submitting a project.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Where is HackUMass XII?
          </h3>
          <p className="FAQContentItemText">
            HackUMass XII is an in-person hackathon on the University of Massachusetts Amherst campus, with the main venue located at the Integrative Learning Center (650 N Pleasant St, Amherst, MA 01003).
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Who can attend?
          </h3>
          <p className="FAQContentItemText">
            HackUMass XII is open to ALL college students, including graduate students, regardless of major!
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Will my travel be reimbursed?
          </h3>
          <p className="FAQContentItemText">
            Unfortunately, we are unable to reimburse travel expenses for HackUMass XII.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Do I have to work on a project?
          </h3>
          <p className="FAQContentItemText">
            No, participants are welcome to attend workshops, the club/sponsor fair, and network with sponsors or other students without submitting a final project! For final project submissions, the project does NOT need to be fully finished.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Do I need experience?
          </h3>
          <p className="FAQContentItemText">
            We welcome students of all experience levels to participate in HackUMass! Participants will find a variety of workshops ranging from beginner-friendly to advanced, mentors, and plenty of resources to help everyone learn something new.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Should I be in a team?
          </h3>
          <p className="FAQContentItemText">
            We encourage participants to form a team of four (or fewer). While teams with more than four members are allowed, prizes for each member are not guaranteed beyond that size. There will be opportunities to form teams prior to the event via our event Discord server, but there will also be a team-forming event following the opening ceremony on day 1 of the event.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Can I start my project before the event?
          </h3>
          <p className="FAQContentItemText">
            No, participants are required to start their projects after the opening ceremony and hacking formally begins. If a project is created or edited beforehand, it will result in disqualification.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Do I have to stay for 36 hours?
          </h3>
          <p className="FAQContentItemText">
            No, participants are encouraged to take breaks and rest throughout the event. However, teams submitting a final project must have at least one member present during the judging process on the last day.
          </p>
        </div>
        <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Is there a Code of Conduct?
          </h3>
          <p className="FAQContentItemText" style={{display: "inline"}}>
            We are committed to creating a safe environment for everyone at HackUMass. Therefore, all attendees are expected to follow the <Link style={{ color: "#68BBE3" }} href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"} rel="noopener noreferrer" target="_blank">MLH Code of Conduct</Link> and abide by the <Link style={{ color: "#68BBE3" }} href={"https://www.umass.edu/dean_students/sites/default/files/documents/07.01.2019%20Code%20of%20Student%20Conduct.pdf"} rel="noopener noreferrer" target="_blank">University of Massachusetts Amherst Code of Student Conduct</Link>.
          </p>
        </div>
        {/* <div className="FAQContentItem">
          <h3 className="FAQContentItemHeading">
            <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Where can I get more information?
          </h3>
          <p className="FAQContentItemText">
            For information about check-in, swag pick-up, the opening/closing ceremony, hardware check-out, and more before November 8th, 2024, please follow us @hackumass on Instagram for updates. For specific inquiries or questions, please email us at team@hackumass.com. An event Discord server will be used as the main platform for communication and real-time event updates. During the 36-hour hackathon, please use the event Discord server to connect directly with an organizer or stop by the organizer room in the Integrative Learning Center (ILC).
          </p>
        </div> */}
      </div>
    </div>
  );
}