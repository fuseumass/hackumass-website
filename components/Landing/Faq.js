import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Faq() {
  const [faqs, setFaqs] = useState([
    ["What is a hackathon?", " A hackathon is a competitive sprint where people come together to collaborate and build innovative software and hardware projects to win prizes. However, students also have the option to participate in other activities instead of submitting a project."],
    ["Where is HackUMass XII?", "HackUMass XII is an in-person hackathon on the University of Massachusetts Amherst campus, with the main venue located at the Integrative Learning Center (650 N Pleasant St, Amherst, MA 01003)."],
    ["Who can attend?", "HackUMass XII is open to ALL college students, including graduate students, regardless of major!"],
    ["Will my travel be reimbursed?", "Unfortunately, we are unable to reimburse travel expenses for HackUMass XII."],
    ["Do I have to work on a project?", "No, participants are welcome to attend workshops, the club/sponsor fair, and network with sponsors or other students without submitting a final project! For final project submissions, the project does NOT need to be fully finished."],
    ["Do I need experience?", "We welcome students of all experience levels to participate in HackUMass! Participants will find a variety of workshops ranging from beginner-friendly to advanced, mentors, and plenty of resources to help everyone learn something new."],
    ["Should I be in a team?", "We encourage participants to form a team of four (or fewer). While teams with more than four members are allowed, prizes for each member are not guaranteed beyond that size. There will be opportunities to form teams prior to the event via our event Discord server, but there will also be a team-forming event following the opening ceremony on day 1 of the event."],
    ["Can I start my project before the event?", "No, participants are required to start their projects after the opening ceremony and hacking formally begins. If a project is created or edited beforehand, it will result in disqualification."],
    ["Do I have to stay for 36 hours?", "No, participants are encouraged to take breaks and rest throughout the event. However, teams submitting a final project must have at least one member present during the judging process on the last day."],
    ["Is there a Code of Conduct?", "We are committed to creating a safe environment for everyone at HackUMass. Therefore, all attendees are expected to follow the <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</a> and abide by the <a href='https://www.umass.edu/dean_students/sites/default/files/documents/07.01.2019%20Code%20of%20Student%20Conduct.pdf'>University of Massachusetts Amherst Code of Student Conduct</a>."]
  ]);

  return (
    <div className="FAQ" id="faq">
      <div className="LandingAboutHeader2">
        <h1 className="heading">Frequently Asked Questions</h1>
      </div>
      <div className="FAQContent">
        {faqs.map((faq, index) => {
          return (
            <div className="FAQContentItem">
              <h3 className="FAQContentItemHeading">
                <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp; {faq[0]}
              </h3>
                <div
                  className="FAQContentItemText !block [&_a]:inline [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: faq[1] }}
                />
            </div>
          )
        })}
      </div>
    </div>
  );
}