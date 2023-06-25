import {BsFillFileEarmarkWordFill, BsFillTrash3Fill} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import Loader from "../../../UI/Loader/Loader";
import Pagination from "../../Pagination/Pagination";
import React from "react";

const WList = (props) => {
    return (
        <div className="content__words-list">
            <div className="title">Words list</div>
            <div className="list">
                <div className="list-tabs">
                    <span className={"tabs-name"}>Name</span>
                    <span className={"tabs-category"}>Category</span>
                    <span className={"tabs-date"}>Date</span>
                    <span className={"tabs-empty"}> </span>
                </div>
                <div className={"words"}>
                    {props.items.length ? (
                        props.items.slice(props.first, props.last).map((item, index) => {
                            return (
                                <div
                                    onClick={props.wordClickHandler}
                                    className="word"
                                    key={index}
                                    index={index}
                                >
                              <span className={"word-name"} index={index}>
                                <BsFillFileEarmarkWordFill/>
                                  {item.latin}
                              </span>
                                    <div className="word-category" index={index}>
                                        {
                                            (item.categories.length) ? item.categories[0].latin : 'No category'
                                        }
                                    </div>
                                    <div className="word-date" index={index}>
                                        {item.created_at.slice(0, 10)}
                                    </div>
                                    <div className="word-control" index={index}>
                                        <button type={"button"} className={"word-edit"}>
                                            <AiOutlineEdit/>
                                        </button>
                                        <button
                                            type={"button"}
                                            className={"word-delete"}
                                            onClick={props.deleteHandler}
                                            index={item.id}
                                        >
                                            <BsFillTrash3Fill/>
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <Loader/>
                    )}
                    <Pagination
                        items={
                            props.search.length > 0 ? props.search : props.items
                        }
                        length={props.length}
                        handlePageClick={props.handlePageClick}
                        nextPageHandler={props.nextPageHandler}
                        prevPageHandler={props.prevPageHandler}
                    />
                </div>
            </div>
        </div>
    )
}
export default WList
