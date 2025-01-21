import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

function Navbar() {
  return (
    <header className="fixed top-0 w-full flex flex-col md:flex-row justify-between p-4 items-center bg-black text-white z-50">
      <div className="flex flex-col items-center md:items-end mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold">Abhijith Satheesan</h1>
        <h2 className="text-xs md:text-lg text-gray-400">Python Developer</h2>
      </div>
      <nav className="flex-grow flex justify-center mb-4 md:mb-0 space-x-1">
        <NavLink to="/" className="flex" activeClassName="active">
          {({ isActive }) => (
            <Button isActive={isActive} isNavLink={true}>Info</Button>
          )}
        </NavLink>
        <NavLink to="/work" className="flex" activeClassName="active">
          {({ isActive }) => (
            <Button isActive={isActive} isNavLink={true}>Work</Button>
          )}
        </NavLink>
        <NavLink to="/me" className="flex" activeClassName="active">
          {({ isActive }) => (
            <Button isActive={isActive} isNavLink={true}>Me</Button>
          )}
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;