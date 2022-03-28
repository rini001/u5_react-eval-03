import React from 'react'
import { Link } from 'react-router-dom'
import { NavWrapper } from './Navbar.styled'
export const Navbar = () => {
  return (
    <NavWrapper >
            <div >
				<Link to="/">Register</Link>
			</div>
        <div >
				<Link to="/Login">Login</Link>
			</div>
			<div >
				<Link to="/Home">Home</Link>
			</div>
			<div >
				<Link to="/Product">Product</Link>
			</div>
		</NavWrapper>
  )
}
