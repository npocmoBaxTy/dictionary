import React, {useEffect, useState} from "react";
import "./Admin.css";
import {NavLink} from "react-router-dom";
import {
    BsSearch,
} from "react-icons/bs";
import Modal from "../../UI/Modal/Modal";
import ChangeModal from "../../UI/Modal/changeModal";
import axios from "axios";
import WList from "../../Components/Admin-component/Words-list/Words_list";
import Navbar from "../../Components/Admin-component/Navbar/Navbar";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
    useEffect(() => {
        axios
            .get(`https://sozlik.abbc.uz/api/words?limit=1000&page=1`)
            .then((res) => {
                setItems([...res.data.data])
            });
    }, [])
    useEffect(() => {
        axios
            .get(`https://sozlik.abbc.uz/api/categories`)
            .then((res) => {
                setCategories([...res.data.data])
            });
    }, [])
    // eslint-disable-next-line
    const [perPage, setPerPage] = useState(21);
    const [curPage, setCurPage] = useState(1);
    const [length, setLength] = useState(10);
    const [show, setShow] = useState(false);
    const [change, setChange] = useState(false);
    const [item, setItem] = useState(null);


    const [name, setName] = useState(item ? item.latin : '');
    const [category, setCategory] = useState(item ? item.categories[0].latin : '');
    const [desc, setDesc] = useState(item ? item.description_latin : '');
    const [name_kir, setNameKir] = useState(item ? item.kiril : '');
    const [category_kir, setCategoryKir] = useState(item ? item.categories[0].kiril : '');
    const [desc_kir, setDescKir] = useState(item ? item.description_kiril : '');


    const [items, setItems] = useState([...props.items]);
    const [categories, setCategories] = useState([])
    const [category_id, setCategoryId] = useState(0)


    const [latin, setLatin] = useState('')
    const [kiril, setKiril] = useState('')
    const [desc_lat, setDescLat] = useState('')
    const [desc_kiril, setDescKiril] = useState('')

    const DeleteHandler = (e) => {
        e.stopPropagation()
        const index = parseInt(e.target.getAttribute('index'))
        try {
            axios.delete(`http://sozlik.abbc.uz/api/words/${index}`,{
                headers: {
                    Authorization:`Bearer ${props.data.data.data.token}`
                }
            })
                .then(res => console.log(res))
            toast.success('Слово удалено!')
        } catch (e) {
            toast.error(e.message)
        }
    };

    const nextPageHandler = () => {
        if (curPage === Math.ceil(props.items.length / perPage)) {
            document.getElementById(`${curPage}`).classList.add("active");
            return false;
        } else {
            document
                .querySelectorAll(".pagination__nubmer")
                .forEach((item) => item.classList.remove("active"));
            document.getElementById(`${curPage}`).classList.add("active");
        }
        setCurPage(curPage + 1);
        if (curPage >= 7 && curPage <= 11) {
            setLength(14);
        }
        if (curPage >= 11) {
            setLength(Math.ceil(props.items.length / perPage));
        }
        if (curPage <= 7) {
            setLength(10);
        }
    };

    const prevPageHandler = () => {
        if (curPage === 1) {
            return false;
        } else {
            document
                .querySelectorAll(".pagination__nubmer")
                .forEach((item) => item.classList.remove("active"));
            document.getElementById(curPage).classList.add("active");
        }
        setCurPage(curPage - 1);
        if (curPage >= 7 && curPage <= 11) {
            setLength(14);
        }
        if (curPage >= 11) {
            setLength(Math.ceil(props.items.length / perPage));
        }
        if (curPage <= 7) {
            setLength(10);
        }
    };

    const handleClick = (e) => {
        document
            .querySelectorAll(".pagination__nubmer")
            .forEach((item) => item.classList.remove("active"));
        e.target.classList.add("active");
        if (curPage >= 7 && curPage <= 11) {
            setLength(14);
        }
        if (curPage >= 11) {
            setLength(Math.ceil(props.items.length / perPage));
        }
        if (curPage <= 7) {
            setLength(10);
        }
        setCurPage(Number(e.target.getAttribute("id")));
    };
    let last = curPage * perPage;
    let first = last - perPage;
    const addHandler = async () => {
        delete categories[category_id].words_total
        const word = {
            kiril: kiril,
            latin: latin,
            description_latin: desc_lat,
            description_kiril: desc_kiril,
            categories: [categories[category_id]],
            categories_id: category_id + 1
        }
        try {
            await axios.post('https://sozlik.abbc.uz/api/words', word, {
                headers: {
                    Authorization: `Bearer ${props.data.data.data.token}`
                },
            })
            setDescKiril('')
            setLatin('')
            setDescLat('')
            setKiril('')
            setCategoryId(0)
            setShow(!show)
            toast.success('Слово добавлено!')
        } catch (err) {
            console.log(err)
        }
    }
    const categorySelectHandler = e => {
        setCategoryId(e.target.selectedIndex)
    }
    const changeCategorySelect = e => {
        setCategoryId(e.target.selectedIndex)
        setCategory(categories[e.target.selectedIndex].latin)
    }
    const changeCategorySelectKir = e => {
        setCategoryId(e.target.selectedIndex)
        setCategoryKir(categories[e.target.selectedIndex].kiril)
    }
    const wordClickHandler = e => {
        setChange(!change)
        setItem(items[parseInt(e.target.getAttribute('index'))])
    }
    const saveChangesHandler = (id) => {
        const word = {
            kiril: name_kir,
            latin: name,
            description_latin: desc,
            description_kiril: desc_kir,
            categories: [
                {
                    latin: category,
                    kiril: category_kir,
                    id: category_id + 1
                }
            ],
            categories_id: category_id + 1
        }
        axios.post(`https://sozlik.abbc.uz/api/words/${item.id}`, word, {
            headers: {
                Authorization: `Bearer ${props.data.data.data.token}`
            }
        }).then(res => console.log(res))
    }
    return (
        <div className="admin__panel">
            <Modal
                categories={categories}
                categorySelectHandler={e => categorySelectHandler(e)}
                show={show} clickHandler={() => setShow(!show)}
                add={addHandler}
                latChange={e => setLatin(e.target.value)}
                descLatChange={e => setDescLat(e.target.value)}
                setKirChange={e => setKiril(e.target.value)}
                setKirDesc={e => setDescKiril(e.target.value)}
            />
            <ToastContainer draggable/>
            <ChangeModal
                show={change}
                categories={categories}
                changeCategorySelectKir={e => changeCategorySelectKir(e)}
                changeCategorySelect={e => changeCategorySelect(e)}
                clickHandler={() => {
                    setChange(!change);
                    setName("");
                    setCategory("");
                    setDesc("");
                    document
                        .querySelectorAll(".input")
                        .forEach((item) => item.classList.remove("visible"));
                }}
                item={item ? item : items[0]}
                name_lat={name}
                category_lat={category}
                desc_lat={desc}

                name_kir={name_kir}
                category_kir={category_kir}
                desc_kir={desc_kir}

                nameChangeHandler={(e) => setName(e.target.value)}
                categoryChangeHandler={(e) => setCategory(e.target.value)}
                descCHangeHandler={(e) => setDesc(e.target.value)}

                nameKirChangeHandler={(e) => setNameKir(e.target.value)}
                categoryKirChangeHandler={(e) => setCategoryKir(e.target.value)}
                descKirCHangeHandler={(e) => setDescKir(e.target.value)}

                saveChangesHanler={() => saveChangesHandler(item.id)}
            />
            <Navbar/>
            <div className="admin__panel-content">
                <div className="content__header">
                    <div className="content__search">
                        <input type="text" placeholder={"Search..."}/>
                        <button type={"button"}>
                            <BsSearch/>
                        </button>
                    </div>
                    <div className="content__header-nav">
                        <ul>
                            <li>
                                <NavLink to={"/"}>Admin</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content__main">
                    <div className="content__main-header">
                        <button
                            type={"button"}
                            onClick={(e) => {
                                e.preventDefault();
                                setShow(!show);
                            }}
                        >
                            Add Word
                        </button>
                    </div>
                    <WList
                        items={items}
                        deleteHandler={e => DeleteHandler(e)}
                        length={length}
                        wordClickHandler={e => wordClickHandler(e)}
                        first={first}
                        last={last}
                        handlePageClick={e => handleClick(e)}
                        nextPageHandler={nextPageHandler}
                        prevPageHandler={prevPageHandler}
                        search={props.search}
                    />
                </div>
            </div>
        </div>
    );
};

export default Admin;
