import { useEffect } from "react";
import './core.min.css';
import './OurTeam.css';
import "./Landing.css";

export default function OurTeam() {
    useEffect(() => {
        const members = {
            "Directors": 
            [
                ["Dev Mehta", "Co-Director"],
                ["Khiem Nguyen", "Co-Director"]
            ],
            "Hardware":
            [
                ["Kavya Manchanda", "Hardware Co-Director"],
                ["Poul Holm", "Hardware Co-Director"],
                ["Sreeniyathi Kasireddy", "Hardware Member"],
                ["Ananya Rohatgi", "Hardware Member"],
                ["Franka Yakasovic Aqueveque", "Hardware Member"],
                ["Ron Bajrami", "Hardware Member"],
                ["Devaj Chopda", "Hardware Member"],
                ["Aayan Boradia", "Hardware Member"],
                ["Monil Bhavsar", "Hardware Member"],
                ["Jessie Wang", "Hardware Member"]
            ],
            "Tech":
            [
                ["Shiven Patel", "Technology Director"],
                ["Shreyas Donti", "Technology Member"],
                ["Sathvik Yadanaparthi", "Technology Member"],
                ["Manu Hegde", "Technology Member"],
                ["Manya Phutela", "Technology Member"],
                ["Aayush Garg", "Technology Member"]
            ],
            "PR-Design":
            [
                ["Vianca Varma", "PR/Design Director"],
                ["Hanabel Mengistu", "PR/Design Member"],
                ["Naina Singh", "PR/Design Member"],
                ["Anay Liu", "PR/Design Member"],
                ["Swastika Dev", "PR/Design Member"]
            ],
            "Sponsorship":
            [
                ["Renee Tsang", "Sponsorship Director"],
                ["Joud Zamzami", "Sponsorship Member"],
                ["Mikael Sareshwala", "Sponsorship Member"],
                ["Tawsif Ibne Azad", "Sponsorship Member"],
                ["Saniya Jain", "Sponsorship Member"]
            ],
            "Logistics":
            [
                ["Addie Padhi", "Logistics Director",],
                ["Brian Zhang", "Logistics Member"],
                ["Dhriti Madireddy", "Logistics Member"],
                ["Uma Purani", "Logistics Member"],
                ["Aarav Nair", "Logistics Member"],
                ["Aanya Mehta", "Logistics Member"],
                ["Aarav Sehgal", "Logistics Member"]
            ]
        }
        
        /* Get tab objects */
        const directorsTab = document.getElementById('nav-directors');
        const hardwareTab = document.getElementById('nav-hardware');
        const logisticsTab = document.getElementById('nav-logistics');
        const prdesignTab = document.getElementById('nav-prdesign');
        const sponsorshipTab = document.getElementById('nav-sponsorship');
        const technologyTab = document.getElementById('nav-technology');

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
                image: `/${team}_${firstName}_${lastName}.jpg`,
                };
          });
        };
        
        const makeRowDivElement = () => {
          const rowDivElement = document.createElement('div');
          rowDivElement.classList.add(
            'row',
            'gap-y',
            'justify-content-center',
            'align-items-center',
            'mt-3',
          );
          return rowDivElement;
        };
        
        const makeColDivElement = (memberObj) => {
          const colDivElement = document.createElement('div');
          colDivElement.classList.add(
            'col-lg-3',
            'col-md-6',
            'col-sm-12',
            'text-center',
            'team-content'
          );
          colDivElement.innerHTML = `
                <img class="rounded-circle shadow-2 img-border object-fit-cover" onerror="this.src='/Default.jpg'" 
                    src="${memberObj.image}" alt="${memberObj.name}" style=""/>
                <h5 class="primary-color role-text">${memberObj.name}</h5>
                <h6 class="team-role role-text">${memberObj.role}</h6>
            `;
          return colDivElement;
        };
        
        // const directorsTeam = createTeamArr("Directors");
        // const hardwareTeam = createTeamArr("Hardware");
        // const logisticsTeam = createTeamArr("Logistics");
        // const prdesignTeam = createTeamArr("PR-Design");
        // const sponsorshipTeam = createTeamArr("Sponsorship");
        // const technologyTeam = createTeamArr("Tech");
        
        const teams = [
          createTeamArr("Directors"),
          createTeamArr("Hardware"),
          createTeamArr("Logistics"),
          createTeamArr("PR-Design"),
          createTeamArr("Sponsorship"),
          createTeamArr("Tech"),
      ];
        
      tabs.forEach(tab => tab.innerHTML = '');

      teams.forEach((team, i) => {
          const row = makeRowDivElement();
          team.forEach((memberObj) => {
              row.appendChild(makeColDivElement(memberObj));
          });
          tabs[i].appendChild(row);
      });

      document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));

            this.classList.add('active');
            const target = document.querySelector(this.getAttribute('href'));
            target.classList.add('show', 'active');
        });
    });
    }, []);
      

    return (
        <section>
          <div class="container-fluid" >
            <div className="LandingAboutHeader">
                <h1 className="heading">Our Team</h1>
                <br></br>
                <h3 >Meet the people behind it!</h3>
                <br></br>
            </div>
            <div style={{width: "70%", margin: "auto"}} id="team-container">
            <section id="tabs">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 ">
                            <nav>
                                <div class="nav nav-tabs nav-fill team-categories" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-directors-tab" data-toggle="tab" href="#nav-directors" role="tab" aria-controls="nav-directors" aria-selected="true">Directors</a>
                                    <a class="nav-item nav-link" id="nav-hardware-tab" data-toggle="tab" href="#nav-hardware" role="tab" aria-controls="nav-hardware" aria-selected="true">Hardware</a>
                                    <a class="nav-item nav-link" id="nav-logistics-tab" data-toggle="tab" href="#nav-logistics" role="tab" aria-controls="nav-logistics" aria-selected="false">Logistics</a>
                                    <a class="nav-item nav-link" id="nav-prdesign-tab" data-toggle="tab" href="#nav-prdesign" role="tab" aria-controls="nav-prdesign" aria-selected="false">PR/Design</a>
                                    <a class="nav-item nav-link" id="nav-sponsorship-tab" data-toggle="tab" href="#nav-sponsorship" role="tab" aria-controls="nav-sponsorship" aria-selected="false">Sponsorship</a>
                                    <a class="nav-item nav-link" id="nav-technology-tab" data-toggle="tab" href="#nav-technology" role="tab" aria-controls="nav-technology" aria-selected="false">Technology</a>
                                </div>
                            </nav>
                            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-directors" role="tabpanel" aria-labelledby="nav-directors-tab">
                                </div>
                                <div class="tab-pane fade" id="nav-hardware" role="tabpanel" aria-labelledby="nav-hardware-tab">
                                </div>
                                <div class="tab-pane fade" id="nav-logistics" role="tabpanel" aria-labelledby="nav-logistics-tab">
                                </div>
                                <div class="tab-pane fade" id="nav-prdesign" role="tabpanel" aria-labelledby="nav-prdesign-tab">
                                </div>
                                <div class="tab-pane fade" id="nav-sponsorship" role="tabpanel" aria-labelledby="nav-sponsorship-tab">
                                </div>
                                <div class="tab-pane fade" id="nav-technology" role="tabpanel" aria-labelledby="nav-technology-tab">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
          </div>
        </section>
    )
};