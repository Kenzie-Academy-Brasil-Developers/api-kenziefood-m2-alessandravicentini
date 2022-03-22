import { RemoveCart } from "./Models/RemoveCart.js"
import {Vitrine} from "./Models/Vitrine.js"
import {Api}  from "./Api/Api.js"
await Api.getProdutcts()

Vitrine.listVitrine()

Vitrine.qtdProducts()

const btnAddCart  = document.querySelectorAll('.btn-add__cart')
btnAddCart.forEach(btn => btn.addEventListener('click', Vitrine.templateCart))




