import Logo from "../../Logo/Logo";
import {NavLink} from "react-router-dom";
import {TbLanguage} from "react-icons/tb";
import React from "react";

const Navbar = props => {
    return (
        <div className="admin__panel-sidebar sidebar">
            <div className="sidebar__top">
                <Logo/>
            </div>
            <div className="sidebar__nav">
                <ul className="sidebar__nav-list">
                    <li className="sidebar__nav-list-item">
                        <NavLink to={"/"} className={"sidebar__nav-list-link"}>
                            <TbLanguage/>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="sidebar__nav-list-item">
                        <NavLink
                            to={"/admin/category"}
                            className={"sidebar__nav-list-link"}
                        >
                            <TbLanguage/>
                            Category
                        </NavLink>
                    </li>
                    <li className="sidebar__nav-list-item">
                        <NavLink to={"/"} className={"sidebar__nav-list-link"}>
                            <TbLanguage/>
                            Other
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar