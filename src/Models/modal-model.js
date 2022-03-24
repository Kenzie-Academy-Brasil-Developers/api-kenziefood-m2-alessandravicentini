class Modal {

    static main = document.querySelector('main')

    static removeModal(e){

        const modalParent = e.target.parentNode
        Modal.main.removeChild(modalParent)

    }

    static createModal(contents, classModal){

        const containerModal = document.createElement('section')
        containerModal.classList.add(classModal)
          
        const closeModal = document.createElement('button')
        closeModal.classList.add('closeModal')
        closeModal.innerText = 'X'

        closeModal.addEventListener('click', this.removeModal)
        
        containerModal.appendChild(closeModal)
        containerModal.appendChild(contents)
        
        Modal.main.appendChild(containerModal)
    }

   static createModalStatus(msg, idModal) {
        const status = document.createElement('div')    

        status.innerHTML = `
            <div><p>Status</p></div>
            <div id=${idModal}><p>${msg}</p></div>
        `

        
        this.createModal(status)

    }

   static showModalStatus() {
        let AAAAAAAAAA = false
        
        if (AAAAAAAAAA === true) {
            this.createModalStatus('Produto adicionado com sucesso', 'modalSuccess')
        }

        else {
            this.createModalStatus('Ocorreu algum erro, o produto não foi adicionado', 'modalError')
        }

}


}

export {Modal}

