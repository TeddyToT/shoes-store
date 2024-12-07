import OrderDetail from "../pages/order_detail"
import Cart from "../pages/cart"
import Home from "../Pages/Home"
import OrderManagement from "../pages/order_management"
import Account from "../pages/account"
import Payment from "../pages/payment"
import OrderTracking from "../pages/order_tracking"
import AllProducts from "../pages/AllProducts/AllProducts"
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import Search from "../pages/Search/Search"
import Introduce from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/order-detail', conponent: OrderDetail },
    { path: '/cart', conponent: Cart },
    { path: '/order-management', conponent: OrderManagement },
    { path: '/account', conponent: Account },
    { path: '/payment', conponent: Payment },
    { path: '/ordertracking', conponent: OrderTracking },


    {path:"/san-pham/:id", conponent: ItemDetails},
    {path:"/san-pham", conponent: AllProducts},
    {path:"/dang-nhap", conponent: Login},
    {path:"/dang-ky", conponent: SignUp},
    {path:"/tim-kiem", conponent: Search},
    {path:"/gioi-thieu", conponent: Introduce},
    {path:"/lien-he", conponent: Contact},
]

export { publicRoutes };