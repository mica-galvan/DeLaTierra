import img from '../components/imagenes/logoMain.svg'
import './NavBar.css'


function NavBar() {
    return (

        <nav>
            <div className='logo'>
                <a href="/">
                <img src={img} className='main-logo' alt='logo'/>
                </a>
            <ul className="ul-container">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default NavBar;