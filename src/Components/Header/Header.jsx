import { NavLink } from "react-router-dom";
import logo from "../../../images/Logo.png";
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    return (
        <div className="container mx-auto sticky mt-5">
            <div className="navbar bg-transparent z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                            <AiOutlineMenu className="text-2xl font-extrabold"></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-lg font-normal text-[#0B0B0B] text-center"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                            } to="/">Home</NavLink></li>
                            <li className="text-lg font-normal text-[#0B0B0B] text-center"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                            } to="/donation">Donation</NavLink></li>
                            <li className="text-lg font-normal text-[#0B0B0B] text-center"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                            } to="/statistics">Statistics</NavLink></li>
                        </ul>
                    </div>
                    <img className="ml-36 md:ml-0 lg:ml-0" src={logo} alt="" />
                </div>
                <div className="navbar-end hidden md:flex lg:flex">
                    <ul className="flex gap-12">
                        <li className="text-lg font-normal text-[#0B0B0B] text-center"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                        } to="/">Home</NavLink></li>
                        <li className="text-lg font-normal text-[#0B0B0B] text-center"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                        } to="/donation">Donation</NavLink></li>
                        <li className="text-lg font-normal text-[#0B0B0B] text-center"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                        } to="/statistics">Statistics</NavLink></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;