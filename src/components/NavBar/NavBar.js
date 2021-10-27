import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    const [categories, setCategories] = useState([])
    
    useEffect(() => {
         const db = getFirestore()

         const getCategories = async () =>{
             try {
                const resp = await db.collection('categorias').get(); 
                setCategories(resp.docs.map(cat => ({id: cat.id, ...cat.data()})));
             } catch (error) {
                 console.error(error)
             }
         }
         getCategories()
    }, [])

    const setActiveLink = (e) => {
        document.querySelectorAll('.nav-item .nav-link').forEach(item =>{
            item.classList.remove("active")
        })
        e.target.classList.add('active')
    }
    
    
    return (
        <div className="container d-flex px-0">
            <nav className="navbar navbar-light navbar-expand-md bg-light w-100">
            <div className="container-fluid">
                <h1><a className="navbar-brand mb-0 h1" href="/" style={{fontFamily:"Fraunces,sans-serif",fontWeight:"900"}}><span  className="text-danger">Flama</span>Keys</a></h1>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body w-100">
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                        {categories.map(cat =>(
                            <li key={cat.id} className="nav-item" onClick={setActiveLink}>
                                <Link className="nav-link" to={cat.key.length > 1 ? `/categoria/${cat.key}`: cat.key}>{cat.nombre}</Link>
                            </li>
                        ))}
                    </ul>
                 </div>
                </div>
                <div className="actionsNavbar d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            </nav>
            <CartWidget />
        </div>
     )
};
 
export default NavBar;