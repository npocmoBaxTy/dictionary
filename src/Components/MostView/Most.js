import React from "react";
import './Most.css'
import {NavLink} from "react-router-dom";
import {BsFillShareFill} from "react-icons/bs";

const Most = props => {
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
                                // (props.latin && props.item) ? props.item.categories[0].latin : props.item.categories[0].kiril
                            }
                        </p>
                        {
                            (props.latin) ? props.item.description_latin : props.item.description_kiril
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Most