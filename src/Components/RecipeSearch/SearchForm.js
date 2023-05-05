import React, { useState } from "react";
import "../../Styles/forms.css";
import { MagnifyingGlass } from "react-loader-spinner";

function SearchForm({ loading, error, handleSearchSubmit }) {
    const [url, setUrl] = useState("");

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
                <div className="control-wrap">
                    <input
                        id="url-input"
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
