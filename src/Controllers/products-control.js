import { Modal } from "./../Models/modal-model.js"  
import { User } from "./Routers.js"
class ProductsControllers {

    static productForm() {
        
        const divForm = document.createElement('div')
        
        divForm.innerHTML = `
            <form>
                <label for="input">Nome do Produto</label> 
                <input type="text"> <br>
                <label for="input">Descrição</label> <br>
                <input type="text"> <br>
                <label for="input">Categorias</label> <br>
                <input type="button"></button> <br>
                <label for="input">Valor do produto</label> <br>
                <input type="number"> <br>
                <label for="input">Link da imagem</label> <br>
                <input type="url"><br>
                <button class='cadastrar'>cadastrar</button>
            </form>
            
        `
        
        
        
        Modal.createModal(divForm, 'productForm')
        
        
    }

    static newProduct() {
        
        const btnNewProduct = document.querySelector('.addProduct')
        btnNewProduct.addEventListener('click', this.productForm)

        

        
    }

    static postProduct(event){
        event.preventDefault()
        
        console.log('ola')
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




