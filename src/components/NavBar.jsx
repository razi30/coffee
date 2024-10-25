import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <h1>Shayadri Coffee</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
            <div className='search-bar'>
                <input type="text" placeholder='search'  />
            
            </div>

        </nav>
    )
}
export default NavBar