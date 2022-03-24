import { Modal } from "./../Models/modal-model.js"
    
class ProductsControllers {

    static productForm() {
        console.log('oi')
        const form = document.createElement('div')
        
        form.innerHTML = `
        <label for="input">Nome do Produto</label> 
        <input type="text"> <br>
        <label for="input">Descrição</label> <br>
        <input type="text"> <br>
        <label for="input">Categorias</label> <br>
        <input type="button"> <br>
        <label for="input">Valor do produto</label> <br>
        <input type="number"> <br>
        <label for="input">Link da imagem</label> <br>
        <input type="url"><br>
        <button>
        `
        
        
        Modal.createModal(form, 'productForm')
    }

    static newProduct() {

        const btnNewProduct = document.querySelector('.addProduct')
        btnNewProduct.addEventListener('click', this.productForm)
    }

    static editProduct() {
        const btnEditProduct = document.querySelector('.btn-edit')
        btnEditProduct.addEventListener('click', this.productForm)
    }

    static deleteProduct() {
        console.log('oi')
        const confirmMsg = document.createElement('div')

        confirmMsg.innerHTML = `
            <p>Tem certeza que deseja excluir este produto?</p>
            <button>Sim</button><button>Não</button>
        `
        
        const btnDeleteProduct = document.querySelector('.btn-delete')
        btnDeleteProduct.addEventListener('click', e => {Modal.createModal(confirmMsg, 'modalDeleteProduct')})
    }

}

export {ProductsControllers}
/* ProductsControllers.newProduct()
ProductsControllers.editProduct() */
// ProductsControllers.deleteProduct()

import { User } from "./Routers.js"


