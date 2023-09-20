import React, { useState } from "react";
import "../../Styles/Components/forms.css";
//import "../../Styles/Layout/main.css";
import { MagnifyingGlass } from "react-loader-spinner";

function SearchForm({ loading, error, handleSearchSubmit }) {
    const [url, setUrl] = useState("");

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('clicking "submit search" button', handleSearchSubmit);
        handleSearchSubmit(url);
    };

    return loading ? (
        <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
        />
    ) : (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <label for="url_input">Recipe Link</label>
                <div className="control-wrap">
                    <input
                        id="url_input"
                        name="url"
                        type="text"
                        autoComplete="true"
                        aria-describedby="error-message"
                        aria-labelledby="search-recipe-label"
                        value={url}
                        onChange={handleChange}
                    ></input>
                    <button>Submit Search</button>
                </div>
                <div className="error" id="error-message">
                    {error}
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
