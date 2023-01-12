AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Doctoral Fellow",
    cardImage: "assets/images/experience-page/cdcs.jpeg",
    place: "Center on Digital Culture and Society, UPenn",
    time: "(Aug, 2020 - present)",
    desp: "<li>Coordinate academic seminars and manage projects.</li> <li>Organize a workshop on digital labor.</li>",
  },
  {
    title: "Teaching Fellow",
    cardImage: "assets/images/experience-page/penn.png",
    place: "University of Pennsylvania",
    time: "(June, 2018 - July, 2022)",
    desp: "<li>Teach recitations of four undergraduate courses in communication and sociology.</li><li>Manage projects for two summer schools.</li>",
  },
  {
    title: "Researcher",
    cardImage: "assets/images/experience-page/oxford.png",
    place: "FORHEAD Project, Online",
    time: "(July, 2017 - March, 2018)",
    desp: "<li>Analyze media coverage of environmental issues in China and produce a policy report.</li>",
  },
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/cuhk.png",
    place: "Chinese University of Hong Kong",
    time: "(Aug, 2013 - July, 2015)",
    desp: "<li>Participate in five research and journalism projects.</li><li>Design and distribute online and onsite surveys, analyze large datasets, and conduct archival research.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Co-founder of Penn Activism, Media and Education Group",
    cardImage: "assets/images/experience-page/ameg.jpg",
    description:
      "(2022- ) Establish and organize the student interest group on media activism.",
  },
 {
    title: "Member of Liquid Dependencies Theory Collective",
    cardImage: "assets/images/experience-page/ldt2.jpeg",
    description: 
      "(2021- ) Lead researcher of the art collective.",
  },
  {
    title: "Freelance writer of Initium Media",
    cardImage: "assets/images/experience-page/initium.png",
    description:
      "(2015- ) Publish dozens of longreads and commentaries on media, labor and social movements.",
  },
  {
    title: "Freelance writer of the Paper",
    cardImage: "assets/images/experience-page/paper.jpeg",
    description:
      "(2018- ) Publish dozens of longreads on labor, technology and US politics.",
  },
  {
    title: "Editor and new media manager of CNPolitics",
    cardImage: "assets/images/experience-page/cnp.png",
    description:
      "(2011 - 2021) Manage social media channels and edit articles on a weekly basis.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
