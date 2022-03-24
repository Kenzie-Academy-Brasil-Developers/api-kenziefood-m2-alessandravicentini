import { ProductsList } from "../Models/productsList-model.js"

const modal = document.querySelector('.modal')


class User {

    static url = 'https://kenzie-food-api.herokuapp.com'

    static infoUser = {
        token: {},
        information: {}
    }

    static async register(path, data) {

        const response = await fetch(`${this.url}${path}`, {

            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body":JSON.stringify(data)
        })
        const dados = await response.json()
        console.log(dados)
        console.log(response)
        
        if(response.status == 409){
            modal.style.display = 'flex'
            modal.innerHTML = 'User Already Exists!'
            
            setTimeout(() => {
                window.location.assign('./login.html')
            }, 2000);
            
        }else{
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
        console.log(dados)
        console.log(response)
        
        localStorage.setItem('infoUser', JSON.stringify(dados))

        this.infoUser.token = dados
        
        if(dados.error){

                modal.style.display = 'flex'
                modal.innerHTML = 'Email ou Password incorreto!'
            
            setTimeout(() => {
                window.location.assign('./login.html')
            }, 2000);
            
        }else{
            modal.style.display = 'flex'
            modal.innerHTML = 'Entrando...'
            setTimeout(() => {
                //window.location.assign('./login.html')
            }, 2000);
            
        }
        this.infoUser.token = dados
    }


    static async getMyProducts(path) {

        const infoUser = JSON.parse(localStorage.getItem('infoUser'))
        console.log(infoUser)
        const response = await fetch(`${this.url}${path}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${infoUser}`
            }
        })
        const responseData = await response.json()
        console.log(responseData)
        ProductsList.createList(responseData)
    }


    static async postMyProducts(path) {

        fetch(`${this.url}${path}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.infoUser.token}`
            },
            "body": JSON.stringify(data)
        })
        .then((res) => res)


    }

    static async pathMyProducts(path, id) {

        fetch(`${this.url}${path}:${id}`, {
            "method": "PATCH",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.infoUser.token}`
            },
            "body": JSON.stringify(data)
        })
        .then((res) => res)


    }

    static async deleteMyProducts(path, id) {
        fetch(`${this.url}${path}:${id}`, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.infoUser.token}`
            }

        })
        .then((res) => res)

    }

}
export { User }
