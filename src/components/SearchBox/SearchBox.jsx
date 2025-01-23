import s from './SearchBox.module.css'

const SearchBox = ({ onChange }) => {
    
    return (
        <div className={s.search_wrapper}>
            <p className={s.search_text}>Find contacts by name</p>
                <input onChange={onChange} className={s.search_input} type="text" name="search"/>
        </div>
    )
};

export default SearchBox;