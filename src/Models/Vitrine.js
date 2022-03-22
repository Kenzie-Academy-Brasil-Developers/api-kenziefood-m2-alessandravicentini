const containerHeader  = document.querySelector('.container-header')
const containerMain    = document.querySelector('.container-main')
const containerCart    = document.querySelector('.container-cart')

export class Vitrine {

    static listVitrine(){
        const products = JSON.parse(localStorage.getItem('products'))

        containerHeader.innerHTML = `
        <div class="logo">
            <h1>Kenzie</h1>
            <span>Food</span>
        </div>
        <input type="text" placeholder="pesquisar por produtos">
        <img src="src/Style/img/search-removebg-preview.png" alt="">
        `
        const sectionBtn     = document.createElement('section')
        sectionBtn.classList.add('btn-filter')
    
        const btnAll         = document.createElement('button')
        btnAll.classList.add('btn-all')
        btnAll.innerText     = 'Todos'

        const btnBakery      = document.createElement('button')
        btnBakery.classList.add('btn-bakery')
        btnBakery.innerHTML  = '<img src="src/Style/img/pao-removebg-preview.png" alt="">Panificadora '
        
        const btnFruits     = document.createElement('button')
        btnFruits.classList.add('btn-fruit')
        btnFruits.innerHTML  = '<img src="src/Style/img/frutas0-removebg-preview.png" alt="">Fruta'
        
        const btnDrinks      = document.createElement('button')
        btnDrinks.classList.add('btn-drinks')
        btnDrinks.innerHTML  = '<img src="src/Style/img/bebidas0-removebg-preview.png" alt="">Bebidas'
        

        sectionBtn.append(btnAll,btnBakery,btnFruits,btnDrinks)
        containerMain.appendChild(sectionBtn)


        for(let i = 0; i < products.length; i++){

            const main               = document.createElement('main')
            main.classList.add('container-products')

            const figure             = document.createElement('figure')
            figure.classList.add('figure')

            const img                = document.createElement('img')
            img.src                  = products[i].imagem

            const spanCategoria      = document.createElement('span')
            spanCategoria.classList.add('span-category')
            spanCategoria.innerText  = products[i].categoria
            
            const h3                 = document.createElement('h3')
            h3.innerText             = products[i].nome

            const p                  = document.createElement('p')
            p.innerText              = products[i].descricao
            
            const spanPrice          = document.createElement('span')
            spanPrice.classList.add('span-price')
            spanPrice.innerText      = `R$ ${products[i].preco}`

            const btnAddCart         = document.createElement('button')
            btnAddCart.classList.add('btn-add__cart')
            btnAddCart.innerHTML     = '<img src="src/Style/img/carrinho-removebg-preview.png" alt="">'

            figure.append(img,spanCategoria,h3,p,spanPrice,btnAddCart)
            main.appendChild(figure)

            containerMain.appendChild(main)
        }
        containerCart.innerHTML = `

            <aside class="container-lateral">
                <section class="header-cart">
                    <img src="src/Style/img/cart.png" alt="">
                    <h3>Carrinho</h3>
                </section>
                <section class="cart-overflow">
                    
                </section>
                <section class="total-products">
                    <h3>Quantidade</h3>
                    <span>5</span>
                </section>
                <section class="cart-price">
                    <h3>Total</h3>
                    <span>R$ 85.00</span>
                </section>
            </aside>
        `
    }

    
    static templateCart(event){
        event.preventDefault()
        
        const btnCart  = event.target
        console.log(btnCart)
    }
}
Vitrine.listVitrine()

const btnAddCart  = document.querySelectorAll('.btn-add__cart')
btnAddCart.forEach(btn => btn.addEventListener('click', Vitrine.templateCart))


