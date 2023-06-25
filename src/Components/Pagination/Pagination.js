import React from "react";
import './Pagination.css'
import {GrFormPreviousLink, GrFormNextLink} from 'react-icons/gr'

const Pagination = props => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.items.length / 21); i++) {
        pageNumbers.push(i);
    }
    pageNumbers.length = props.length
    return (
        <div className="pagination">
            <div className="paginattion__wrapper">
                <button className="prev__page-btn" onClick={props.prevPageHandler}>
                    <GrFormPreviousLink/>
                </button>
                <div className="listOfPages">
                    {
                        pageNumbers.map(index => {
                            return (
                                <button key={'pagination' + index} onClick={props.handlePageClick}
                                        className={'pagination__nubmer'} id={index}>
                                    {index}
                                </button>
                            )
                        })
                    }
                </div>
                <button className="next__page-btn" onClick={props.nextPageHandler}>
                    <GrFormNextLink/>
                </button>
            </div>
        </div>
    )
}

export default Pagination