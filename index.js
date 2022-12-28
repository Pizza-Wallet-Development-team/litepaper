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

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}

form.addEventListener("submit", handleSubmit)






