import { Modal } from "./../Models/modal-model.js"
import { User } from "./Routers.js"

class ProductsControllers {

    static formNewProduct() {

        const divForm = document.createElement('div')
        divForm.classList.add('div-form')


        divForm.innerHTML = `
            <form>
                <label for="input">Nome do Produto</label>
                <input type="text" name="nome" class="name-form">
                <label for="input">Descrição</label>
                <input type="text" name="descricao" class="description-form">
                <label for="input">Categorias</label>
                <div class="div-checkboxes">
                <label><input type="checkbox" name="categoria" value="Panificadora" class="checkbox-panificadora-form">Panificadora</label> 
                <label><input type="checkbox" name="categoria" value="Frutas" class="checkbox-frutas-form">Frutas</label>
                <label><input type="checkbox" name="categoria" value="Bebidas" class="checkbox-bebidas-form">Bebidas</label>
                </div>
                <label for="input">Valor do produto</label>
                <input type="text" name="preco" class="price-form">
                <label for="input">Link da imagem</label>
                <input type="url" name="imagem" class="url-form">
                <button type="submit" class="register">Cadastrar</button>
            </form>  
        `

        Modal.createModal(divForm, 'productForm')

        const btnSubmit = document.querySelector('form')

        btnSubmit.addEventListener('submit', e => {
            e.preventDefault()

            const inputs = [...e.target]
            const obj = {}

            inputs.forEach(current => {
                if (current.name) {
                    const name = current.name
                    const value = current.value

                    obj[name] = value
                }
            })

            User.postMyProducts('/my/products', obj)

            setTimeout(() => {
                window.location.reload()
            }, 2000)
        })

    }

    static newProduct() {

        const btnNewProduct = document.querySelector('.addProduct')
        btnNewProduct.addEventListener('click', this.formNewProduct)

    }



    static formEditProduct(productInfo) {
        const divForm = document.createElement('div')
        divForm.classList.add('div-form')

        productInfo.forEach((element) => {

            const { id, nome, preco, categoria, descricao, imagem } = element

            divForm.innerHTML = `
            <form>
                <label for="input">Nome do produto</label>
                <input type="text" name="nome" value="${nome}" class="name-form"> 
                <label for="input">Descrição</label>
                <input type="text" name="descricao" value="${descricao}" class="description-form"> 
                <label for="input">Categorias</label>
                <div class="div-checkboxes">
                <label><input type="checkbox" name="categoria" value="${categoria}" class="checkbox-panificadora-form">Panificadora</label> 
                <label><input type="checkbox" name="categoria" value="${categoria}" class="checkbox-frutas-form">Frutas</label>
                <label><input type="checkbox" name="categoria" value="${categoria}" class="checkbox-bebidas-form">Bebidas</label>
                </div>
                <label for="input">Valor do produto</label> 
                <input type="text" name="preco" value="${preco}" class="price-form"> 
                <label for="input">Link da imagem</label> 
                <input type="url" name="imagem" value="${imagem}" class="url-form">
                <div class="buttons-form">
                <button id="${id}" type="submit" class='edit'>Salvar Alterações</button>
                <button id="${id}" class='cancel'>Cancelar</button>
                </div>
            </form>  
        `

        })


        Modal.createModal(divForm, 'productForm')
        const button = document.querySelector('form')
        button.addEventListener('submit', (e) => {
            e.preventDefault()
            const targetInput = [...e.target]
            const id = targetInput[7].id
            
            const obj = {}
            targetInput.forEach((element)=>{
                const {name, value} = element
                obj[name] = value
            })
           
            User.pathMyProducts("/my/products/",id, obj)

            setTimeout(() => {
                window.location.reload()
            }, 2000); 
        })

    }

    static deleteProduct() {

        const confirmMsg = document.createElement('div')

        confirmMsg.innerHTML = `
            <p>Tem certeza que deseja excluir este produto?</p>
            <button>Sim</button><button>Não</button>
            `
        const btnDeleteProduct = document.querySelector('.btn-delete')
        btnDeleteProduct.addEventListener('click', e => { Modal.createModal(confirmMsg, 'modalDeleteProduct') })


    }
}


export { ProductsControllers }




