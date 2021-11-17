import * as React from "react";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Register from "./components/Register";
import Header from "./components/Header";

const App = () => {

    const [page, setPage] = React.useState("Cart")
    
    if(page === "Cart") {
        return (
            <div>
                <Header setPage={setPage}/>
                <Cart setPage={setPage}/>
                <btn onClick = {()=> setPage("Login")}> Login</btn>
                <btn onClick = {()=> setPage("Register")}>Register</btn>
            </div>
        )
    }

    if (page === "Login") {
        return (
            <div>
                <Header setPage={setPage}/>
                <Login/>
            </div>
        )
    }

    if (page === "Register") {
        return (
            <div>
                <Header setPage={setPage}/>
                <Register/>
            </div>
        )
    }
};

export default App;