import { Vitrine } from "../Models/Vitrine.js"

export class Filter {

    static searchBar(event){
        
        const data     = JSON.parse(localStorage.getItem('products'))
        const dataProd = [...data]

        
        
        const searchString = event.target.value.toLowerCase()

        let product = dataProd.filter((current) => {
            return current.nome.toLowerCase().includes(searchString)
        })

        Vitrine.listarVitrine(product)

    }

    static listAll(){
        const btnAll  = document.querySelector('.btn-todos')
        btnAll.classList.add('hover')

        const btPanificadora  = document.querySelector('.btn-panificadora')
        btPanificadora.classList.remove('hover')

        const btnFruit  = document.querySelector('.btn-frutas')
        btnFruit.classList.remove('hover')

        const btnDrink  = document.querySelector('.btn-bebidas')
        btnDrink.classList.remove('hover')

        const data     = JSON.parse(localStorage.getItem('products'))
        Vitrine.listarVitrine(data)
    
    }

    static listBakery(event){
        event.preventDefault()
        
        const target  = event.target.name

        const data     = JSON.parse(localStorage.getItem('products'))
        const dataProd = [...data]

        const output   = dataProd.filter(current => {
            if(target == current.categoria){
                return current.categoria
            }
        })
        
        Vitrine.listarVitrine(output)
        const btnAll  = document.querySelector('.btn-todos')
        btnAll.classList.remove('hover')

        const btPanificadora  = document.querySelector('.btn-panificadora')
        btPanificadora.classList.add('hover')

        const btnFruit  = document.querySelector('.btn-frutas')
        btnFruit.classList.remove('hover')

        const btnDrink  = document.querySelector('.btn-bebidas')
        btnDrink.classList.remove('hover')
    }

    static listFruit(event){
        event.preventDefault()
        const btnFruit  = document.querySelector('.btn-frutas')
        btnFruit.classList.add('hover')

        const btnAll  = document.querySelector('.btn-todos')
        btnAll.classList.remove('hover')

        const btPanificadora  = document.querySelector('.btn-panificadora')
        btPanificadora.classList.remove('hover')

        const btnDrink  = document.querySelector('.btn-bebidas')
        btnDrink.classList.remove('hover')

        const target  = event.target.name

        const data     = JSON.parse(localStorage.getItem('products'))
        const dataProd = [...data]

        const output   = dataProd.filter(current => {
            if(target == current.categoria){
                return current.categoria
            }
        })
        Vitrine.listarVitrine(output)
    }

    static listDrink(event){
        event.preventDefault()

        const btnAll  = document.querySelector('.btn-todos')
        btnAll.classList.remove('hover')

        const btPanificadora  = document.querySelector('.btn-panificadora')
        btPanificadora.classList.remove('hover')

        const btnFruit  = document.querySelector('.btn-frutas')
        btnFruit.classList.remove('hover')

        const btnDrink  = document.querySelector('.btn-bebidas')
        btnDrink.classList.add('hover')
        const target  = event.target.name

        const data     = JSON.parse(localStorage.getItem('products'))
        const dataProd = [...data]

        const output   = dataProd.filter(current => {
            if(target == current.categoria){
                return current.categoria
            }
        })
        Vitrine.listarVitrine(output)
    }
}
