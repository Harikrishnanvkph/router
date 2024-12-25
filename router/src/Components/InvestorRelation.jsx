import {Outlet, useNavigate} from "react-router-dom";

function InvestorRelation() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`${e.target.innerHTML}`);
    }
    return <>
        <div className="investorrelation">
            <ul className="companies">
                <li onClick={handleClick}>Google</li>
                <li onClick={handleClick}>Microsoft</li>
                <li onClick={handleClick}>Facebook</li>
                <li onClick={handleClick}>Apple</li>
            </ul>
        </div>
    </>
}

export default InvestorRelation;