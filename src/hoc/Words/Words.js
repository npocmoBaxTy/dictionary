import React from 'react'
import './Words.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import Pagination from "../../Components/Pagination/Pagination";

const Words = props => {
    //eslint-disable-next-line
    const [perPage, setPerPage] = useState(21)
    const [curPage, setCurPage] = useState(1)
    const [length, setLength] = useState(10)

    const nextPageHandler = () => {

        if (curPage === Math.ceil(props.items.length / perPage)) {
            document.getElementById(curPage).classList.add('active')
            return false
        } else {
            document.querySelectorAll('.pagination__nubmer').forEach(item => item.classList.remove('active'))
            document.getElementById(curPage).classList.add('active')
        }
        setCurPage(curPage + 1)
        if (curPage >= 7 && curPage <= 11) {
            setLength(14)
        }
        if (curPage >= 11) {
            setLength(Math.ceil(props.items.length / perPage))
        }
        if (curPage <= 7) {
            setLength(10)
        }


    }

    const prevPageHandler = () => {
        if (curPage === 1) {
            return false
        } else {
            document.querySelectorAll('.pagination__nubmer').forEach(item => item.classList.remove('active'))
            document.getElementById(curPage).classList.add('active')
        }
        setCurPage(curPage - 1)
        if (curPage >= 7 && curPage <= 11) {
            setLength(14)
        }
        if (curPage >= 11) {
            setLength(Math.ceil(props.items.length / perPage))
        }
        if (curPage <= 7) {
            setLength(10)
        }

    }

    const handleClick = (e) => {
        document.querySelectorAll('.pagination__nubmer').forEach(item => item.classList.remove('active'))
        e.target.classList.add('active')
        if (curPage >= 7 && curPage <= 11) {
            setLength(14)
        }
        if (curPage >= 11) {
            setLength(Math.ceil(props.items.length / perPage))
        }
        if (curPage <= 7) {
            setLength(10)
        }
        setCurPage(Number(e.target.getAttribute('id')))

    }
    let last = curPage * perPage
    let first = last - perPage
    return (
        <>
            <div className="words">
                <div className="container">
                    <div className="words__title">
                        {
                            (props.latin) ? 'Sózler dizimi' : 'Сөзлер дизими'
                        }
                    </div>
                    <div className="words__list-wrapper">
                        <ul className="words__list">
                            {
                                (props.search.length < 1) ?
                                    props.items.slice(first, last).map((item, index) => {
                                        return (
                                            <li key={index} className="words__list-item">
                                                <NavLink key={index * 2} to={'/words/' + item.id}
                                                         className='words__list-link'>
                                                    {
                                                        (props.latin) ? item.latin : item.kiril
                                                    }
                                                </NavLink>
                                            </li>
                                        )
                                    }) : props.search.slice(first, last).map((item, index) => {
                                        return (
                                            <li key={index} className="words__list-item">
                                                <NavLink key={index * 2} to={'/words/' + item.id}
                                                         className='words__list-link'>
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
                    <Pagination items={(props.search.length > 0) ? props.search : props.items}
                                length={length}
                                handlePageClick={e => handleClick(e)}
                                nextPageHandler={nextPageHandler}
                                prevPageHandler={prevPageHandler}
                    />
                </div>
            </div>
        </>
    )
}
export default Words