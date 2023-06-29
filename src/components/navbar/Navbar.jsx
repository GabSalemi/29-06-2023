import "./index.css";
import { useState } from "react";
import ProductSection from "../productsection";
import ContactSection from "../contactsection";

const Navbar = () => {

    const [renderValue, setRenderValue] = useState("")

    const changeRender = () => {
        switch (renderValue) {
            case "": 
                return <div>Load Page</div>
            case "Home":
                return <ProductSection />;
            case "About":
                return <div>In manutenzione</div>
            case "Contact": 
                return <ContactSection />
        }
    }

    return (
    <>
        <div className="navbar__container">
            <div className="logo__div">
                <img src="https://img.logoipsum.com/291.svg" alt="" />
            </div>
            <div className="menu__div">
                <ul className="menu__list">
                   <li onClick={() => setRenderValue("Home")}>Home</li>
                   <li onClick={() => setRenderValue("About")}>About</li> 
                   <li onClick={() => setRenderValue("Contact")}>Contact Us</li>
                </ul>
            </div>
        </div>
        {changeRender()}
    </>
    )
}

export default Navbar;