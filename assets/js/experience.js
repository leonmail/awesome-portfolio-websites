AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Doctoral Fellow",
    cardImage: "assets/images/experience-page/cdcs.jpg",
    place: "The Center on Digital Culture and Society, UPenn",
    time: "(Aug, 2020 - present)",
    desp: "<li>Coordinate academic seminars and manage projects.</li> <li>Organize a workshop on digital labor.</li>",
  },
  {
    title: "Teaching Fellow",
    cardImage: "assets/images/experience-page/upenn.png",
    place: "University of Pennsylvania",
    time: "(June, 2018 - July, 2022)",
    desp: "<li>Teach recitations of four undergraduate courses in communication and sociology.</li><li>Manage projects for two summer schools.</li>",
  },
  {
    title: "Researcher",
    cardImage: "assets/images/experience-page/oxford.jpg",
    place: "FORHEAD Project, Online",
    time: "(July, 2017 - March, 2018)",
    desp: "<li>Analyze media coverage of environmental issues in China and produce a policy report.</li>",
  },
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/cuhk.jpg",
    place: "Chinese University of Hong Kong",
    time: "(Aug, 2013 - July, 2015)",
    desp: "<li>Analyze media coverage of environmental issues in China and produce a policy report.</li>",
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
