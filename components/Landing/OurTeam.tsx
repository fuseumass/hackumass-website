import { useState } from "react";
import { motion } from "framer-motion";
import "./OurTeam.css";
import "./Landing.css";
import Image from "next/image";

interface IMembers {
  [key: string]: string[][];
}

const members: IMembers = {
  Directors: [
    ["Dev Mehta", "Co-Director"],
    ["Khiem Nguyen", "Co-Director"],
  ],
  Hardware: [
    ["Kavya Manchanda", "Hardware Co-Director"],
    ["Poul Holm", "Hardware Co-Director"],
    ["Aayan Boradia", "Hardware Member"],
    ["Ananya Rohatgi", "Hardware Member"],
    ["Devaj Chopda", "Hardware Member"],
    ["Franka Yakasovic", "Hardware Member"],
    ["Jessie Wang", "Hardware Member"],
    ["Monil Bhavsar", "Hardware Member"],
    ["Ron Bajrami", "Hardware Member"],
    ["Sreeniyathi Kasireddy", "Hardware Member"],
  ],
  Tech: [
    ["Shiven Patel", "Technology Director"],
    ["Aayush Garg", "Technology Member"],
    ["Manu Hegde", "Technology Member"],
    ["Manya Phutela", "Technology Member"],
    ["Sathvik Yadanaparthi", "Technology Member"],
    ["Shreyas Donti", "Technology Member"],
  ],
  "PR-Design": [
    ["Vianca Varma", "PR/Design Director"],
    ["Anay Liu", "PR/Design Member"],
    ["Hanabel Mengistu", "PR/Design Member"],
    ["Naina Singh", "PR/Design Member"],
    ["Swastika Dev", "PR/Design Member"],
  ],
  Sponsorship: [
    ["Renee Tsang", "Sponsorship Director"],
    ["Joud Zamzami", "Sponsorship Member"],
    ["Mikael Sareshwala", "Sponsorship Member"],
    ["Tawsif Ibne Azad", "Sponsorship Member"],
  ],
  Logistics: [
    ["Addie Padhi", "Logistics Director"],
    ["Aanya Mehta", "Logistics Member"],
    ["Aarav Nair", "Logistics Member"],
    ["Aarav Sehgal", "Logistics Member"],
    ["Brian Zhang", "Logistics Member"],
    ["Dhriti Madireddy", "Logistics Member"],
    ["Uma Purani", "Logistics Member"],
  ],
};

function OurTeam() {
  const [activeTab, setActiveTab] = useState("Directors");

  const tabs = Object.keys(members);

  const createTeamArr = (team: string) => {
    const people = members[team];
    return people.map((e) => {
      const fullName = e[0];
      const role = e[1];
      const [firstName, lastName] = fullName.split(" ");
      return {
        name: fullName,
        role: role,
        image: `/Team/${team}_${firstName}_${lastName}.jpg`,
      };
    });
  };

  const handleTabClick = (team: string) => {
    setActiveTab(team);
  };

  return (
    <section>
      <div id="team" className="container-fluid">
        <div className="LandingAboutHeader2">
          <h1 className="heading">Our Team</h1>
        </div>
        <div style={{ width: "70%", margin: "auto" }} id="team-container">
          <section id="tabs">
            <div className="container">
              <div className="row">
                <div style={{ alignItems: "center", justifyContent: "center" }}>
                  <nav>
                    <div
                      className="nav nav-tabs nav-fill team-categories"
                      id="nav-tab"
                      role="tablist"
                    >
                      {tabs.map((team) => (
                        <a
                          key={team}
                          className={`nav-item nav-link ${
                            activeTab === team ? "active" : ""
                          }`}
                          onClick={() => handleTabClick(team)}
                          href="#!" // Prevents page from scrolling to the top
                        >
                          {team}
                        </a>
                      ))}
                    </div>
                  </nav>
                  <div
                    className="tab-content py-3 px-3 px-sm-0"
                    id="nav-tabContent"
                  >
                    {tabs.map((team) => (
                      <div
                        key={team}
                        className={`tab-pane fade ${
                          activeTab === team ? "show active" : ""
                        }`}
                      >
                        <div className="row gap-y justify-content-center align-items-center mt-3">
                          {createTeamArr(team).map((member, index) => (
                            <div
                              key={index}
                              className="col-lg-3 col-md-6 col-sm-12 text-center team-content"
                            >
                              <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                <Image
                                  className="rounded-circle shadow-2 img-border object-fit-cover"
                                  src={member.image}
                                  alt={member.name}
                                  width={250}
                                  height={250}
                                  sizes="2000"
                                  priority={true}
                                />
                                <h5 className="primary-color role-text">
                                  {member.name}
                                </h5>
                                <h6 className="team-role name-text">
                                  {member.role}
                                </h6>
                              </motion.div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
