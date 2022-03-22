export class Modal {

    static main = document.querySelector('main')

    static removeModal(e){

        const modalParent = e.target.parentNode.parentNode
        const modalSelector = document.querySelector('.containerModal')

        Modal.main.removeChild(modalSelector)
    }

    static createModal(contents){

        const containerModal = document.createElement('section')
        containerModal.classList.add('containerModal')
        
        const modal = document.createElement('div')
        modal.classList.add('modal')
        
        const closeModal = document.createElement('button')
        closeModal.classList.add('closeModal')
        closeModal.innerText = 'X'
        closeModal.addEventListener('click', Modal.closeModal)
        
        modal.appendChild(closeModal)
        modal.appendChild(contents)
        containerModal.appendChild(modal)
        Modal.main.appendChild(containerModal)
   }
}

export {Modal}