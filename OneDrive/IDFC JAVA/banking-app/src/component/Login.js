import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate,Link } from 'react-router-dom'
import LoginSuccess from './LoginSuccess'


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('')
 
    const handleClick = (event) => {    
        event.preventDefault();
        const usernamePasswordCredentials = { username, password }
        if (username.length == 0) {
            toast.warning('Please enter email')
        } else if (password.length == 0) {
            toast.warning('Please enter password')
        } else {
            axios.post("http://localhost:8080/login", usernamePasswordCredentials)
               
                .then((response) => {
                    
                     alert(response.data.access_token)
                    if (response.data.roles != null ) {
                        toast.success('Welcome to my Application')
                     
                        const access_token= response.data.access_token
                        localStorage.setItem("access_token",access_token);
                      
                        localStorage['username'] = username
                        localStorage['password'] = password
                        localStorage['access_token'] = access_token

                    
                    
                     window.location.href = "/loginSuccess";
                    

                }else{
                    toast.error('Roll is null')
                }
            })
                
            .error((err) =>
            console.log(err),
           
            )
        }
    }

    return (
<div>
    <br></br>
<h1 className="mt-5 mb-4" style={{textAlign : "center"}}>Sign In</h1>
<div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded "  style={{display: 'flex',  justifyContent:'center'}}>
    <form>    
  <div className="form-group">
    <label className="mt-4">Email</label>
    <input type="text" className="form-control " aria-describedby="emailHelp" onChange = {e => setUsername(e.target.value)} required placeholder='email@gmail.com'/>
    <label >Password</label>
    <input type="password" className="form-control " onChange = {e => setPassword(e.target.value)} required placeholder='*******'/>
  </div>
  <div>
              <p>Already have an Account? CreateAccount <Link to={"/CreateAccount"}>here</Link> </p>
              <button type="submit" class="btn btn-outline-success" onClick={handleClick}>Login</button> &emsp;
              <button type="reset" class="btn btn-outline-warning">Reset</button>
 </div>
  </form>
</div>

</div>

    )
}


