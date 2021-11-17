import * as React from "react";
import Gravatar from "react-gravatar";

export default function Profil(){
    return(
        <div className="container_login">
            <div className="container_login_title">
                <h1 className="login">PROFIL</h1>
            </div>
            <div className="container_profil">
                <Gravatar email="johndoe@example.com" size={150} className="custom_avatar" />
                <a href="#" className="link wishlist">Wishlist</a>
                <div className="line_profil">
                    <p>Nickname</p>
                    <p className="text_profil">Xx_D4rkS4suk3_xX</p>
                </div>
                <div className="line_profil">
                    <p>E-mail</p>
                    <p className="text_profil">johndoe@example.com</p>
                </div>
                <div className="line_profil">
                    <p>Password</p>
                    <p className="text_profil">yeuxDeCheval</p>
                </div>
                <a href="#" className="link new_password">Change Password</a>
                <div className="container_order">
                    <button type="button" className="order">Your Order</button>
                </div>
                <div className="container_logout">
                    <button type="button" className="logout">Log Out</button>
                </div>
            </div>
        </div>
    )
}