//React in iported here
import React from 'react'
//react-router-dom is imported here
import { Link } from 'react-router-dom'
//Menu module is imported here
import Menu from './Menu'
//Search module is imported and this was add by Sir Umeer Surkhal on mokupsday in projects 
import Search from './Search'
//header errow ===>>> function is copied from google and adjusted here
const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        Instagram 
                    </h1>
                </Link>
              
                <Search />
              
                <Menu />
            </nav>
        </div>
    )
}

export default Header
