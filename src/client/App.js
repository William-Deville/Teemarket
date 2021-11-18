import * as React from "react";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Register from "./components/Register";
import Wishlist from "./components/Wishlist";

const App = () => {

    const [page, setPage] = React.useState("Cart")
    
    /*if(page === "Cart") {
        return (
            <div>
                <Cart/>
                <btn onClick = {()=> setPage("Login")}> Login</btn>
                <btn onClick = {()=> setPage("Register")}>Register</btn>
            </div>
        )
    }

    if (page === "Login") {
        return (
            <div>
                <Login/>
            </div>
        )
    }

    if (page === "Register") {
        return (
            <div>
                <Register/>
            </div>
        )
    }*/

    return (
        <div>
            <Wishlist/>
           
            
        </div>
    );
};

export default App;