import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { placeholder, onChange } = this.props;

        return (
            <input className="search-box" type="search" placeholder={placeholder} onChange={onChange}></input>
        )
    }
}

export default SearchBox;