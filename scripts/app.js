const portfolio = {}
portfolio.techStack = [
  {
    name:"HTML5",
    class:`devicon-html5-plain-wordmark`
  },
  {
    name:'CSS3',
    class:'devicon-css3-plain-wordmark'
  },
  {
    name:'JavaScript',
    class:'devicon-javascript-plain'
  },
  {
    name:'JQuery',
    class:'devicon-jquery-plain-wordmark'
  },
  {
    name:"react",
    class:'devicon-react-original-wordmark'
  },
  {
    name:'GitHub',
    class:'devicon-github-original-wordmark'
  },
  {
    name:'Git',
    class:'devicon-git-plain-wordmark'
  },
  {
    name:'NodeJs',
    class:'devicon-nodejs-plain'
  },
  {
    name:'Firebase',
    class:'devicon-firebase-plain-wordmark'
  }
]

portfolio.init = () => {
  portfolio.addStack();
}

portfolio.addStack = () => {
  const gallery = document.querySelector(".skillGallery")
  const listElement = document.createElement("ul")
  portfolio.techStack.forEach((skill) => {
    const listItem = document.createElement("li")
    console.log(skill)
    listItem.innerHTML = `
    <i class="${skill.class}"></i>
    <p class="sr-only">${skill.name}</p>
    `
    listElement.appendChild(listItem)
  })
  gallery.appendChild(listElement)
}

portfolio.init()