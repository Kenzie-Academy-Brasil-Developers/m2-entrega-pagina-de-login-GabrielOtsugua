function eventsModal() {
    const modal = document.querySelector(".wrapperModal")
    const modal2 = document.querySelector(".wrapperModal2")
    const btnOpenModal = document.querySelector(".forgetPassword")
    const btnCloseModal = document.querySelector(".close")
    const btnCadastrese = document.querySelector(".signup")
    const btnCloseModal2 = document.querySelector(".close2")

    btnOpenModal.addEventListener("click", e => {
        e.preventDefault()
        
        modal.style.display = "block"
    })

    btnCloseModal.addEventListener("click", e => {
        e.preventDefault()
        
        modal.style.display = "none"
    })

    btnCadastrese.addEventListener("click", e => {
        e.preventDefault()

        modal2.style.display = "block"
    })
    
    btnCloseModal2.addEventListener("click", e => {
        e.preventDefault()

        modal2.style.display = "none"
    })
}
eventsModal()
