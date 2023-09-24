import { NavLink } from "react-router-dom";
import logo from "../../../images/Logo.png";

const Header = () => {
    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/donation">Donation</NavLink></li>
                                <li><NavLink to="/statistics">Statistics</NavLink></li>
                            </ul>
                        </div>
                        <img className="ml-36 md:ml-0 lg:ml-0" src={logo} alt="" />
                    </div>
                    <div className="navbar-end hidden md:flex lg:flex">
                        <ul className="flex gap-12">
                            <li className=""><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/donation">Donation</NavLink></li>
                            <li><NavLink to="/statistics">Statistics</NavLink></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;