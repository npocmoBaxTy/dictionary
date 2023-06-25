import React from 'react'
import './header.css'
import Logo from "../../Components/Logo/Logo";
import {NavLink} from "react-router-dom";
import SearchInput from "../../Components/Search/Search";
import {AiOutlineHome, AiOutlineUnorderedList, AiOutlineInfoCircle} from "react-icons/ai";

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__bottom-nav">
                    <ul className="header__bottom-nav-list">
                        <li>
                            <NavLink to={'/'} exact="true" className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>
                                <AiOutlineHome/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/words'}>
                                <AiOutlineUnorderedList/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>
                                <AiOutlineInfoCircle/>
                            </NavLink>
                        </li>
                        <li>
                            <span onClick={props.langChangeHandler}>Qq</span>
                        </li>
                    </ul>
                </div>
                <div className="header__nav">
                    <div className="container">
                        <Logo/>
                        <ul className='header__nav-list'>
                            <li>
                                <NavLink className={({isActive, isPending}) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                } to={'/'}>{
                                    (props.latin) ? 'Sózler' : 'Сөзлер'
                                }</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/words'}>{
                                    (props.latin) ? 'Sózler dizimi' : 'Сөзлер дизими'
                                }</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>{
                                    (props.latin) ? 'Baǵdarlama haqqında' : ' Бағдарлама ҳаққында'
                                }</NavLink>
                            </li>
                            <li>
                                <span onClick={props.langChangeHandler} className={'language'}>{
                                    (props.latin) ? 'Qq' : 'Ққ'
                                }</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <SearchInput latin={props.latin} searchHandler={props.searchHandler} result={props.result}/>
        </header>
    )
}

export default Header