import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <div className="container">
                <Link to='/' className='navbar-brand text-white'>Redux CRUD APP</Link>
            </div>
        </div>
    )
}

export default Navbar
