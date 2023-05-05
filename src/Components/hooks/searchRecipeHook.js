import { useState } from "react";
import { searchUrl } from "../services/scrape.service";


export function useSearchRecipe(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [steps, setSteps] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    setLoading(true);

    const updateSteps = (updatedSteps) => {
        setSteps({ ...updatedSteps });
        window.sessionStorage.setItem('steps', JSON.stringify(updatedSteps));
    }

    const updateIngredients = (updatedIngredients) => {
        setIngredients({ ...updatedIngredients });
        window.sessionStorage.setItem('ingredients', JSON.stringify(updatedIngredients));
    }

    const handleSearchSubmit = async (url) => {
        const { response } = await searchUrl(url)
        if (response.status >= 400) {
            setLoading(false);
            setError("Sorry, we couldn't find that URL!");
            throw new Error("Server responded with an error");
        }
        else {
            const responseData = response.json();
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
            updateSteps(stepsObj);
            updateIngredients(ingredientsObj);
            setLoading(false);
        }
    }

    return { loading, error, steps, ingredients, handleSearchSubmit };
};