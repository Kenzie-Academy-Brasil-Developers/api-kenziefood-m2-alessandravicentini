
export class RemoveCart {

    
    static removeProductCart(){
        
        const products  = JSON.parse(localStorage.getItem('products'))

        console.log(products[0].id)
}
}
