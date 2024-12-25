import {NavLink, Outlet, useNavigate} from "react-router-dom";


function Navigation() {

    const navigate = useNavigate()

    return <>
        <div className="navBar">
            <div className="logo-section">Logo</div>
            <ul className="navigation">
                <NavLink to="priceandplan"><li className="tabs">Price And Plan</li></NavLink>
                <NavLink to="aboutus"><li className="tabs">About Us</li></NavLink>
                <NavLink to="investorrelation"><li className="tabs">Investors Relations</li></NavLink>
                <NavLink to="multer"><li className="multer">Multer</li></NavLink>
            </ul>
            <div className="dropdown-section">Other</div>
        </div>
        <div className="outlet">
            <Outlet />
        </div>
    </>
}

export default Navigation;