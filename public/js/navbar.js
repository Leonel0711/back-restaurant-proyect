const btnNav = document.getElementById('btn-Hide-Navbar')
btnNav.addEventListener('click', () => {
    const contNavbarHide = document.getElementById('cont-Navbar-Hide')
    const contNavbar = document.getElementById('cont-Navbar')
    contNavbarHide.classList.add('show-Cont-Navbar-Hide')
    contNavbar.classList.add('show-Cont-Navbar')
})
const btnNavClose = document.getElementById('btn-Hide-Navbar-Close')
btnNavClose.addEventListener('click', () => {
    const contNavbarHide = document.getElementById('cont-Navbar-Hide')
    const contNavbar = document.getElementById('cont-Navbar')
    contNavbarHide.classList.remove('show-Cont-Navbar-Hide')
    contNavbar.classList.remove('show-Cont-Navbar')
})