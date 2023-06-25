import "./Modal.css";
import {BiEditAlt} from "react-icons/bi";
import Categories from "../../Components/Admin-component/Categories/Categories";

const changeModal = (props) => {
    // eslint-disable-next-line no-extend-native
    String.prototype.translit = String.prototype.translit || function () {
        var Chars = {
                'а': 'a',
                'б': 'b',
                'в': 'v',
                'г': 'g',
                'д': 'd',
                'е': 'e',
                'ё': 'yo',
                'ж': 'zh',
                'з': 'z',
                'и': 'i',
                'й': 'y',
                'к': 'k',
                'л': 'l',
                'м': 'm',
                'н': 'n',
                'о': 'o',
                'п': 'p',
                'р': 'r',
                'с': 's',
                'т': 't',
                'у': 'u',
                'ф': 'f',
                'х': 'h',
                'ц': 'c',
                'ч': 'ch',
                'ш': 'sh',
                'щ': 'shch',
                'ъ': '',
                'ы': 'y',
                'ь': '',
                'э': 'e',
                'ю': 'yu',
                'я': 'ya',
                'А': 'A',
                'Б': 'B',
                'В': 'V',
                'Г': 'G',
                'Д': 'D',
                'Е': 'E',
                'Ё': 'YO',
                'Ж': 'ZH',
                'З': 'Z',
                'И': 'I',
                'Й': 'Y',
                'К': 'K',
                'Л': 'L',
                'М': 'M',
                'Н': 'N',
                'О': 'O',
                'П': 'P',
                'Р': 'R',
                'С': 'S',
                'Т': 'T',
                'У': 'U',
                'Ф': 'F',
                'Х': 'H',
                'Ц': 'C',
                'Ч': 'CH',
                'Ш': 'SH',
                'Щ': 'SHCH',
                'Ъ': '',
                'Ы': 'Y',
                'Ь': '',
                'Э': 'E',
                'Ю': 'YU',
                'Я': 'YA'
            },
            t = this;
        for (var i in Chars) {
            t = t.replace(new RegExp(i, 'g'), Chars[i]);
        }
        return t;
    };
    return (
        <div
            onClick={props.clickHandler}
            className={props.show ? "modal show" : "modal hidden"}
        >
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="words__info-box">
                    <div className="word__lat-box">
                        <div className="word__title lat__title">
                            {props.name_lat ? props.name_lat : props.item?.latin}
                            <span
                                className={"word__edit span"}
                                onClick={(e) => {
                                    document.querySelector(".input").classList.toggle("visible");
                                }}
                            >
            <BiEditAlt/>
          </span>
                            <input
                                type="text"
                                onChange={props.nameChangeHandler}
                                className={"input"}
                                value={props.name}
                                placeholder={"Change word..."}
                            />
                        </div>
                        <div className="word__category lat__category">
                            {props.category_lat ? props.category_lat : props.item.categories[0].latin}
                            <span
                                    className={"word__edit span"}
                                    onClick={(e) => {
                                        document
                                            .querySelector(".input.category")
                                            .classList.toggle("visible");
                                    }}
                                >
                                <BiEditAlt/>
                            </span>
                            <Categories categorySelectHandler={props.changeCategorySelect} lat={true} categories={props.categories} customClass={'input category'}/>
                        </div>
                        <div className="word__desc lat__desc">
                            {props.desc_lat ? props.desc_lat : props.item.description_latin}
                            <span
                                className={"word__edit span"}
                                onClick={(e) => {
                                    document.querySelector(".input.desc").classList.toggle("visible");
                                }}
                            >
            <BiEditAlt/>
          </span>
                            <textarea
                                onChange={props.descCHangeHandler}
                                className={"input desc"}
                                value={props.desc}
                                placeholder={"Change description..."}
                            />
                        </div>
                    </div>
                    <div className="word__kir-box">
                        <div className="word__title kir__title">
                            {props.name_kir ? props.name_kir : props.item?.kiril}
                            <span
                                className={"word__edit span"}
                                onClick={(e) => {
                                    document.querySelector(".input.name-kir").classList.toggle("visible");
                                }}
                            >
            <BiEditAlt/>
          </span>
                            <input
                                type="text"
                                onChange={props.nameKirChangeHandler}
                                className={"input name-kir"}
                                value={props.name}
                                placeholder={"Change word..."}
                            />
                        </div>
                        <div className="word__category kir__category">
                            {props.category_kir}
                            <span
                                className={"word__edit span"}
                                onClick={(e) => {
                                    document
                                        .querySelector(".input.category-kir")
                                        .classList.toggle("visible");
                                }}
                            >
            <BiEditAlt/>
          </span>
                            <Categories categorySelectHandler={props.changeCategorySelectKir} lat={false} categories={props.categories} customClass={'input category-kir'}/>
                        </div>
                        <div className="word__desc kir__desc">
                            {props.desc_kir ? props.desc_kir : props.item.description_kiril}
                            <span
                                className={"word__edit span"}
                                onClick={(e) => {
                                    document.querySelector(".input.desc-kir").classList.toggle("visible");
                                }}
                            >
            <BiEditAlt/>
          </span>
                            <textarea
                                onChange={props.descKirCHangeHandler}
                                className={"input desc-kir"}
                                value={props.desc_kir}
                                placeholder={"Change description..."}
                            />
                        </div>
                    </div>
                </div>
                <button onClick={props.saveChangesHanler} className={"word__save"}>Save Changes</button>
            </div>
        </div>
    );
};

export default changeModal;
