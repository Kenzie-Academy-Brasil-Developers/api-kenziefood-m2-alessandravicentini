import { User } from "../Controllers/Routers.js"
import { ProductsControllers } from "../Controllers/products-control.js"
import { Filter } from "../Controllers/Filter.js"

User.getMyProducts('/my/products')

ProductsControllers.newProduct()

const inputSearch = document.querySelector('.filter-search')
inputSearch.addEventListener('keyup', Filter.adminSearchBar)

const adminBtnTodos = document.querySelector('.admin-btn-todos')
adminBtnTodos.addEventListener('click', Filter.adminListAll)

const adminButtons = document.querySelectorAll('.btn-filter-admin button')
const adminFilterButtons = Array.prototype.slice.call(adminButtons).slice(1,4)

adminFilterButtons.forEach((button) => {
	button.addEventListener('click', Filter.adminListFiltered)
})

