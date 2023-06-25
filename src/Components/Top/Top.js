import React, {useState} from "react";
import './Top.css'
import {NavLink} from "react-router-dom";

const Top = props => {
    //eslint-disable-next-line
    const [lat, setLat] = useState([
        'Aa', 'Áá', 'Bb', 'Dd', 'Ee', 'Ff', 'Gg', 'Ǵǵ', 'Hh', 'Xx', 'Íí', 'Ii', 'Jj', 'Kk', 'Qq', 'Ll', 'Mm', 'Nn', 'Ńń', 'Oo', 'Óó', 'Pp', 'Rr', 'Ss', 'Tt', 'Uu','Úú','Vv','Ww','Yy','Zz','Shsh','Cc','Chch'
    ])
    //eslint-disable-next-line
    const [kir, setKir] = useState([
        "Аа","Әә","Бб","Вв","Гг","Ғғ","Дд","Ее","Ёё","Жж","Зз","Ии","Йй","Кк","Ққ","Лл","Мм","Нн","Ңң","Оо","Өө","Пп","Рр","Сс","Тт","Уу","Үү","Фф","Хх","Ҳҳ","Цц","Чч","Шш","Щщ","Ыы","Ээ","Юю","Яя"
    ])
    return (
        <div className="top__word-wrapper">
            <div className="container">
                <div className="top__words-title">
                    {
                        (props.latin) ? 'Kópshilikke arnalǵan izlewler' : 'Көпшиликке арналған излеўлер'
                    }
                    <span className={'top__words-sub-title'}>
                        {
                            (props.latin) ? 'Qaraqalpaq tiliniń túsindirme sózligi' : 'Қарақалпақ тилиниң түсиндирме сөзлиги'
                        }
                    </span>
                </div>
                <div className="top__words-list-wrapper">
                    <ul className="top__words-list">
                        {
                            props.items.slice(1, 18).map(item => {
                                return (
                                    <li className="top__words-list-item">
                                        <NavLink onClick={() => {
                                            document.querySelector('.main').scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                                inline: 'start'
                                            })
                                        }} to={'/words/' + item.id} className={'top__words-list-link'}>
                                            {
                                                (props.latin) ? item.latin : item.kiril
                                            }
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="top__words-letters">
                    <ul className="top__words-letters-list">
                        {
                            (props.latin) ? lat.map(item=> {
                                return (
                                    <li className="top__words-letters-item">
                                        <NavLink onClick={props.letterClickHandler} to={'/words'} className="top__words-letters-link">
                                            {
                                                item
                                            }
                                        </NavLink>
                                    </li>
                                )
                            }) : kir.map(item=> {
                                return (
                                    <li className="top__words-letters-item">
                                        <NavLink onClick={props.letterClickHandler} to={'/words'} className="top__words-letters-link">
                                            {
                                                item
                                            }
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Top