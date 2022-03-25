import { User } from "../Controllers/Routers.js"
import { ProductsControllers } from "../Controllers/products-control.js"

User.getMyProducts('/my/products')

ProductsControllers.newProduct()

const buttons = document.querySelectorAll('.btn-filter button')
const filterButtons = Array.prototype.slice.call(buttons).slice(1,4)

filterButtons.forEach((button) => {
	button.addEventListener('click', Filter.listFiltered)
})

