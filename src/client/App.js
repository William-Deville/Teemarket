import * as React from "react";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Register from "./components/Register";
import Wishlist from "./components/Wishlist";
import Header from "./components/Header";
import Homepage from "./components/Homepage";


const App = () => {

    const [page, setPage] = React.useState("Homepage")
    
    if(page === "Cart") {

        return (
            <div>
                <Header setPage={setPage}/>
                <Cart setPage={setPage}/>
            </div>
        )
    }

    if (page === "Login") {
        return (
            <div>
                <Header setPage={setPage}/>
                <Login setPage={setPage}/>
            </div>
        )
    }

    if (page === "Register") {
        return (
            <div>
                <Header setPage={setPage}/>
                <Register setPage={setPage}/>
            </div>
        )
    }

    if (page === "Wishlist") {
        return (
            <div>
                <Header setPage={setPage}/>
                <Wishlist setPage={setPage}/>
            </div>
        )
    }
        
    

    if (page === "Homepage") {
        return(
            <div>
                <Header setPage={setPage}/>
                <Homepage setPage={setPage}/>
            </div>
        )
    }

    
};

export default App;