import { useEffect } from "react";
import "./OurTeam.css";
import "./Landing.css";

export default function OurTeam() {
  useEffect(() => {
    const members = {
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
        ["Saniya Jain", "Sponsorship Member"],
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
      colDivElement.innerHTML = `
                <img class="rounded-circle shadow-2 img-border object-fit-cover" 
                    src="${imageSrc}" alt="${memberObj.name}" onerror="this.onerror=null;this.src='/Team/Default.jpg';" style=""/>
                <h5 class="primary-color role-text">${memberObj.name}</h5>
                <h6 class="team-role name-text">${memberObj.role}</h6>
            `;
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
      <div id="team" class="container-fluid">
        <div className="LandingAboutHeader">
          <h1 className="heading">Our Team</h1>
        </div>
        <div style={{ width: "70%", margin: "auto" }} id="team-container">
          <section id="tabs">
            <div class="container">
              <div class="row">
                <div style={{ alignItems: "center", justifyContent: "center" }}>
                  <nav>
                    <div
                      class="nav nav-tabs nav-fill team-categories"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        class="nav-item nav-link active"
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
                        class="nav-item nav-link"
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
                        class="nav-item nav-link"
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
                        class="nav-item nav-link"
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
                        class="nav-item nav-link"
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
                        class="nav-item nav-link"
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
                    class="tab-content py-3 px-3 px-sm-0"
                    id="nav-tabContent"
                  >
                    <div
                      class="tab-pane fade show active"
                      id="nav-directors"
                      role="tabpanel"
                      aria-labelledby="nav-directors-tab"
                    ></div>
                    <div
                      class="tab-pane fade"
                      id="nav-hardware"
                      role="tabpanel"
                      aria-labelledby="nav-hardware-tab"
                    ></div>
                    <div
                      class="tab-pane fade"
                      id="nav-logistics"
                      role="tabpanel"
                      aria-labelledby="nav-logistics-tab"
                    ></div>
                    <div
                      class="tab-pane fade"
                      id="nav-prdesign"
                      role="tabpanel"
                      aria-labelledby="nav-prdesign-tab"
                    ></div>
                    <div
                      class="tab-pane fade"
                      id="nav-sponsorship"
                      role="tabpanel"
                      aria-labelledby="nav-sponsorship-tab"
                    ></div>
                    <div
                      class="tab-pane fade"
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
