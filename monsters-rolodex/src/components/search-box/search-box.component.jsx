import './search-box.styles.css';

const SearchBox = ({ placeholder, onChange, className }) => {
    return (
        <input 
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChange}>
        </input>
    );
}

export default SearchBox;