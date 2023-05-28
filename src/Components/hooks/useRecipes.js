//import { useState } from "react";
//import { fetchSignup, fetchLogin } from "../services/auth.service";
import { fetchRecipe } from "../services/recipe.service";

export const useAuth = () => {
    const saveRecipe = async(recipe) => {
        // post to db
        const response = await fetchRecipe(recipe);
        const responseData = await(response.json());
        return responseData;
    }

    return {saveRecipe};
}