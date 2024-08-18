import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
    return (
        <div className="FAQ" id="faq">
            <div className="LandingAboutHeader">
                <h1 className="heading">Frequently Asked Questions</h1>
            </div>
            <div className="FAQContent">
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                    <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                </div>
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Where is it?</h3>
                    <p className="FAQContentItemText">HackUMass XII will be completely in-person this year. This includes check-in, hardware checkout, swag pickup, participation and judging. Mentoring and most workshops will also take place in-person. More details regarding the career fair, opening and closing ceremonies, and catering will be given closer to the hackathon.</p>
                </div>
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Who's coming?</h3>
                    <p className="FAQContentItemText">We expect over 1000 hackers from across the U.S. to attend our hackathon.</p>
                </div>
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Who can attend?</h3>
                    <p className="FAQContentItemText">Participation in HackUMass XII is not limited to UMass Amherst students. The hackathon and the workshops are open to all college/university students, across all majors!</p>
                </div>
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Do I need experience?</h3>
                    <p className="FAQContentItemText">We welcome hackers of all experience levels to HackUMass! Our beginner track will help hackers who want to learn more about software and hardware hacking get started. We will also have mentors willing to help if you run into any problems during the event.</p>
                </div>
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Should I join a team?</h3>
                    <p className="FAQContentItemText">We encourage everyone to work in a team of up to 4 people. Larger teams are allowed, but we are unable to guarantee that every member of your team will be able to receive prizes if you win. There will be plenty of opportunities to form your team online and at the event -- so don't worry if you haven't yet planned it out.</p>
                </div>
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Can I start my project before the event?</h3>
                    <p className="FAQContentItemText">No, you may not start your project beforehand. All of the work related to the project must be done during the event.</p>
                </div>
                <div className="FAQContentItem">
                    <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;Is there a Code of Conduct we need to abide by?</h3>
                    <p className="FAQContentItemText">Be smart about your actions. We enforce the MLH Code of Conduct at our event.</p>
                </div>
            </div>
        </div>
    )
}