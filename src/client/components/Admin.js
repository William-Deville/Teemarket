import * as React from "react";
import UploadImg from "./UploadImg"

export default function Admin(){
    return(
        <div className="container_login">
            <div className="container_login_title">
                <h1 className="login">ADMIN</h1>
            </div>
            <div className="container_login_main">
                <div className="container_login_input">
                    <h2 className="subTitle_login">Name</h2>
                    <input className="input_login" type="text" placeholder="Name of poster" />
                    <div className="add_img">
                        <UploadImg />
                    </div>
                    <div className="button_input">
                        <button type="button" className="button_login">ADD NEW POSTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}