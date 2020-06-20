/* Remove form event and sucess message*/

for(form of document.querySelectorAll('form')) {
  form.addEventListener('submit', e => {
    e.preventDefault()
    
    const img = document.createElement('img')
    img.src = './sucess.svg'
    img.alt = 'Sucess message'

    const h4 = document.createElement("h4")
    h4.innerHTML = "Enviado com sucesso!"

    const section = document.createElement('section')
    section.classList.add("sucessForm")

    const div = document.createElement('div')
    div.classList.add('animeted')

    div.appendChild(img)
    div.appendChild(h4)

    section.appendChild(div)

    document.body.appendChild(section)

    setTimeout(() => {
      document.location.href = "../../index.html"
    }, 1500)
  })
}

document.querySelector("div.backgroundClose")
  .addEventListener("click", () => {
    document.querySelector('nav.menu')
      .classList.toggle('hide')
  })

for (let menu of document.querySelectorAll('.js-menu')) {
  if (menu.classList.value === 'close js-menu') {
    menu.addEventListener('click', animetedMenu)
  } else {
    menu.addEventListener('click', () => {
      document.querySelector('nav.menu')
        .classList.toggle('hide')
    })
  }
}

function animetedMenu() {
  document.querySelector('nav.menu section.container').animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(300px)' }
  ], {
    duration: 200,
  })

  setTimeout(() => {
    document.querySelector('nav.menu')
      .classList.toggle('hide')
  }, 200)
}

function scrollFun() {
  const elem = document.documentElement
  const header = document.querySelector('header.header-main')
  
  if (elem.scrollTop > 200) {
    header.classList.add("fixedHeader")
  } else {
    header.classList.remove("fixedHeader")
  }
}