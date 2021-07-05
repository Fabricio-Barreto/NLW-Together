import  Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.addEventListener("click", event => {

        event.preventDefault()

        const roomId = document.querySelector("#room-id").dataset.id
        const form = document.querySelector(".modal form")
        const questionId = event.target.dataset.id

        form.setAttribute("action", `/room/${roomId}/${questionId}/check`)

        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que desja marcar como lida esta pergunta?"
        modalButton.innerHTML = "Sim, Marcar"
        modalButton.classList.remove("red")

        modal.open()
    })
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event =>{

        event.preventDefault()

        const roomId = document.querySelector("#room-id").dataset.id
        const form = document.querySelector(".modal form")
        const questionId = event.target.dataset.id

        form.setAttribute("action", `/room/${roomId}/${questionId}/delete`)

        modalTitle.innerHTML = "Excluir pergunta"
        modalDescription.innerHTML = "Tem Certeza que você deseja Excluir esta pergunta ?"
        modalButton.innerHTML = "Sim, Excluir"
        modalButton.classList.add("red")

        modal.open()
    })
})