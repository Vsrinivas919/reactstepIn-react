import { APP_LOGO } from '../utils/constants'

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;