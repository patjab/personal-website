
window.addEventListener('load', this.attachButtonListeners)

function attachButtonListeners() {
  document.addEventListener('click', (e) => {

    if (e.target.classList.toString().includes("buttonToProjects")) {
      document.getElementById(`${e.target.id.slice(0, -6)}Card`).scrollIntoView({behavior: 'smooth'})
    }
  })

}
