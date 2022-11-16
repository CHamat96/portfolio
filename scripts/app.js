const portfolio = {}

portfolio.init = () => {
  portfolio.addItems();
  portfolio.navScroll();
  portfolio.hideButton();
  portfolio.calendly();
}

const techStack = [
  {
    name:"HTML5",
    class:'devicon-html5-plain'
  },
  {
    name:'CSS3',
    class:'devicon-css3-plain'
  },
  {
    name:'SASS',
    class:'devicon-sass-original'
  },
  {
    name:'JavaScript',
    class:'devicon-javascript-plain'
  },
  {
    name:'JQuery',
    class:'devicon-jquery-plain'
  },
  {
    name:"React",
    class:'devicon-react-original'
  },
  {
    name:"Gatsby",
    class: 'devicon-gatsby-plain'
  },
  {
    name:'GitHub',
    class:'devicon-github-original'
  },
  {
    name:'Git',
    class:'devicon-git-plain'
  },
  {
    name:'Firebase',
    class:'devicon-firebase-plain'
  },
  {
    name:'Visual Studio',
    class:'devicon-visualstudio-plain'
  },
  {
    name:'Accessibility',
    class:'fas fa-universal-access'
  },
  {
    name:'Responsive Design',
    class:'fas fa-laptop-code'
  },
  {
    name: 'Banner Advertisements',
    class:"fas fa-ad"
  },
  {
    name:'RESTful APIs',
    class:'fas fa-cogs'
  },
  {
    name:"Adobe Creative Cloud",
    class:'fas fa-cloud'
  },
  {
    name:"Salesforce",
    class:"devicon-salesforce-plain"
  },
  {
    name:"Veeva CRM",
    class:'devicon-vuejs-plain'
  },
  {
    name:"Figma",
    class:"devicon-figma-plain"
  },
  {
    name:"Google Analytics/GTM",
    class:'fas fa-signal'
  },
]

const projectArray = [
  {
    name:'The Nygma Machine',
    src:`./assets/nygmaPreview.jpg`,
    description:"A randomly generated maze game where, when completed, the user receives a piece of advice (provided by the AdviceSlip API) based on a keyword they select before starting the game.",
    repo:`https://github.com/nygma-machine/project-4`,
    live:`https://nygma.netlify.app`},
  {
    name:'The Digital Cinephile',
    description:`A Movie/TV Show recommendation app, developed through paired programming & built with the TMDB API. A user searches for a movie and/or TV show, then the site  displays a gallery of recommended movies/TV Shows based on their input. The website uses multiple API calls to display each recommendation's poster, official trailer (if available), user rating, and plot overview.`,
    src:'./assets/cinephilePreview.jpg',
    repo:`http://github.com/cohort36-Bootcamp-Project-02/theDigitalCinephile/`,
    live:`https://theDigitalCinephile.netlify.app`
  },
  {
    name:'The Perfect Playlist Procurement Program',
    src:`./assets/playlistPreview.jpg`,
    description:`A playlist generation app, built using the Deezer API. Users select an artist/band, then a random song of theirs is added to a global 'playlist'. Users can search for bands either by genre, or by searching for their name.`,
    repo:`https://github.com/chamat96/corey-hamat-project-03`,
    live:`https://perfect-playlist-procurement.netlify.app`
  },
  {
    name:'Planted',
    src:`./assets/plantedPreview.jpg`,
    description:"A Multi-Page HTML/SCSS website that was designed based on a client brief/styleguide",
    repo:`https://github.com/CHamat96/coreyHamatProject01`,
    live:'https://chamat96.github.io/coreyHamatProject01/index.html'
  },
]

// use a 'smooth scroll' whenever user clicks on an 'anchor' that leads to a certain section of the page
portfolio.navScroll = () => {
  const navElements = document.querySelectorAll('.navScroll')
  navElements.forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      let hash = this.getAttribute('href')
      let target = document.querySelector(hash)
      let navOffset = 100;
      let targetPosition = target.offsetTop;
      let offsetPosition = targetPosition - navOffset
      window.scrollTo({
        top:offsetPosition,
        behavior:"smooth"
      })
    })
  })
}

portfolio.hideButton = () => {
  const topButton = document.querySelector('.toTop')
  window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      topButton.style.opacity = 1
    } else {
      topButton.style.opacity = 0;
    }
  })
}

// adjusting default settings for Animate-on-Scroll package
AOS.init({
  duration:700,
  delay:100,
})

// Display objects from 'projects'  and 'skills' array onto webpage
portfolio.addItems = () => {
  const projectGallery = document.querySelector(".projectList")
  projectArray.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.classList.add('project')
    listItem.setAttribute("data-aos", "zoom-in")

    const divElement = document.createElement('div')
    divElement.classList.add("projectContainer")
    divElement.innerHTML =  `
      <img src="${project.src}" alt="${project.name} screenshot">
      <div class="projectText">
        <h3>${project.name}</h3>
        <div class="links">
          <a href="${project.repo}" class="link">View Code </a>
          <a href="${project.live}" class="link">View Live</a>
        </div>
        <p>${project.description}</p>
      </div>
    `
    listItem.appendChild(divElement)
    projectGallery.appendChild(listItem)
  })
  const skillGallery = document.querySelector(".skillList")
  techStack.forEach((skill) => {
      const listItem = document.createElement("li")
      listItem.setAttribute('data-aos', 'flip-up')
      listItem.innerHTML = `
      <div class="skillContainer">
        <i class="${skill.class}"></i>
        <p>${skill.name}</p>
      </div>
      `
      skillGallery.appendChild(listItem)
    })
}



portfolio.calendly = () => {
  const calendLink = document.querySelector('.calendly')
  calendLink.addEventListener('click', function(e) {
    e.preventDefault();
    Calendly.initPopupWidget({
      url: 'https://calendly.com/coreyhamat'
    });
      return false;
  })
}

portfolio.init()
AOS.init();