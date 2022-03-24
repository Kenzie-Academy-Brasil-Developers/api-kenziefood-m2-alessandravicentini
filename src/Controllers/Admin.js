import { ProductsList } from "../Models/productsList-model.js";
import { Modal } from "../Models/modal-model.js"
import { User } from "../Controllers/Routers.js"
import {ProductsControllers} from "../Controllers/products-control.js"

User.getMyProducts('/my/products')
Modal.showModalStatus()

ProductsControllers.newProduct()

ProductsControllers.editProduct()
/* ProductsControllers.postProduct() */


