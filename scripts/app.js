const portfolio = {}

portfolio.init = () => {
  portfolio.addStack();
  portfolio.addProjects();
  // portfolio.navScroll();
  portfolio.arrowScroll();
}

portfolio.arrowScroll = () => {
  const scrollArrow = document.querySelector(`.startScroll a[href^="#"]`)
  scrollArrow.onClick = function(e) {
    e.preventDefault();
    let hash = this.getAttribute('href')
    let target = document.querySelector(hash);
    let navOffset = 100;
    let destPosition = target.offsetTop;
    let offsetPosition = destPosition - navOffset

    window.scrollTo({
      top:offsetPosition,
      behavior:'smooth'
    });
  }
}

portfolio.navScroll = () => {
  const navLinks = document.querySelectorAll('li a[href^="#"]')
  navLinks.forEach((anchor) => {
    anchor.onClick = function(e) {
      e.preventDefault();
      let hash = this.getAttribute('href')
      console.log(hash)
      let target = document.querySelector(hash)
      // let navOffset = 100;
      console.log(target.offsetTop)
      // let destPosition = target.offsetTop;
      // let offsetPosition = destPosition - navOffset;

      // window.scrollTo({
      //   top:offsetPosition,
      //   behavior:'smooth',
      // });
    };
  });
}


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
    const langList = document.createElement('ul')
    langList.classList.add("languages")
    project.languages.forEach((language) => {
      const langLi = document.createElement('li')
      langLi.innerHTML = `<p>${language}</p>`
      langList.appendChild(langLi)
      divElement.appendChild(langList)
    })
    gallery.appendChild(listItem)
  })
}

portfolio.init()
AOS.init();