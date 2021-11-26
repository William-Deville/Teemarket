import React,{useEffect, useState} from "react";
import axios from "axios";




export default function Register({setPage}){

    const [user, setUser] = useState({
        pseudo:"",
        email:"",
        password:""
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user, [name]:value
        })
    }

    const register = (err) => {
        const {pseudo, email, password} = user
        if (pseudo && email && password){
            axios.post("http://localhost/api/user/register", user).then(res=>console.log(res))
        }else {
            alert ("invalid input")
        };
        console.log(err.data.errors);
    }

        

    
    return(
        <div className="container_login">
            <div className="container_login_title">
                <h1 className="login">REGISTER</h1>
            </div>
            <div className="container_login_main">

                <form method="POST">
                <div className="container_login_input">
                    <h2 className="subTitle_login">Nickname</h2>
                    <input className="input_login" type="text" placeholder="Xx_D4rkS4suk3_xX" name="pseudo" value={user.pseudo} onChange={handleChange} />
                    <h2 className="subTitle_login">E-mail</h2>
                    <input className="input_login" type="text" placeholder="johndoe@example.com" name="email" value={user.email} onChange={handleChange}/>
                    <h2 className="subTitle_login">Password</h2>
                    <input className="input_login" type="password" name="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                    <h2 className="subTitle_login">Confirm Password</h2>
                    <input className="input_login" type="password" name="confpassword" placeholder="Password" />
                    <div className="button_input">
                        <button type="button" className="button_login" onClick={register}>REGISTER</button>
                    </div>
                    <div className="create_login">
                        <btn onClick = {()=> setPage("Login")}>I have already an account</btn>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

