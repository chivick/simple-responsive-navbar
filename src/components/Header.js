import { useState } from 'react'
import menuIcon from '../assets/images/menu-icon1.png'

const Header = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
        <header id='header'>
            <div id='logo'>Logo</div>
            <div id="menu">
                <img src={menuIcon} alt='' onClick={()=>setShowNav(prev=>!prev)} />
                <nav id='desktopNav'>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </nav>
            </div>
            
        </header>
        {showNav && <nav id='mobileNav'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </nav>}
        </>
    )
}

export default Header