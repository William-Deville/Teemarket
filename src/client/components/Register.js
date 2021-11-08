import * as React from "react";

export default function Register(){
    return(
        <div className="container_login">
            <div className="container_login_title">
                <h1 className="login">REGISTER</h1>
            </div>
            <div className="container_login_main">
                <div className="container_login_input">
                    <h2 className="subTitle_login">Nickname</h2>
                    <input className="input_login" type="text" placeholder="Xx_D4rkS4suk3_xX" />
                    <h2 className="subTitle_login">E-mail</h2>
                    <input className="input_login" type="text" placeholder="johndoe@example.com" />
                    <h2 className="subTitle_login">Password</h2>
                    <input className="input_login" type="text" placeholder="Password" />
                    <h2 className="subTitle_login">Confirm Password</h2>
                    <input className="input_login" type="text" placeholder="Password" />
                    <div className="button_input">
                        <button type="button" className="button_login">REGISTER</button>
                    </div>
                    <div className="create_login">
                        <a href="#" className="create">I have already account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}