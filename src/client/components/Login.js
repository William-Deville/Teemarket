import * as React from "react";

export default function Login({setPage}){
    return(
        <div className="container_login">
            <div className="container_login_title">
                <h1 className="login">LOGIN</h1>
            </div>
            <div className="container_login_main">
                <div className="container_login_input">
                    <h2 className="subTitle_login">E-mail</h2>
                    <input className="input_login" type="text" placeholder="johndoe@example.com" />
                    <h2 className="subTitle_login">Password</h2>
                    <input className="input_login" type="text" placeholder="Password" />
                    <div>
                        <a href="#" className="forgot">Forgot my password</a>
                    </div>
                    <div className="button_input">
                        <button type="button" className="button_login">LOGIN</button>
                    </div>
                    <div className="create_login">
                        <btn onClick = {()=> setPage("Register")}>I haven't account</btn>
                    </div>
                </div>
            </div>
        </div>
    )
}