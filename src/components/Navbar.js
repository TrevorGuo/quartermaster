import * as React from 'react';
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className='nav-links'>PLOP</Link>
            <Link to="/groceries" className='nav-links'>Groceries</Link>
            <Link to="/cookbook" className='nav-links'>Cookbook</Link>
        </nav>
    );
}