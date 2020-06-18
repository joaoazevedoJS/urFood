for (let menu of document.querySelectorAll('.js-menu')) {
  if (menu.classList.value === 'close js-menu') {
    menu.addEventListener('click', animetedMenu)
  } else {
    console.log(menu)
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