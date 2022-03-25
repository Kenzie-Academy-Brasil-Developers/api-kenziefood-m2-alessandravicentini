import { Modal } from "./../Models/modal-model.js"
import { User } from "./Routers.js"

class ProductsControllers {

    static formNewProduct() {

        const divForm = document.createElement('div')

        divForm.innerHTML = `
            <form>
                <label for="input">Nome do Produto</label> <br>
                <input type="text" name="nome"> <br>
                <label for="input">Descrição</label> <br>
                <input type="text" name="descricao"> <br>
                <label for="input">Categorias</label> <br>
                <input type="checkbox" name="categoria" value="Panificadora"> <br>
                <input type="checkbox" name="categoria" value="Frutas"> <br>
                <input type="checkbox" name="categoria" value="Bebidas"> <br>
                <label for="input">Valor do produto</label> <br>
                <input type="text" name="preco"> <br>
                <label for="input">Link da imagem</label> <br>
                <input type="url" name="imagem"><br>
                <button type="submit" class='register'>cadastrar</button>
            </form>  
        `

        Modal.createModal(divForm, 'productForm')

        const btnSubmit = document.querySelector('form')

        btnSubmit.addEventListener('submit', e => {
            e.preventDefault()

            const inputs = [...e.target]
            const obj = {}

            console.log(inputs)
            inputs.forEach(current => {
                if (current.name) {
                    const name = current.name
                    const value = current.value

                    obj[name] = value
                }
            })
            console.log(obj)
            User.postMyProducts('/my/products', obj)

            setTimeout(() => {
                window.location.reload()
            }, 2000)
        })
        //ProductsControllers.postProduct(e)


    }

    static newProduct() {

        const btnNewProduct = document.querySelector('.addProduct')
        btnNewProduct.addEventListener('click', this.formNewProduct)

    }



    static formEditProduct(productInfo) {
        const divForm = document.createElement('div')

        productInfo.forEach((element) => {

            const { id, nome, preco, categoria, descricao, imagem } = element


            divForm.innerHTML = `
            <form>
                <label for="input"></label> <br>
                <input type="text" name="nome" value="${nome}"> <br>
                <label for="input">Descrição</label> <br>
                <input type="text" name="descricao" value="${descricao}"> <br>
                <label for="input">Categorias</label> <br>
                <input type="checkbox" name="categoria" value="${categoria}"> <br>
                <input type="checkbox" name="categoria" value="${categoria}"> <br>
                <input type="checkbox" name="categoria" value="${categoria}"> <br>
                <label for="input">Valor do produto</label> <br>
                <input type="text" name="preco" value="${preco}"> <br>
                <label for="input">Link da imagem</label> <br>
                <input type="url" name="imagem" value="${imagem}"><br>
                <button id="${id}" type="submit" class='edit'>Salvar Alterações</button>
                <button id="${id}" class='cancel'>Salvar Alterações</button>
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
            console.log(obj)
            User.pathMyProducts("/my/products/",id, obj )
        })

        // static postProduct(){
        //     console.log(oi)
        // }
    }
    deleteProduct() {

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




