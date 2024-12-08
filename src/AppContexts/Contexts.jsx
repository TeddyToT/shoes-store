
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContexts = createContext({})

export const AppProvider = ({ children }) => {
    // const[email, setEmail] = useState("")
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [carts, setCarts] = useState([]);
    
    
    

    const fetchProducts = () => {
        axios.get("http://localhost/be-shopbangiay/api/product.php")
            .then((res) => {
                
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    
    const fetchCategories = () => {
        axios.get("http://localhost/be-shopbangiay/api/category.php")
            .then((res) => {
               
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchUsers = () => {
        axios.get("http://localhost/be-shopbangiay/api/user.php")
            .then((res) => {
                
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchManufacturers = () => {
        axios.get("http://localhost/be-shopbangiay/api/manufacturer.php")
            .then((res) => {
                
                setManufacturers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchOrders = () => {
        axios.get("http://localhost/be-shopbangiay/api/invoice.php")
            .then((res) => {
                
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchCarts = () => {
        axios.get("http://localhost/be-shopbangiay/api/cart.php")
            .then((res) => {
                
                setCarts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
        fetchUsers();
        fetchOrders();
        fetchManufacturers();
        fetchCarts();
    }, []);
    
    return (
        <DataContexts.Provider value={{
            products, setProducts, fetchProducts,
            categories, setCategories, fetchCategories, 
            users, setUsers, fetchUsers,
            orders, setOrders, fetchOrders,
            manufacturers, setManufacturers, fetchManufacturers,
            carts, setCarts, fetchCarts
            
        }}>
            {children}
        </DataContexts.Provider>
    );
};
