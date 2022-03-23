import { User } from "../Controllers/Routers.js"
const container = document.querySelector('.container')

export class Register {

    static TemplateRegister(){
        container.innerHTML = `
        <section class="container-cadastro">
            <h1 class="titulo-login">Kenzie <span class="spanFood">Food</span></h1>
            <form action="">
                <input name="name" type="text" placeholder="Nome">
                <input name="email" type="email" placeholder="Email">
                <input name="password" type="password" placeholder="Password">
                <button>Registrar-se</button>
            </form>
            <a href="./login.html">Fazer login</a>
            <a class="home" href="/index.html">Voltar para home</a>
        </section>
        `
    }

    static async formRegister(event){
        event.preventDefault()

        const dados = [...event.target]
        const obj = {}
        dados.forEach(current => {
            if(current.name){
                const name  = current.name
                const value = current.value

                obj[name] = value
            }
        })
        console.log(obj)
        User.register('/auth/register',obj)


    }
}
Register.TemplateRegister()

const formCadastro = document.querySelector('form')
formCadastro.addEventListener('submit', Register.formRegister)