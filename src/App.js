
//import { ProductsList } from "./Models/productsList-model.js";
import {Api}  from "./Api/Api.js"
import {Filter}         from "./Controllers/Filter.js"
import { Vitrine } from "./Models/Vitrine.js";
import { User } from "./Controllers/Routers.js";
//import {Register} from "./Models/Register.js"
await Api.getProduct()

/**/
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

/*******************/



//const responseRegister = await User.register("/auth/register") 
//console.log(responseRegister)


/* import { ProductsControllers } from "./Controllers/products-control.js"


ProductsControllers.productForm() */




// const responseRegister = await User.register("/auth/register", {

//     "name": "equipe2-t9",
//     "email": "equipe2-t9@gmail.com",
//     "password": "2345"

// })



// const responseLogin = await User.login("/auth/login", {
//     "email": "equipe2-t9@gmail.com",
//     "password": "2345"
// })


// const responseMyProduscts = await User.getMyProducts("/my/proucts", {
//	"nome": "Bolinho",
//	"preco": 5,
//	"categoria": "Doce",
//	"imagem": "https://picsum.photos/200/300",
//	"descricao" : "Lorem ipsum",
	
// })




//  const responsePost = await User.pathMyProducts("/my/products", {
// 	"nome": "Bolinho",
// 	"preco": 5,
// 	"categoria": "Doce",
// 	"imagem": "https://picsum.photos/200/300",
// 	"descricao" : "Lorem ipsum",

// })

// const responsePathMyProducts = await User.pathMyProducts("/my/products/", 1, {

// 	"nome": "Bolinho"

// })

// const responsePathMyProducts = await User.pathMyProducts("/my/products/", 1) 



/*
USUÁRIO

{
	"id": 21,
	"name": "equipe2-t9",
	"email": "equipe2-t9@gmail.com",
	"password": "$2a$08$FZhemzP8XlbBj7WEOchOn.tHr.OO6ySYYuvwVnDV66YWFMuUFsDcC",
	"updatedAt": "2022-03-21T21:41:17.431Z",
	"createdAt": "2022-03-21T21:41:17.431Z"
}

TOKEN
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY0NzkwMTI4OSwiZXhwIjoxNjQ4NzY1Mjg5LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.tswL95-E2kaV1TAOZ7qfQtdo5u5P6DbifseMMC0aK7c"

*/ 



