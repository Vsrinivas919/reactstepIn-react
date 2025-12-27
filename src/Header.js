import { APP_LOGO } from '../utils/constants'
import { useState } from 'react';



const Header = () => {
    const [loginFlag, setLoginFlag] = useState(true)

    return (
        <div id='header'>
            <div id='logo-container'>
                <img id='logo' src={APP_LOGO}></img>
            </div>
            <div id='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>OFFERS</li>
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