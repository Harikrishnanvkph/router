import {NavLink, Outlet} from "react-router-dom";


function Navigation() {

    return <>
        <div className="navBar">
            <div className="logo-section">Logo</div>
            <ul className="navigation">
                <NavLink to="priceandplan"><li className="tabs">Price And Plan</li></NavLink>
                <NavLink to="aboutus"><li className="tabs">About Us</li></NavLink>
                <NavLink to="redux"><li className="tabs">Redux</li></NavLink>
                <NavLink to="multer"><li className="multer">Multer</li></NavLink>
                <NavLink to="long_polling">
                    <li className="long_polling">Long Polling</li>
                </NavLink>
            </ul>
            <div className="dropdown-section">Other</div>
        </div>
        <div className="outlet">
            <Outlet />
        </div>
    </>
}

export default Navigation;