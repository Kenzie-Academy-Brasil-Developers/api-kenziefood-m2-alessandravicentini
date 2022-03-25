import { ProductsControllers } from "../Controllers/products-control.js"
import { User } from "../Controllers/Routers.js"

class ProductsList {

    static createList(data) {

        
        const ul = document.querySelector('.ul-list')
        ul.innerHTML = ''
        
        
        data.forEach(product => {
            const {imagem, nome, descricao, categoria, id} = product

            const li = document.createElement('li')

            li.innerHTML = `
                <img src=${imagem}>

                <p>${nome}</p>  

                <span><p>${categoria}</p></span> 

                <p>${descricao}</p> 

                <div>
                    <button id='${id}'  class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button id='${id}'  class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                </div>
                `      

            ul.appendChild(li)
        }) 

        const btnDeleteProduct = document.querySelectorAll('.btn-delete')
        btnDeleteProduct.forEach(btn => btn.addEventListener('click',  () =>{
            ProductsControllers.deleteProduct()

            
            User.deleteMyProducts('/my/products/', btn.id)
            
            setTimeout(() => {
                window.location.reload()
            }, 2000); 
            
        }))

        const btnEditProduct = document.querySelectorAll('.btn-edit')
        btnEditProduct.forEach(btn => btn.addEventListener('click', (event) => { 
            
            const productInfo = JSON.parse(localStorage.getItem('product'))
            const productInfoForm = []

            productInfo.forEach(product => { 
                
                if(event.currentTarget.id == product.id) {
                    productInfoForm.push(product)
                    
                   ProductsControllers.formEditProduct(productInfoForm)

                   
                }
                
                
            })
                     
            
        }))

    }
    
}

export {ProductsList}