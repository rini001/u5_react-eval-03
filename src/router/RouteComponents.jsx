import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from "../components/Home";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { Products } from "../components/Products";
export const RouteComponents = () => {
    return (
		<div>
			<Navbar />
			<Routes>
				
                <Route path="/" element={<Register />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Login" element={<Login />}></Route>
				<Route path="/Product" element={<Products />}></Route>
				{/* <Route path="/Product/:userId" element={<AllProduct />}></Route> */}
				{/* <Route path="*" element={<DoNotExist />}></Route> */}
			</Routes>
		</div>
	);
}
