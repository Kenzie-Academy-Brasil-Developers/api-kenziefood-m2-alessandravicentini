

class ProductsList {

    static createLine(data) {
        const ul = document.querySelector('ul')
        console.log(ul)
        data.forEach(product => {
            const {imagem, nome, descricao, categoria} = product

            console.log(data)
            const li = document.createElement('li')

            li.innerHTML = `
                <img src=${imagem}>

                <p>${nome}</p>  

                <span><p>${categoria}</p></span> 

                <p>${descricao}</p> 

                <div>
                    <button><i class="fa-solid fa-pen-to-square"></i></button>
                    <button><i class="fa-solid fa-trash"></i></button>
                </div>
                `

            

            ul.appendChild(li)
        })
    }
}

export {ProductsList}