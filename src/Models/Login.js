import { User } from "../Controllers/Routers.js"
const container = document.querySelector('.container')

export class Login {

    static TemplateLogin(){
        container.innerHTML = `
        <section class="container-cadastro">
            <h1 class="titulo-login">Kenzie <span class="spanFood">Food</span></h1>
            <form action="">
                <input name="email" type="email" placeholder="Email">
                <input name="password" type="password" placeholder="Password">
                <button class="btn-login">Login</button>
            </form>
            <a href="./cadastro.html">Ainda não possui cadastro?</a>
            <a class="home" href="/index.html">Voltar para home</a>
        </section>
        `
    }

    static async formLogin(event){
        event.preventDefault()
        const dados = [...event.target]

        const obj = {}
        dados.forEach(current =>{
            if(current.name){
                const  name  = current.name
                const value  = current.value

                obj[name]    = value
            }

        })
        
        await User.login('/auth/login',obj)

    }
}
Login.TemplateLogin()

const formLogin  = document.querySelector('form')
formLogin.addEventListener('submit', Login.formLogin)