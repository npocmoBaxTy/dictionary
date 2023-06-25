import "./Modal.css";
import {useState} from "react";
import Categories from "../../Components/Admin-component/Categories/Categories";

const Modal = (props) => {
    const [lat, setLat] = useState(true)
    return (
        <div
            onClick={props.clickHandler}
            className={props.show ? "modal show" : "modal hidden"}
        >
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {
                    (lat) ? <form className={'form__lat'}>
                            <div className="segment">
                                <h1>New Word (latin)</h1>
                            </div>
                            <label>
                                <input onChange={props.latChange} className={'word-lat'} type="text" placeholder="Type word..." required/>
                            </label>
                            <label>
                                <textarea onChange={props.descLatChange} className={'desc-lat'} placeholder="Word description" required/>
                            </label>
                            <Categories lat={lat} categories={props.categories} categorySelectHandler={props.categorySelectHandler}/>
                            <button className="red" type="button" onClick={props.add}>
                                <i className="icon ion-md-lock"></i> Add Word
                            </button>

                            <div className="segment">
                                <button onClick={props.clickHandler} className="unit" type="button">
                                    <i className="icon ion-md-arrow-back"></i>
                                </button>
                                <div className="segment__audio">
                                    <button className="unit audio__file" type="button" onClick={() => {
                                        setLat(!lat)
                                    }}>
                                        Ққ
                                    </button>
                                </div>
                            </div>
                        </form>
                          : <form className={'form__cyrillic'}>
                            <div className="segment">
                                <h1>Новое слово (Cyrillic)</h1>
                            </div>
                            <label>
                                <input onChange={props.setKirChange} type="text" placeholder="Напишите слово..." className={'word-cyr'} required/>
                            </label>
                            <label>
                                <textarea onChange={props.setKirDesc} placeholder="Описание слова..." className={'desc-cyr'} required/>
                            </label>
                            <Categories lat={lat} categories={props.categories} categorySelectHandler={props.categorySelectHandler}/>
                            <button className="red" type="button" onClick={props.add}>
                                <i className="icon ion-md-lock"></i> Добавить слово
                            </button>

                            <div className="segment">
                                <button onClick={props.clickHandler} className="unit" type="button">
                                    <i className="icon ion-md-arrow-back"></i>
                                </button>
                                <div className="segment__audio">
                                    <button className="unit audio__file" type="button" onClick={() => {
                                        setLat(!lat)
                                    }}>
                                        Qq
                                    </button>
                                </div>
                            </div>
                        </form>
                }
            </div>
        </div>
    );
};

export default Modal;
