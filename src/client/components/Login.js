import React,{useState} from "react";
import axios from "axios";

export default function Login({setPage}){

    const [user, setUser] = useState({
        email:"",
        password:""
    })
    
    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user, [name]:value
        })
    }

    const login = () => {
        const {email, password} = user
        if(email && password){
            axios.post('http://localhost/api/user/login', user)
            .then((res) => {
                if (res.data.errors == undefined) {
                    alert("Connecté !")
                    setPage("Homepage")
                } if (res.data.errors.email !== undefined){
                    throw alert(res.data.errors.email)
                } if (res.data.errors.password !== undefined){
                    throw alert(res.data.errors.password)
                }
            })
        } else {
            alert("enter your email and password")
        }
    }
    

    return(
        <div className="container_login">
            <div className="container_login_title">
                <h1 className="login">LOGIN</h1>
            </div>
            <div className="container_login_main">
                <div className="container_login_input">
                    <h2 className="subTitle_login">E-mail</h2>
                    <input className="input_login" type="text" placeholder="johndoe@example.com" name="email" value={user.email} onChange={handleChange} />
                    <h2 className="subTitle_login">Password</h2>
                    <input className="input_login" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                    <div>
                        <a href="#" className="forgot">Forgot my password</a>
                    </div>
                    <div className="button_input">
                        <button type="button" className="button_login" onClick={login}>LOGIN</button>
                    </div>
                    <div className="create_login">
                        <btn onClick = {()=> setPage("Register")}>I haven't an account</btn>
                    </div>
                </div>
            </div>
        </div>
    )
}