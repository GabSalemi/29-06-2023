import "./index.css";

const Navbar = () => {

    return (
        <div className="navbar__container">
            <div className="logo__div">
                <img src="https://img.logoipsum.com/291.svg" alt="" />
            </div>
            <div className="menu__div">
                <ul className="menu__list">
                   <li><a href="">Home</a></li>
                   <li><a href="">Products</a></li> 
                   <li><a href="">About</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;