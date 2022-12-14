// Open SideBar

const sidebarOpen = document.querySelector('.nav_toggler')
const sideBar = document.querySelector('#sidebar')
const main = document.querySelector('.main')

sidebarOpen.addEventListener('click', () =>{

  sidebarOpen.classList.toggle('hide');
  sideBar.classList.toggle('visible')
  main.classList.toggle('visible')
    
    
})


// close side bar
const sidebarClose = document.querySelector('#sidebar-close')

sidebarClose.addEventListener('click', () =>{

  sidebarOpen.classList.remove('hide');
  sideBar.classList.remove('visible')
  main.classList.remove('visible')


})


// click outside of sidebar to close
document.addEventListener('click', function handleClickOutsideBox(event) {

  if (!sidebarOpen.contains(event.target)) {
    sideBar.classList.remove('visible')
    sidebarOpen.classList.remove('hide');
    main.classList.remove('visible')

  }
});







