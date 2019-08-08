import React, {useState} from 'react'

import logo from '../assets/logo.svg'
import './Login.css'

function Login() {
    const [ username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(username)
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <img src={logo} alt="TinDev" />
            <input
             placeholder="Digite seu usuario do Github" 
             value={username}
             onChange={e=> setUsername(e.target.value)}
             />
            <button type="submit">Enviar</button>
            </form>
            
        </div>
        
    )
}

export default Login