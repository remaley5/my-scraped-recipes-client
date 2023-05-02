import React, { useState } from "react";
import "../../Styles/forms.css";
import { MagnifyingGlass } from "react-loader-spinner";

function SearchForm({ updateSteps, updateIngredients }) {
    const [loading, setLoading] = useState(false);

    const [url, setUrl] = useState("");
    const [error, setErrorMessage] = useState("");

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const scrapeRecipe = () => {
        setLoading(true);
        const searchUrl = url;
        fetch("http://localhost:9000/scrape/useurl", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: searchUrl }),
        })
            .then((response) => {
                if (response.status >= 400) {
                    setLoading(false);
                    setErrorMessage("Sorry, we couldn't find that URL!");
                    throw new Error("Server responded with an error");
                }
                return response.json();
            })
            .then((responseData) => {
                setLoading(false);
                const stepsArr = [...responseData.data.steps];
                const stepsObj = {};
                stepsArr.forEach(function (step, idx) {
                    stepsObj[idx + 1] = step;
                });

                const ingredientsArray = [...responseData.data.ingredients];
                const ingredientsObj = {};
                ingredientsArray.forEach(function (ingredient, idx) {
                    ingredientsObj[idx + 1] = ingredient;
                });
                //updateRecipe(ingredientsObj, stepsObj);
                updateSteps(stepsObj);
                updateIngredients(ingredientsObj);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        scrapeRecipe();
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
