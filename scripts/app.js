const portfolio = {}

portfolio.init = () => {
  portfolio.addStack();
  portfolio.addProjects();
  portfolio.navScroll();
  portfolio.calendly();
}

// 'smooth scroll' method
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

// adjusting default settings for AOS package
AOS.init({
  duration:700,
  delay:100,
})


// Display objects from 'tech stack' array on webpage
portfolio.addStack = () => {
  const gallery = document.querySelector(".skillList")
  skillArray.forEach((skill) => {
    const listItem = document.createElement("li")
    listItem.setAttribute('data-aos', 'flip-up')
    listItem.innerHTML = `
    <div class="skillContainer">
      <i class="${skill.class}"></i>
      <p>${skill.name}</p>
    </div>
    `
    gallery.appendChild(listItem)
  })
}

// Display objects from 'projects' array onto webpage
portfolio.addProjects = () => {
  const gallery = document.querySelector(".projectList")
  projectArray.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.classList.add('project')
    listItem.setAttribute("data-aos", "zoom-in")
    const divElement = document.createElement('div')
    divElement.classList.add("projectContainer")
    divElement.innerHTML =  `
        <img src="${project.src}" alt="${project.name} screenshot" class="screenshot">
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
    gallery.appendChild(listItem)
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