import React from "react";
import './Search.css'
import {BsSearch} from "react-icons/bs";
import wave from "../../img/wave.7cc9c0c7f28d33223819.svg";
import Search from './../../img/flower.afc3d102f735659489ffe51b3e8fbe2e.svg'
import {NavLink} from "react-router-dom";

const SearchInput = props => {
    return (
        <div className="search">
            <div className="container">
                <div className="search__inner">
                    <div className="search__title">
                        {
                            (props.latin) ? "Bir sózdi izleń, onı úyreniń" : 'Бир сөзди излең, оны үйрениң'
                        }
                    </div>
                    <div className="search__input">
                        <div className="search__input-wrap">
                            <input onChange={props.searchHandler} type="text"
                                   placeholder={
                                       (props.latin) ? 'sózdi izlew ushın jazıń......' : 'сөзди излеў ушын жазың...'
                                   }/>
                            <button className={'search__input-btn'} type={'button'}>
                                <BsSearch/>
                            </button>
                        </div>
                        <img src={Search} className={'search__input-img'} alt=""/>
                    </div>
                    <div
                        className={props.result.length === 0 ? 'search__inner-result hidden' : 'search__inner-result active'}>
                        <ul className='search__result-list'>
                            {
                                props.result.map(item => {
                                    return (
                                        <li>
                                            <NavLink onClick={() => {
                                                document.querySelector('.main').scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start',
                                                    inline:'start'
                                                })
                                            }} to={'/words/' + item.id}>
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
                </div>
            </div>
            <div className="search__btm-img">
                <img src={wave} alt=""/>
            </div>

        </div>
    )
}
export default SearchInput