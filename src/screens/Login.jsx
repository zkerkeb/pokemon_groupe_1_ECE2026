import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';


const Login = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault(); // Ici, vous pouvez ajouter la logique de validation du login console.log("email:", email); console
        console.log("Password   :", password)
        if (email === '' || password === '') { alert("Veuillez remplir tous les champs"); return; }

        axios({
            method: 'post',
            url: 'http://localhost:3000/auth/login',
            data: { email: email, password: password }
        }).then((response) => { 
            console.log(response.data); 
            localStorage.setItem('token', response.data.token);
            navigate("/app");
            // alert("Login successful");
         }).catch((error) => {
            console.error(error); alert("Login failed");
        })



    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email:</label>
                <input value={email}
                    onChange={e => setemail(e.target.value)}
                    type="text" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );

}

export default Login;