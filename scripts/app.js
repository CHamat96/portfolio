const portfolio = {}
// import KEY  from './config.js'

// const api_key = KEY

const api_key = `bd822bb98e83843bb4c1a3fdf461010b`

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
    name:'The Beef Shop',
    src:`./assets/beefPreview.png`,
    description:"An example webpage for an Italian Beef Restaurant. Built using GatsbyJs & the Sanity headless CMS. NOTE: this project is still a work-in-progress with some functionality still to be completed",
    repo:`https://github.com/CHamat96/the-beef-shop`,
    live:`https://the-beef-shop.netlify.app`
  },
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

  const otherTracks = trackList.slice(1, 15)
  let filteredTracks = []

  // create a list with only unique albums
  for(let i = 0; i < otherTracks.length; i++) {
    let song = otherTracks[i]
    let nextSong = otherTracks[i + 1]
    if(nextSong && song.album[`#text`] !== nextSong.album[`#text`]) {
      filteredTracks.push(song)
    }
  }
  

  let track = latestTrack.name;
  // Truncate the song name if it's greater than 80 characters long
  if (track.length > 80) {
    const lastSpace = track.substring(0, 81).lastIndexOf(' ');
    track = `${track.slice(0, lastSpace)}...`
  }

  let artist = latestTrack.artist[`#text`];
  let album = latestTrack.album[`#text`];
  let albumCover = latestTrack.image[1]['#text'];

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

  // Add gallery below latest song to display the other tracks
  const songSection = document.querySelector('.songSection')
  let moreTracksContainer = document.createElement('div')
  moreTracksContainer.classList.add('otherTracks')
  moreTracksContainer.innerHTML = `
  <h4>Other Recent Tracks:</h4>
  `
  const otherTracksList = document.createElement('div')
  otherTracksList.classList.add('trackGrid')
  filteredTracks.forEach((song) => {
      const container = document.createElement('a')
      const title = song.name
      // Truncate the song title
      if (title.length > 25) {
        const lastSpace = title.substring(0, 26).lastIndexOf(' ');
        title = `${title.slice(0, lastSpace)}...`
      }
      let artist = song.artist['#text']
      let album = song.album[`#text`]
      // truncate the album title (just in case)
      if (album.length > 25) {
        const lastSpace = album.substring(0, 26).lastIndexOf(' ');
        album = `${album.slice(0, lastSpace)}...`
      }

      let image = song.image[2][`#text`]
      let link = song.url

      container.setAttribute('href', link)
      container.classList.add('trackGridItem')
      container.innerHTML = `
      <div class="trackContainer">
        <img src=${image} alt="${title} by ${artist}"/>
        <div class="overlay">
        <p class="strong">${title}</p>
        <p>${artist}</p>
        <p class="italic">${album}</p>
        </div>
      </div>
      `
      otherTracksList.appendChild(container)
  })
  
  moreTracksContainer.appendChild(otherTracksList)
  songSection.append(moreTracksContainer)
}

portfolio.init()
AOS.init();