import OrderDetail from "../pages/order_detail"
import Cart from "../pages/cart"
import Home from "../Pages/Home"
import OrderManagement from "../pages/order_management"
import Account from "../pages/account"
import Payment from "../pages/payment"
import OrderTracking from "../pages/order_tracking"
import Search from "../pages/Search/Search";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/order-detail', conponent: OrderDetail },
    { path: '/cart', conponent: Cart },
    { path: '/order-management', conponent: OrderManagement },
    { path: '/account', conponent: Account },
    { path: '/payment', conponent: Payment },
    { path: '/ordertracking', conponent: OrderTracking },

    {path:"/san-pham/:id", conponent: ItemDetails},
    {path:"/san-pham", conponent: Search},
    

]

export { publicRoutes };