import { useEffect } from "react";
import { motion } from "framer-motion";
import "./OurTeam.css";
import "./Landing.css";

export default function OurTeam() {
  useEffect(() => {
    const members = {
      Directors: [
        ["Dev Mehta", "Co-Director"],
        ["Addie Padhi", "Co-Director"],
        ["Devaj Chopda", "Assistant Co-Director"],
      ],
      Hardware: [
        ["Monil Bhavsar", "Hardware Director"],
        ["Jessie Wang", "Hardware Director"],
        ["Anaika Pathak", "Hardware Member"],
        ["Lucas Crawshaw", "Hardware Member"],
        ["Sreeniyathi Kasireddy", "Hardware Member"],
      ],
      Tech: [
        ["Sathvik Yadanaparthi", "Technology Director"],
        ["Keerthi Chebrolu", "Technology Member"],
        ["Tamanna Chandak", "Technology Member"],
        ["Noah Shayne", "Technology Member"],
      ],
      "PR-Design": [
         ["Vianca Varma", "PR/Design Director"],
        ["Arundhati Vasishth", "PR/Design Member"],
        ["Kashvi Kapoor", "PR/Design Member"],
        ["Anay Liu", "PR/Design Member"],
        ["Lana Vu", "PR/Design Member"],
        ["Naina Singh", "PR/Design Member"],
      ],
      Sponsorship: [
        ["Aanya Mehta", "Sponsorship Director"],
        ["Joud Zamzami", "Sponsorship Member"],
        ["Paulan Huang", "Sponsorship Member"],
        ["Sneha Agarwal", "Sponsorship Member"],
        ["Urvi Gupta", "Sponsorship Member"],
        ["Mikael Sareshwala", "Sponsorship Member"],
      ],
      Logistics: [
        ["Aarav Sehgal", "Logistics Director"],
        ["Dhriti Madireddy", "Logistics Director"],
        ["Anagha Panamakuri", "Logistics Member"],
        ["Gaurang Patil", "Logistics Member"],
        ["Shriya Gautam", "Logistics Member"],
      ],
    };

    /* Get tab objects */
    const directorsTab = document.getElementById("nav-directors");
    const hardwareTab = document.getElementById("nav-hardware");
    const logisticsTab = document.getElementById("nav-logistics");
    const prdesignTab = document.getElementById("nav-prdesign");
    const sponsorshipTab = document.getElementById("nav-sponsorship");
    const technologyTab = document.getElementById("nav-technology");

    const tabs = [
      directorsTab,
      hardwareTab,
      logisticsTab,
      prdesignTab,
      sponsorshipTab,
      technologyTab,
    ];

    const createTeamArr = (team) => {
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

    const makeRowDivElement = () => {
      const rowDivElement = document.createElement("div");
      rowDivElement.classList.add(
        "row",
        "gap-y",
        "justify-content-center",
        "align-items-center",
        "mt-3"
      );
      return rowDivElement;
    };

    const makeColDivElement = (memberObj) => {
      const colDivElement = document.createElement("div");
      colDivElement.classList.add(
        "col-lg-3",
        "col-md-6",
        "col-sm-12",
        "text-center",
        "team-content"
      );

      const imageSrc = memberObj.image
        ? memberObj.image
        : "public/Team/Default.jpg";
      
      const memberContent = document.createElement("div");
      memberContent.innerHTML = `
        <div class="flex flex-col items-center">
          <img class="rounded-full shadow-2xl border content-center fix-size"
              src="${imageSrc}"
              alt="${memberObj.name}"
              onerror="this.onerror=null;this.src='/Team/Default.jpg';" />
          <h5 class="text-primary role-text">${memberObj.name}</h5>
          <h6 class="team-role name-text">${memberObj.role}</h6>
        </div>
      `;
      colDivElement.appendChild(memberContent);

      return colDivElement;
    };

    const teams = [
      createTeamArr("Directors"),
      createTeamArr("Hardware"),
      createTeamArr("Logistics"),
      createTeamArr("PR-Design"),
      createTeamArr("Sponsorship"),
      createTeamArr("Tech"),
    ];

    tabs.forEach((tab) => (tab.innerHTML = ""));

    teams.forEach((team, i) => {
      const row = makeRowDivElement();
      team.forEach((memberObj) => {
        row.appendChild(makeColDivElement(memberObj));
      });
      tabs[i].appendChild(row);
    });

    document.querySelectorAll(".nav-link").forEach((tab) => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        document
          .querySelectorAll(".nav-link")
          .forEach((link) => link.classList.remove("active"));
        document
          .querySelectorAll(".tab-pane")
          .forEach((pane) => pane.classList.remove("show", "active"));

        this.classList.add("active");
        const target = document.querySelector(this.getAttribute("href"));
        target.classList.add("show", "active");
      });
    });
  }, []);

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
                      <a
                        className="nav-item nav-link active"
                        id="nav-directors-tab"
                        data-toggle="tab"
                        href="#nav-directors"
                        role="tab"
                        aria-controls="nav-directors"
                        aria-selected="true"
                      >
                        Directors
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-hardware-tab"
                        data-toggle="tab"
                        href="#nav-hardware"
                        role="tab"
                        aria-controls="nav-hardware"
                        aria-selected="true"
                      >
                        Hardware
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-logistics-tab"
                        data-toggle="tab"
                        href="#nav-logistics"
                        role="tab"
                        aria-controls="nav-logistics"
                        aria-selected="false"
                      >
                        Logistics
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-prdesign-tab"
                        data-toggle="tab"
                        href="#nav-prdesign"
                        role="tab"
                        aria-controls="nav-prdesign"
                        aria-selected="false"
                      >
                        PR/Design
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-sponsorship-tab"
                        data-toggle="tab"
                        href="#nav-sponsorship"
                        role="tab"
                        aria-controls="nav-sponsorship"
                        aria-selected="false"
                      >
                        Sponsorship
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-technology-tab"
                        data-toggle="tab"
                        href="#nav-technology"
                        role="tab"
                        aria-controls="nav-technology"
                        aria-selected="false"
                      >
                        Technology
                      </a>
                    </div>
                  </nav>
                  <div
                    className="tab-content py-3 px-3 px-sm-0"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-directors"
                      role="tabpanel"
                      aria-labelledby="nav-directors-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="nav-hardware"
                      role="tabpanel"
                      aria-labelledby="nav-hardware-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="nav-logistics"
                      role="tabpanel"
                      aria-labelledby="nav-logistics-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="nav-prdesign"
                      role="tabpanel"
                      aria-labelledby="nav-prdesign-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="nav-sponsorship"
                      role="tabpanel"
                      aria-labelledby="nav-sponsorship-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="nav-technology"
                      role="tabpanel"
                      aria-labelledby="nav-technology-tab"
                    ></div>
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
