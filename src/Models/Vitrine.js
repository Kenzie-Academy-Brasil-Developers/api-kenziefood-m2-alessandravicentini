const containerVitrine  = document.querySelector('.container-vitrine__product')

export class Vitrine{

    static listarVitrine(product){
        console.log(product)
        const produto  = [...product]
        produto.forEach(element => {
            const figure  = document.createElement('figure')
            figure.classList.add("card-product")

            const img        = document.createElement('img')
            img.src          = element.imagem

            const h3         = document.createElement('h3')
            h3.innerHTML     = element.nome

            const p          = document.createElement('p')
            p.innerText      = element.descricao

            const span       = document.createElement('span')
            span.classList.add('card-product__category')
            span.innerText   = element.categoria

            const spanPrice  = document.createElement('span')
            spanPrice.classList.add('card-product__price')
            spanPrice.innerText = `${new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(element.preco)}`

            const btnAdd     = document.createElement('button')
            btnAdd.classList.add('btn-cart__add')
            btnAdd.id        = element.id
            btnAdd.innerHTML = '&#x1F6D2'

            figure.append(img,h3,p,span,spanPrice,btnAdd)

            containerVitrine.appendChild(figure)
        });

    }

    static templateCart(event){
        
        event.preventDefault()

        const cart      = document.querySelector('.cart')
        const products  = JSON.parse(localStorage.getItem('products'))
        const btnCart   = event.target.id

        products.forEach(current => {
            if(btnCart == current.id){

                const figure    = document.createElement('figure')
                figure.classList.add('figure--cart')

                const imgCART   = document.createElement('img')
                imgCART.src     = `${current.imagem}`

                const h3        =  document.createElement('h3')
                h3.innerText    =  `${current.nome}`

                const btnRemove =  document.createElement('button')
                btnRemove.classList.add('btn-remove')
                btnRemove.id = current.id
                btnRemove.innerHTML  = '&#x1F5D1;&#xFE0F;'
                btnRemove.addEventListener('click', Vitrine.removeCart)

                const h4Categoria    = document.createElement('h4')
                h4Categoria.classList.add('categoria')
                h4Categoria.innerText = `${current.categoria}`

                const h4Preco         = document.createElement('h4')
                h4Preco.classList.add('preco')
                h4Preco.innerText     = `${new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(current.preco)}`

                figure.append(imgCART,h3,btnRemove,h4Categoria,h4Preco)
                cart.appendChild(figure)
            }
            Vitrine.qtdProducts()

        })

        
    }

    static removeCart(event){
        const btnCart  = event.target
        btnCart.parentElement.remove()
        Vitrine.qtdProducts()
    }

    static qtdProducts(){
        const spanQtd    = document.querySelector('.qtd-total')
        const section    = document.querySelector('.cart')
        spanQtd.innerHTML = section.childElementCount 
        
    }
}
