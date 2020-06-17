for(let menu of document.querySelectorAll('.js-menu')) {
  menu.addEventListener('click', () => {
    document.querySelector('nav.menu')
      .classList.toggle('hide')
  })
}