import React from "react";
import {NavLink} from "react-router-dom";
import {BsFillShareFill} from "react-icons/bs";
import './Word.css'


const Word = props => {
    function randomizeArr(arr) {
        let c = props.items.map(item => item);
        for (let i = 0; i < 18; i++) {
            let ind = Math.floor(Math.random() * c.length);
            c.splice(ind, 1);
        }
        return c
    }

    return (
        <div className={'main__most-view'}>
            <div className="container">
                <div className="most__view-card">
                    <div className="most__card-top">
                        <span>
                            {
                                (props.latin) ? 'SÓZ MÁNISI' : 'СӨЗ МӘНИСИ'
                            }
                        </span>
                        <NavLink to={'/'}>
                            <BsFillShareFill/>
                            Share
                        </NavLink>
                    </div>
                    <div className="most__card-title">
                        {
                            (props.latin) ? props.item.latin : props.item.kiril
                        }
                    </div>
                    <div className="most__card-text">
                        <p className="most__card-category">
                            {
                                (props.latin) ? props.item.categories[0].latin : props.item.categories[0].kiril
                            }
                        </p>
                        {
                            (props.latin) ? props.item.description_latin : props.item.description_kiril
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="same__words">
                    <div className="same__words-title">
                        {
                            (props.latin) ? 'Uqsas sózler' : 'Уқсас сөзлер'
                        }
                    </div>
                    <div className="same__words-box">
                        <ul className="same__words-list">
                            {
                                //eslint-disable-next-line
                                (props.latin) ? randomizeArr(props.items.slice(10)).map(item => {
                                    if (props.item.latin.split('')[1] === item.latin.split('')[1] && props.item.latin.split('')[0] === item.latin.split('')[0]) {
                                        return (
                                            <li className={'same__words-item words__list-item'}>
                                                <NavLink onClick={() => {
                                                    document.querySelector('.main').scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start',
                                                        inline: 'start'
                                                    })
                                                }} to={'/words/' + item.id} className={'same__words-link words__list-link'}>
                                                    {item.latin}
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                    //eslint-disable-next-line
                                }) : randomizeArr(props.items).map(item => {
                                    //eslint-disable-next-line
                                    if (props.item.kiril.split('')[1] === item.kiril.split('')[1] && props.item.kiril.split('')[0] === item.kiril.split('')[0]) {
                                        //eslint-disable-next-line
                                        return (
                                            <li className={'same__words-item words__list-item'}>
                                                <NavLink onClick={() => {
                                                    document.querySelector('.main').scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start',
                                                        inline: 'start'
                                                    })
                                                }} to={'/words/' + item.id}
                                                         className={'same__words-link words__list-link'}>{item.kiril}</NavLink>
                                            </li>
                                        )

                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Word