import { useState } from "react";
import { searchUrl } from "../services/scrape.service";


export function useSearchRecipe(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [steps, setSteps] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [progress, setProgress] = useState("SEARCH");

    const updateSteps = (updatedSteps) => {
        setSteps({ ...updatedSteps });
        window.sessionStorage.setItem('steps', JSON.stringify(updatedSteps));
    }

    const updateIngredients = (updatedIngredients) => {
        setIngredients({ ...updatedIngredients });
        window.sessionStorage.setItem('ingredients', JSON.stringify(updatedIngredients));
    }

    const handleSearchSubmit = async (url) => {
        setLoading(true);
        const response = await searchUrl(url);
        // console.log('response: ', response);
        if (response.status >= 400) {
            setLoading(false);
            setError("Sorry, we couldn't find that URL!");
            throw new Error("Server responded with an error");
        }
        else {
            const responseData = await response.json();
            // console.log('response data: ', responseData);
            // console.log('responseData.data: ', responseData.data);
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

    const checkLocalStorage = () => {
        var storedSteps = JSON.parse(window.sessionStorage.getItem('steps'));
        var storedIngredients = JSON.parse(window.sessionStorage.getItem('ingredients'));
        var storedProgress = window.sessionStorage.getItem('progress');
        if(storedSteps !== null) {
            setSteps(storedSteps);
        } 
        if(storedIngredients !== null) {
            setIngredients(storedIngredients);
        }
        if(storedProgress !== null) {
            setProgress(storedProgress);
        }
    }

        // Track Form Progress
    const handleFormProgress = (event, progressState) => {
        event.preventDefault();
        //// console.log('setting progress state');
        setProgress(progressState);
        window.sessionStorage.setItem('progress', progressState);
    }

    return { loading, error, steps, ingredients, progress, handleSearchSubmit, updateIngredients, updateSteps, checkLocalStorage, handleFormProgress};
};