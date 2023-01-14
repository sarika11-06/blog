import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar
{/* <a href="/create">New Blog</a> */}
// Using anchor tag will refresh the page and by using Link in react the page will not load