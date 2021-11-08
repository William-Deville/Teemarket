import * as React from 'react'
import { faHeart, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {

    const Heart = <FontAwesomeIcon icon={faHeart} />;
    const CartPlus = <FontAwesomeIcon icon={faCartPlus} />;
    const User = <FontAwesomeIcon icon={faUser} />;

    return (



        <header>
            <nav class="header-main-nav">
                <div class="header-logo">DATPLATE</div>
                <div class="header-searchbar">
                    <input class="search-text" type="text" placeholder="Search..."></input>
                </div>
                <div class="ul-icons">
                    <a href="#"><i className="svg">{Heart}</i>Liked</a>
                    <a href="#"><i className="svg">{CartPlus}</i>Cart</a>
                    <a href="#"><i className="svg">{User}</i>Sign in</a>
                </div>
                
            </nav>
        </header>
        
    )
}
