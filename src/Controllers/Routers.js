import { ProductsList } from "../Models/productsList-model.js"

const modal = document.querySelector('.modal')


class User {

    static infoUser = JSON.parse(localStorage.getItem('infoUser'))

    static url = 'https://kenzie-food-api.herokuapp.com'


    static async register(path, data) {

        const response = await fetch(`${this.url}${path}`, {

            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body":JSON.stringify(data)
        })
        
        if (response.status == 409){
            modal.style.display = 'flex'
            modal.innerHTML = 'User Already Exists!'
            
            setTimeout(() => {
                window.location.assign('./login.html')
            }, 2000);
            
        } else {
            modal.style.display = 'flex'
            modal.innerHTML = 'Email Cadastrado com sucesso!'
            setTimeout(() => {
                window.location.assign('./login.html')
            }, 2000);
            
        }

    }

    static async login(path, data) {

        const response = await fetch(`${this.url}${path}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })

        const dados = await response.json()
        
        localStorage.setItem('infoUser', JSON.stringify(dados))
        
        
        if (dados.error){

                modal.style.display = 'flex'
                modal.innerHTML = 'Email ou Password incorreto!'
            
            setTimeout(() => {
                window.location.assign('./login.html')
            }, 2000);
            
        } else {
            modal.style.display = 'flex'
            modal.innerHTML = 'Entrando...'
            setTimeout(() => {
                window.location.assign('./admin.html')
            }, 2000);
            
        }
        
        
    }


    static async getMyProducts(path) {

        const response = await fetch(`${this.url}${path}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.infoUser}`
            }
        })
        const responseData = await response.json()

        localStorage.setItem('product', JSON.stringify(responseData))
        
        ProductsList.createList(responseData)
        
    }


    static async postMyProducts(path, obj) {

        const response = await fetch(`${this.url}${path}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.infoUser}`
            },
            "body": JSON.stringify(obj)
        })
        const data    = await response.json()
        return data

    }

    static async pathMyProducts(path, id, data) {

        fetch(`${this.url}${path}${id}`, {
            "method": "PATCH",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.infoUser}`
            },
            "body": JSON.stringify(data)
        })
        .then((res) => console.log(res))
        

    }

    static async deleteMyProducts(path, id) {
        const infoUser = JSON.parse(localStorage.getItem('infoUser'))
        const response =  await fetch(`${this.url}${path}${id}`, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${infoUser}`
            }

        })
        const data    = await response
        return data

    }

}

export { User }
