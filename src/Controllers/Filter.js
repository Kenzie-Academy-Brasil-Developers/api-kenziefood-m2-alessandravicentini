import { Vitrine } from "../Models/Vitrine.js"
import { ProductsList } from "../Models/productsList-model.js"

export class Filter {

    static searchBar(event){
        
        const data     = JSON.parse(localStorage.getItem('products'))
        const dataProd = [...data]
        
        const searchString = event.target.value.toLowerCase()

        const product = dataProd.filter((current) => {
            return current.nome.toLowerCase().includes(searchString)
        })

        Vitrine.listarVitrine(product)

    }

    static listAll(){

        const data     = JSON.parse(localStorage.getItem('products'))
        Vitrine.listarVitrine(data)
    
    }

    static listFiltered(event){
        event.preventDefault()

        const target   = event.target.name
        
        const data     = JSON.parse(localStorage.getItem('products'))
        const dataProd = [...data]

        const output = dataProd.filter(current => {
            if (target == current.categoria){
                return current.categoria
            }
        })

        Vitrine.listarVitrine(output)
    }

    static adminSearchBar(event){
        
        const data     = JSON.parse(localStorage.getItem('product'))
        const dataProd = [...data]
        
        const searchString = event.target.value.toLowerCase()

        const product = dataProd.filter((current) => {
            return current.nome.toLowerCase().includes(searchString)
        })

        ProductsList.createList(product)

    }

    static adminListAll(){

        const data     = JSON.parse(localStorage.getItem('product'))
        ProductsList.createList(data)
    
    }

    static adminListFiltered(event){
        event.preventDefault()

        const target   = event.target.innerText
            
        const data     = JSON.parse(localStorage.getItem('product'))
        const dataProd = [...data]

        const output = dataProd.filter(current => {
            if (target == current.categoria){
                return current.categoria
            }
        })

        ProductsList.createList(output)
    }

}
