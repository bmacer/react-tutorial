import { Component } from "react";

import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { placeholder, onChange } = this.props;

        return (
            <input 
                className={`search-box ${this.props.className}`}
                type="search"
                placeholder={placeholder}
                onChange={onChange}>
            </input>
        )
    }
}

export default SearchBox;