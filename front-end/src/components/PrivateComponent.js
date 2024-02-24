
import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'

const PrivateComponent = () => {

    const auth = localStorage.getItem('user');

    return auth ? <Outlet/> : <Navigate to='/signup' />

}

export default PrivateComponent
