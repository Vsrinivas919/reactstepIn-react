import { APP_LOGO } from '../utils/constants'
import { useState } from 'react';
import { Link } from 'react-router-dom'



const Header = () => {
    const [loginFlag, setLoginFlag] = useState(true)

    return (
        <div id='header'>
            <div id='logo-container'>
                <img id='logo' src={APP_LOGO}></img>
            </div>
            <div id='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link></li>
                    <li>
                        <Link to='/About'>ABOUT</Link></li>
                    <li>
                        <Link to='/Contact'>CONTACT</Link></li>
                    <li>
                        <Link to='/Offers'>OFFERS</Link></li>
                    <button id={loginFlag ? 'login-btn' : 'logout-btn'} onClick={() => {
                        if (loginFlag) {
                            setLoginFlag(false)
                        } else {
                            setLoginFlag(true)
                        }
                    }}>{loginFlag ? 'Login' : 'Logout'} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;