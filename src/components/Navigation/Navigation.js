import './Navigation.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Session from "react-session-api/src";

function Navigation({menuOpen, setMenuOpen}) {

    useEffect(() => {
        menuOpen ? OpenMenu() : CloseMenu()
    }, [menuOpen])

    const user = Session.get("user");

    const OpenMenu = () => {
        document.getElementById("menu-nav-div").style.cssText = "right: 0; visibility: visible;";
        document.getElementById("CloseOut-Menu-nav").style.cssText = "right: 0; visibility: visible;";
    }

    const CloseMenu = () => {
        document.getElementById("menu-nav-div").style.cssText = "right: -35rem; visibility: hidden;";
        document.getElementById("CloseOut-Menu-nav").style.cssText = "visibility: hidden;";
    }

    return (
        <>
            <div className='menu-nav-div' id='menu-nav-div'>
                <div className='menu-nav'>
                    
                    <div className="burger-menu-close" onClick={CloseMenu}>
                        <div className='div1'></div>
                        <div className='div2'></div>
                    </div>
                    <ul>
                        <li><NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "choice choice-active" : "choice" }
                            onClick={()=>{setMenuOpen(false)}}>Accueil</NavLink>
                        </li>
                        <li><NavLink
                            to="/demandes/list"
                            className={({ isActive }) => isActive ? "choice choice-active" : "choice" }
                            onClick={()=>{setMenuOpen(false)}}>Mes demandes</NavLink>
                        </li>
                        {user ?
                            <li><NavLink
                                to="/compte"
                                className={({ isActive }) => isActive ? "choice choice-active" : "choice" }
                                onClick={()=>{setMenuOpen(false)}}>Mon compte</NavLink>
                            </li>
                        :
                            <li><NavLink
                                to="/inscription"
                                className={({ isActive }) => isActive ? "choice choice-active" : "choice" }
                                onClick={()=>{setMenuOpen(false)}}>Se connecter</NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </div>
            <div className="CloseOut-Menu-nav" id="CloseOut-Menu-nav" onClick={()=>{
                    setMenuOpen(false)
                }}>

            </div>
        </>
    );
}

export default Navigation;
