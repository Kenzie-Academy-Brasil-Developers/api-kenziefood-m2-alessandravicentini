import { Vitrine } from "../Models/Vitrine.js"

export class Api{

    static ROTA  = `https://kenzie-food-api.herokuapp.com/products`
    
    static async getProdutcts(){

        const response  = await fetch(this.ROTA)
        const data      = await response.json()

        localStorage.setItem('products', JSON.stringify(data))
        Vitrine.listVitrine(data)
    }
}
