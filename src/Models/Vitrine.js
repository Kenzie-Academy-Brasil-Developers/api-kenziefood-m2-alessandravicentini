const containerVitrine  = document.querySelector('.container-vitrine__product')

export class Vitrine{
   
    
    static templateCart(event){
        
        event.preventDefault()

        const cart      = document.querySelector('.cart')
        const products  = JSON.parse(localStorage.getItem('products'))
        const btnCart   = event.target.id

        products.map(current => {
            if(btnCart == current.id){
                
                const spanPrice   = document.querySelector('.total-price')
            
                Vitrine.count += current.preco
                spanPrice.innerHTML = `${new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(Vitrine.count)}`
                

                const figure    = document.createElement('figure')
                figure.classList.add('figure--cart')

                const imgCART   = document.createElement('img')
                imgCART.src     = `${current.imagem}`

                const h3        =  document.createElement('h3')
                h3.innerText    =  `${current.nome}`

                const btnRemove =  document.createElement('button')
                btnRemove.classList.add('btn-remove')
                btnRemove.id = current.id
                btnRemove.innerHTML  = '🗑️'//<i class="fa-solid fa-trash"></i>
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
        })

        Vitrine.qtdProducts()
    }
    static qtdProducts(){
        const spanQtd     = document.querySelector('.qtd-total')
        const section     = document.querySelector('.cart')
        spanQtd.innerHTML = section.childElementCount 
        
    }

    static  count = 0
    
    static = contador = 0
    static decrementarPrice(){
        const data     = JSON.parse(localStorage.getItem('products'))
        const dataProd = [...data]
        const spanPrice   = document.querySelector('.total-price')

        const btnRemove   = document.querySelectorAll('.btn-remove')
        
        
        for(let i = 0; i < btnRemove.length; i++){
            for(let c = 0; c < dataProd.length; c++){
                if(btnRemove[i].id == dataProd[c].id){
                    Vitrine.contador = dataProd[c].preco
                    
                }
                
            }
        }
        if(Vitrine.count > 0) {
                Vitrine.count -= Vitrine.contador
        }else{
                Vitrine.count  = 0
        }
        spanPrice.innerHTML = `${new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(Vitrine.count)}`
        
    }

    static listarVitrine(product){
        
        containerVitrine.innerHTML = ''
        const produto  = [...product]

        produto.forEach(element => {
            const figure  = document.createElement('figure')
            figure.classList.add("card-product")

            const divImg     = document.createElement('div');
            divImg.classList.add('div-img')

            const img        = document.createElement('img')
            img.src          = element.imagem
            

            const divTexto   = document.createElement('div')
            divTexto.classList.add('div-texto')

            const h3         = document.createElement('h3')
            h3.innerHTML     = element.nome

            const p          = document.createElement('p')
            p.innerText      = element.descricao

            const span       = document.createElement('span')
            span.classList.add('card-product__category')
            span.innerText   = element.categoria

        
            const divBtn        = document.createElement('div')
            divBtn.classList.add('container-btn__card')

            const spanPrice  = document.createElement('span')
            spanPrice.classList.add('card-product__price')
            spanPrice.innerText = `${new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(element.preco)}`

            const btnAdd     = document.createElement('button')
            btnAdd.classList.add('btn-cart__add')
            btnAdd.id        = element.id
            btnAdd.innerHTML = '&#x1F6D2'
            btnAdd.addEventListener('click', Vitrine.templateCart)

            divImg.appendChild(img)
            divTexto.append(h3, p, span)
            divBtn.append(spanPrice, btnAdd)

            figure.append(divImg,divTexto, divBtn)

            containerVitrine.appendChild(figure)
            
        });
        

    }

    static removeCart(event){
        const btnCart  = event.target
        const products  = JSON.parse(localStorage.getItem('products'))
        const prod      = [...products]
        
        prod.forEach(current => {
            if(btnCart.id == current.id){
                Vitrine.count -=  current.preco
                btnCart.parentElement.remove()
                
            }
        })
        Vitrine.qtdProducts()
        const spanPrice   = document.querySelector('.total-price')
        spanPrice.innerHTML = `${new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(Vitrine.count)}`
    }
}