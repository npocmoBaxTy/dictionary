
const Categories = props => {
    return (
        <div className={`select ${(props.customClass) ? props.customClass : ''}`}>
            <select onClick={props.categorySelectHandler}>
                {
                    props.categories.map((item,index) => {
                        return (
                            <option key={index} kiril={item.kiril}>
                                {
                                    (props.lat) ? item.latin : item.kiril
                                }
                            </option>
                        )
                    })
                }
            </select>
            <div className="select__arrow"></div>
        </div>
    )
}
export default Categories