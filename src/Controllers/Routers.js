class User {

    static url = 'https://kenzie-food-api.herokuapp.com'

    static infoUser = {
        token: {},
        information: {}
    }



    static async register(path, data) {

        fetch(`${this.url}${path}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })
            .then((res) => res)

    }

    static async login(path, data) {

        const response = await fetch(`${this.url}${path}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })

        const resData = await response.json()

        this.infoUser.token = resData


    }


    static async getMyProducts(path) {

        const response = await fetch(`${this.url}${path}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.infoUser.token}`
            }
        })
        const responseData = await response.json()
        return responseData
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