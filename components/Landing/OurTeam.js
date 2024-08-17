
export default function OurTeam() {
    const directorsNames = `Vivienne Tam
Jasmine Cai`;

const directorRoles = `Co-Director
Co-Director`;

const hardwareNames = `Samridh Tuteja
Anushree Patil
Poul Holm
Douglas Tran
Adi Nelson
Jessie Wang
Monil Bhavsar
Kavya Manchanda
Yav Rohatgi`;

const hardwareRoles = `Hardware Director
Hardware Co-Director
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member`;

const logisticsNames = `Ruchi Gupta
Ben Burns
Jason Dullaghan
Dev Mehta
Manya Phutela
Isaac Heitmann`;

const logisticsRoles = `Logistics Director
Logistics Member
Logistics Member
Logistics Member
Logistics Member
Logistics Member`;

const prdesignNames = `Annette Sebastian
Vianca Varma
Ian Anderson`;
const prdesignRoles = `PR/Design Director
PR/Design Member
PR/Design Member`;

const sponsorshipNames = `Vivienne Tam
Zeina Zahoori
Swetha Eppalapally
Anika Badkul
Renee Tsang`;

const sponsorshipRoles = `Sponsorship Director
Sponsorship Member
Sponsorship Member
Sponsorship Member
Sponsorship Member`;

const technologyNames = `Khiem Nguyen
Meenakshi Iyer
Yuni Jeong
Addie Padhi
Shiven Patel
Simran Lekhwani`;

const technologyRoles = `Technology Director
Technology Assistant Director
Technology Member
Technology Member
Technology Member
Technology Member`;

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

const createSplitArr = (arr) => arr.split('\n');

const createTeamArr = (namesArr, rolesArr) => {
  return namesArr.map((n, i) => {
    const [firstName, lastName] = n.split(' ');
    return {
      name: n,
      role: rolesArr[i],
      image: `assets/img/team/${firstName}-${lastName}.jpg`,
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
  );
  colDivElement.innerHTML = `
        <img class="rounded-circle shadow-2 img-border object-fit-cover" src="${memberObj.image}"
          alt="${memberObj.name}" />
        <h5 class="primary-color">${memberObj.name}</h5>
        <h6 class="team-role">${memberObj.role}</h6>
    `;
  return colDivElement;
};

const directorsTeam = createTeamArr(
  createSplitArr(directorsNames),
  createSplitArr(directorRoles),
);
const hardwareTeam = createTeamArr(
  createSplitArr(hardwareNames),
  createSplitArr(hardwareRoles),
);
const logisticsTeam = createTeamArr(
  createSplitArr(logisticsNames),
  createSplitArr(logisticsRoles),
);
const prdesignTeam = createTeamArr(
  createSplitArr(prdesignNames),
  createSplitArr(prdesignRoles),
);
const sponsorshipTeam = createTeamArr(
  createSplitArr(sponsorshipNames),
  createSplitArr(sponsorshipRoles),
);
const technologyTeam = createTeamArr(
  createSplitArr(technologyNames),
  createSplitArr(technologyRoles),
);

const teams = [
  directorsTeam,
  hardwareTeam,
  logisticsTeam,
  prdesignTeam,
  sponsorshipTeam,
  technologyTeam,
];

teams.forEach((team, i) => {
  const row = makeRowDivElement();
  team.forEach((memberObj) => {
    row.appendChild(makeColDivElement(memberObj));
  });
  tabs[i].appendChild(row);
});

    return (
        <section class="section bg-gray">
          <div class="container-fluid" >
            <header class="section-header">
              <small style="font-size: 20px">Our Team</small>
              <div>
              <h2 class="primary-color">Meet the people behind it!</h2>
              </div>
            </header>
            <div style="width: 70%; margin: auto" id="team-container">
            <section id="tabs">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 ">
                            <nav>
                                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
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