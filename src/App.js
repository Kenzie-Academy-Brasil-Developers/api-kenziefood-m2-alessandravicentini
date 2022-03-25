
import {Api}  from "./Api/Api.js"
import {Filter}         from "./Controllers/Filter.js"
import { Vitrine } from "./Models/Vitrine.js";
await Api.getProduct()

const searchBar   = document.querySelector('.search')
searchBar.addEventListener('keyup' , Filter.searchBar)

const btnTodos = document.querySelector('.btn-todos')
btnTodos.addEventListener('click', Filter.listAll)

const buttons = document.querySelectorAll('.btn-filter button')
const filterButtons = Array.prototype.slice.call(buttons).slice(1,4)

filterButtons.forEach((button) => {
	button.addEventListener('click', Filter.listFiltered)
})


const btnAdd      = document.querySelectorAll('.btn-cart__add')
btnAdd.forEach(btn => btn.addEventListener('click', Vitrine.totalPrice))




