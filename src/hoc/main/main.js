import React from "react";
import './main.css'
import Most from "../../Components/MostView/Most";
import Advers from "../../Components/Advers/Advers";
import Top from "../../Components/Top/Top";
import {Routes, Route} from 'react-router-dom'
import Words from "../Words/Words";
import About from "../About/About";
import Word from "../../Components/Word/Word";

const Main = (props) => {
    return (
        <div className="main">
            <Routes>
                <Route path={'/'} exact element={
                    <React.Fragment>
                        <Most latin={props.latin} item={props.data}/>
                        <Advers latin={props.latin}/>
                    </React.Fragment>
                } />
                <Route path={'/words'} element={
                    <Words search={props.search} latin={props.latin} items={props.items} />
                }/>
                <Route path={'/about'} element={<About latin={props.latin} />} />
                {
                    props.items.map((item,index) => {
                        return (
                            <Route key={index*Math.random()} path={'/words/' + item.id} element={<Word latin={props.latin} item={item} items={props.items} />} />
                        )
                    })
                }
            </Routes>
            <Top letterClickHandler={props.letterClickHandler} items={props.items} latin={props.latin}/>
        </div>
    )
}

export default Main