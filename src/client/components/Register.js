import React,{useEffect, useState} from "react";
import axios from "axios";




export default function Register({setPage}){
 

    const [user, setUser] = useState({
        pseudo:"",
        email:"",
        password:"",
        confpassword:""
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user, [name]:value
        })
    }

    const register = () => {
        const {pseudo, email, password, confpassword} = user
        if (password === confpassword) {

            if (pseudo && email && password, confpassword){
                axios.post("http://localhost/api/user/register", user)
                .then((res) => {console.log(res.data.errors)


                    
                if(res.data.errors.pseudo !== ''){
                    alert(res.data.errors.pseudo)
                } if (res.data.errors.email !== ''){
                    alert(res.data.errors.email)
                } if (pseudo  = undefined){
                    console.log(ok);
                } else {
                    alert("Password doesn't match")
                }
            })
        } 
    } else {
        alert("Password doesn't match")
    }
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
                    <input className="input_login" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                    <h2 className="subTitle_login">Confirm Password</h2>
                    <input className="input_login" type="password" name="confpassword" value={user.confpassword} onChange={handleChange} placeholder="Password" />
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
