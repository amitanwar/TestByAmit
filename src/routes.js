import { AddProduct } from 'Admin/Views/product/addProduct.jsx';
import { Dashboard } from './Admin/Views/index.js'
const adminRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "fa fa-dasktop",
        component: Dashboard,
        layout: '/admin'
    },
    {
        path: "/product",
        name: "product",
        icon: "fa fa-plus-square",
        component: AddProduct,
        layout: '/admin'
    }

]

export default adminRoutes;