const playstation = document.querySelector('.playstation')
const xbox = document.querySelector('.xbox')

playstation.addEventListener('mouseover', () =>{
    playstation.classList.add('playstation-active')
    removeActiveClass()
})
function removeActiveClass(){
    xbox.addEventListener('mouseover', () =>{
        xbox.classList.add('xbox-active')
        playstation.classList.remove('playstation-active')
        addActiveClass()
    })
}
function addActiveClass(){
    playstation.addEventListener('mouseover',() =>{
        playstation.classList.add('playstation-active')
    xbox.classList.remove('xbox-active')
    removeActiveClass()
    })
}
