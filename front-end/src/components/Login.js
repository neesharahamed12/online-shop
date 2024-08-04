import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email,setEmail] =React.useState('');
    const [password,setPassword] =React.useState('');
    const navigate =useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user');
        if(auth){
            navigate("/")
        }
    })
 
    const handleLogin = async () => {
        console.warn("email pass");
        console.warn(email, password);
        try {
            let response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let result = await response.json();
            console.warn(result);

            // Handle successful login, e.g., navigate to a different page
            if (result.result !== 'No User found') {
                localStorage.setItem("user",JSON.stringify(result));
                navigate('/'); 
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }

  return (
    <div className='login'>
        <h1>Login Page</h1>
        <input type='text' className='inputBox' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input type='password' className='inputBox' placeholder='Enter Password' onChange={(e) =>setPassword(e.target.value)} value={password}/>
        <button onClick={handleLogin} className='btn' type='button'>Login</button>
    </div>
  )
}





export default Login