AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Extra-Platform Intermediation in Chinese Video Game Services",
    cardImage: "assets/images/project-page/netlikecontrol.jpg",
    description: "A service supply chain mapping of live streaming, paid boosting and game companionship",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://docs.google.com/presentation/d/1yCB2fjlxWz_hjjrByc5xpESX6IrtVxPaA88CVciuzo4/edit?usp=sharing",
  },
  {
    title: "Gendered Discipline of Platform Game Work in China",
    cardImage: "assets/images/project-page/gender.jpeg",
    description: "A longitudinal study of gender and digital gaming platforms",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://docs.google.com/presentation/d/1MpVbmgXBoFY6W1-JaZuArdaoLl3Pjyn7SCXKGotBGbU/edit?usp=sharing",
   
  },
 
  {
    title: "Liquid Dependencies Game",
    cardImage: "assets/images/project-page/ldt.jpg",
    description:
      "A live-action role playing game on labor, gender, population aging and care work",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://www.instagram.com/liquiddependencies/?hl=en",
   
  },
  
  {
    title: "Coronavirus Diaries Overseas",
    cardImage: "assets/images/project-page/diary.png",
    description:
      "An incomplete coronavirus diary archive by the Chinese diaspora in the first half of 2020.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://coronavirus-diaries-overseas.gitbook.io/coronavirus-diaries-overseas/",
   
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Previewlink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
