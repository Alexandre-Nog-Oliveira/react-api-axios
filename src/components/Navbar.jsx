import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}>Blog</Link>
        </h2>
        <ul>
            <li className='home-btn'>
                <Link to={'/'} >Home</Link>
            </li>
            <li className='new-btn'>
                <Link to={'/new'}>New Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar