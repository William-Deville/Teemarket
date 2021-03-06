import * as React from 'react'
import { faHeart, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header({setPage}) {

    const Heart = <FontAwesomeIcon icon={faHeart} />;
    const CartPlus = <FontAwesomeIcon icon={faCartPlus} />;
    const User = <FontAwesomeIcon icon={faUser} />;

    

    return (



        <header>
            <nav class="header-main-nav">
                <div class="header-logo">
                    <btn onClick = {()=> setPage("Homepage")}>DATPLATE</btn>
                </div>

                <div class="header-searchbar">
                    <input class="search-text" type="text" placeholder="Search..."></input>
                </div>

                <div class="ul-icons">
                    <btn onClick = {()=> setPage("Wishlist")}><i className="svg">{Heart}</i>Liked</btn>
                    <btn onClick = {()=> setPage("Cart")}><i className="svg">{CartPlus}</i>Cart</btn>
                    <btn onClick = {()=> setPage("Login")}><i className="svg">{User}</i>Sign in</btn>
                </div>
                
            </nav>
        </header>
        
    )
    }

