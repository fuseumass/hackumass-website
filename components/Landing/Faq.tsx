import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  const faqItems = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a competitive sprint where people come together to collaborate and build innovative software and hardware projects to win prizes. However, students also have the option to participate in other activities instead of submitting a project."
    },
    {
      question: "Where is HackUMass XII?",
      answer: "HackUMass XII is an in-person hackathon on the University of Massachusetts Amherst campus, with the main venue located at the Integrative Learning Center (650 N Pleasant St, Amherst, MA 01003)."
    },
    {
      question: "Who can attend?",
      answer: "HackUMass XII is open to ALL college students, including graduate students, regardless of major!"
    },
    {
      question: "Will my travel be reimbursed?",
      answer: "Unfortunately, we are unable to reimburse travel expenses for HackUMass XII."
    },
    {
      question: "Do I have to work on a project?",
      answer: "No, participants are welcome to attend workshops, the club/sponsor fair, and network with sponsors or other students without submitting a final project! For final project submissions, the project does NOT need to be fully finished."
    },
    {
      question: "Do I need experience?",
      answer: "We welcome students of all experience levels to participate in HackUMass! Participants will find a variety of workshops ranging from beginner-friendly to advanced, mentors, and plenty of resources to help everyone learn something new."
    },
    {
      question: "Should I be in a team?",
      answer: "We encourage participants to form a team of four (or fewer). While teams with more than four members are allowed, prizes for each member are not guaranteed beyond that size. There will be opportunities to form teams prior to the event via our event Discord server, but there will also be a team-forming event following the opening ceremony on day 1 of the event."
    },
    {
      question: "Can I start my project before the event?",
      answer: "No, participants are required to start their projects after the opening ceremony and hacking formally begins. If a project is created or edited beforehand, it will result in disqualification."
    },
    {
      question: "Do I have to stay for 36 hours?",
      answer: "No, participants are encouraged to take breaks and rest throughout the event. However, teams submitting a final project must have at least one member present during the judging process on the last day."
    },
    {
      question: "Is there a Code of Conduct?",
      answer: "We are committed to creating a safe environment for everyone at HackUMass. Therefore, all attendees are expected to follow the MLH Code of Conduct and abide by the University of Massachusetts Amherst Code of Student Conduct."
    },
    {
      question: "Where can I get more information?",
      answer: "For information about check-in, swag pick-up, the opening/closing ceremony, hardware check-out, and more before November 8th, 2024, please follow us @hackumass on Instagram for updates. For specific inquiries or questions, please email us at team@hackumass.com. An event Discord server will be used as the main platform for communication and real-time event updates. During the 36-hour hackathon, please use the event Discord server to connect directly with an organizer or stop by the organizer room in the Integrative Learning Center (ILC)."
    }
  ];

  return (
    <div className="FAQ" id="faq">
      <div className="LandingAboutHeader2">
        <h1 className="heading">Frequently Asked Questions</h1>
      </div>
      <div className="FAQContent">
        {faqItems.map((item, index) => (
          <div key={index} className="FAQContentItem">
            <h3 className="FAQContentItemHeading">
              <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;{item.question}
            </h3>
            <p className="FAQContentItemText">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
