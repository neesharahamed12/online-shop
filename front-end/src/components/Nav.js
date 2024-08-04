import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// add something new here
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img alt='logo' className='logo' src='https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg?t=st=1722749910~exp=1722753510~hmac=8073bbfb3af9ceb4af29c839bf78e7518576ac0597c8ceccde3756fc9b943eb3&w=740'/>
            {auth ?
                <ul className='nav-ul'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign UP</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;