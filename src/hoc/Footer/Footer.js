import React from "react";
import './Footer.css'
import Logo from "../../Components/Logo/Logo";
import {NavLink} from "react-router-dom";
import {BsTelegram,BsInstagram,BsYoutube} from "react-icons/bs";
import play from './../../img/play.png'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__left">
                        <Logo/>
                        <div className="footer__left-social">
                            <div className="footer__social-title">
                                {
                                    (props.latin) ? 'Sociallıq tarmaqlar :' : 'Социаллық тармақлар :'
                                }
                            </div>
                            <div className="footer__social-list">
                                <ul>
                                    <li>
                                        <NavLink to={'/'}>
                                            <BsTelegram />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/'}>
                                            <BsInstagram />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/'}>
                                            <BsYoutube />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__right-list">
                            <div className="footer__right-title">
                                {
                                    (props.latin) ? 'Baǵdarlama haqqında' :'Бағдарлама ҳаққында'
                                }
                            </div>
                            <ul>
                                <li>
                                    <NavLink to={'/'}>
                                        {
                                            (props.latin) ? 'Kún sózi' : 'Күн сөзи'
                                        }
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'}>
                                        {
                                            (props.latin) ? 'Jańa sózler' : 'Жаңа сөзлер'
                                        }
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'}>
                                        {
                                            (props.latin) ? 'Sózler dizimi' : 'Сөзлер дизими'
                                        }
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-android">
                            <div className="footer__android-title">
                                {
                                    (props.latin) ? 'Android' : 'Андроид'
                                }
                            </div>
                            <div className="footer__android-text">
                                {
                                    (props.latin) ? 'Android baǵdarlamasın júklep alıń hám offlayn tárizde paydalanıń.' : 'Андроид бағдарламасын жүклеп алың ҳәм оффлайн тәризде пайдаланың.'
                                }
                            </div>
                            <div className="footer__android-link">
                                <NavLink to={'https://play.google.com/store/apps/details?id=com.karsoft.tusindirmesozlik&pli=1'}>
                                    <img src={play} alt=""/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    Avtorlıq huqıqı © 2022 Bookie audiokitaplar, "KARSOFT-IT-SOLUTIONS" JSHJ • Barlıq huqıqlar qorǵalǵan.
                </div>
            </div>
        </footer>
    )
}

export default Footer