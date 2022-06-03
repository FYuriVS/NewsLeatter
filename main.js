const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

function toggleMenu2() {
  const header = document.getElementById('header')
  header.classList.toggle('ativo')
}

btnMobile.addEventListener('click', toggleMenu)

btnMobile.addEventListener('click', toggleMenu2)

btnMobile.addEventListener('touchstart', toggleMenu)
