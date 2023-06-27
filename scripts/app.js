const portfolio = {}
import KEY  from './config.js'

const api_key = KEY


portfolio.init = () => {
  portfolio.addItems();
  portfolio.navScroll();
  portfolio.hideButton();
  portfolio.calendly();
  portfolio.getLastFMData();
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
    name:"Redux",
    class:'devicon-redux-original'
  },
  {
    name:"Gatsby",
    class: 'devicon-gatsby-plain'
  },
  {
    name:"Vuejs",
    class:'devicon-vuejs-plain'
  },
  {
    name:"Tailwind CSS",
    class:'devicon-tailwindcss-original-wordmark'
  },
  {
    name: "Styled Components",
    class:'fa fa-code'
  },
  {
    name: 'graphql',
    class:'devicon-graphql-plain'
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
    name:'NPM',
    class:'devicon-npm-original-wordmark'
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
    name:"0Auth",
    class:"fas fa-key"
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
    name:'Will it Emo Night?',
    src:`./assets/emoPreview.png`,
    description:[`Search for any song and see if it is "Sad" or "Moshable" enough to be considered Emo. Users can also add each queried song to an Emo Night Playlist, then export the playlist to their Spotify profile. Built using React, React-Redux, and the Spotify API.`, `NOTE: The best way to view the project with its full functionality would be to clone a local version from my GitHub repo, and request a new Client ID from Spotify (full details and instructions are in the repo's README)`],
    repo:`https://github.com/CHamat96/will-it-emo-night?`,
    live:`https://will-it-emo-night.netlify.app`
  },
  {
    name:'The Beef Shop',
    src:`./assets/beefPreview.png`,
    description:["An example webpage for an Italian Beef Restaurant. Built using GatsbyJs & the Sanity headless CMS.", "NOTE: this project is still a work-in-progress with some functionality still to be completed",],
    repo:`https://github.com/CHamat96/the-beef-shop`,
    live:`https://the-beef-shop.netlify.app`
  },
  {
    name:'The Nygma Machine',
    src:`./assets/nygmaPreview.jpg`,
    description:["A randomly generated maze game where, when completed, the user receives a piece of advice (provided by the AdviceSlip API) based on a keyword they select before starting the game."],
    repo:`https://github.com/nygma-machine/project-4`,
    live:`https://nygma.netlify.app`},
  {
    name:'The Digital Cinephile',
    description:[`A Movie/TV Show recommendation app, developed through paired programming & built with the TMDB API. A user searches for a movie and/or TV show, then the site  displays a gallery of recommended movies/TV Shows based on their input.`, `The website uses multiple API calls to display each recommendation's poster, official trailer (if available), user rating, and plot overview.`],
    src:'./assets/cinephilePreview.jpg',
    repo:`http://github.com/cohort36-Bootcamp-Project-02/theDigitalCinephile/`,
    live:`https://theDigitalCinephile.netlify.app`
  },
  {
    name:'Planted',
    src:`./assets/plantedPreview.jpg`,
    description:["A Multi-Page HTML/SCSS website that was designed based on a client brief/styleguide"],
    repo:`https://github.com/CHamat96/coreyHamatProject01`,
    live:'https://chamat96.github.io/coreyHamatProject01/index.html'
  },
  {
    name:`Weather Forecast App`,
    src:`./assets/weatherPreview.png`,
    description:["A sample weather widget that displays the 5-day weather forecast for three select cities. Built using React, styled-components, and the OpenWeatherMap API", "I plan on continuously updating this project and adding more features. Including the ability to search for a city & display the queried forecast."],
    repo:`https://github.com/CHamat96/weather-widget`,
    live:'https://coreys-weather-widget.netlify.app'
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
      let navOffset = 50;
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
          <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="link">View Code </a>
          <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="link">View Live</a>
        </div>
      </div>
    `
    // const projectText = divElement.querySelector('projectText')
    // console.log(projectText)
    const descriptionContainer = document.createElement('div')
    descriptionContainer.classList.add('projectText')
    project.description.forEach((text) => {
      const paragraph = document.createElement('p')
      paragraph.textContent = text
      descriptionContainer.append(paragraph)
    })
    divElement.append(descriptionContainer)
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

portfolio.getLastFMData = async () => {

  // Async API Fetch Request
  const url = new URL(`https://ws.audioscrobbler.com/2.0`)
  url.search = new URLSearchParams({
    method: `user.getRecentTracks`,
    api_key,
    user: 'chamat96',
    limit:15,
    format:'json'
  })
  const response = await fetch(url)
  const data = await response.json();

  // Declare new variables from LastFM data
  let trackList = data.recenttracks.track
  let latestTrack = trackList[0]
  const link = latestTrack.url;

  let track = latestTrack.name;
  // Truncate the song name if it's greater than 80 characters long
  if (track.length > 80) {
    const lastSpace = track.substring(0, 81).lastIndexOf(' ');
    track = `${track.slice(0, lastSpace)}...`
  }
  

  let artist = latestTrack.artist[`#text`];
  let album = latestTrack.album[`#text`];
  let albumCover = latestTrack.image[0]['#text'];

  // Add data for the "Most Recent" song to the page
  const songContainer = document.querySelector('.recentSong');
  songContainer.innerHTML=`
    <a href="${link}" target="_blank" rel="noopener noreferrer">
    <div class="songContainer">
      <img class="albumCover" src="${albumCover}" alt="${album} by ${artist}"/>
      <div class="songInfo">
        <p class="songTitle">${track}</p>
        <p>${artist} - ${album}</p>
      </div>
    </div>
    </a>
  `
  const playlistSection = document.createElement('div')
  playlistSection.classList.add('playlist')
  playlistSection.innerHTML = `
  <h4>Here are a few other songs that I've loved listening to recently:</h4>
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4oSPeMNOcH2wRoHq1N0rHq?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>`

  const songSection = document.querySelector('.songSection')
  songSection.appendChild(playlistSection)
}


portfolio.init()
AOS.init();