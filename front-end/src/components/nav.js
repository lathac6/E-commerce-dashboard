
import { Link } from "react-router-dom"
import React from 'react'
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const auth = localStorage.getItem('user');

  const navigate = useNavigate();


  const logout = () => {
    console.warn("apple");
    localStorage.clear()
    navigate("/signup")
  }

  return (
    <div className="nav">
      <img className="logo" src="https://imgs.search.brave.com/3XCIJCe_QeUPVJ4eHzlTcRfDND-vaUStMx11BsO7g7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNDA3MzM5/Ny8xNDIxMC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE0MjEwMjEw/Mi1zdG9jay1waG90/by1nb2xkLXN0YXIt/bG9nby5qcGc" alt="logo" />
      {auth ?
        <ul className="nav-ul" >
          <li><Link to="/">Product</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link>
        </ul> :

        <ul className="nav-ul">
          <li> <Link to="/signup">Sign Up</Link></li>

          <li><Link to="/login">Login</Link></li>

        </ul>}

    </div>
  )
}

export default Nav
