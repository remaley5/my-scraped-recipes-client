// make database call
export async function searchUrl(url) {
    fetch("http://localhost:9000/scrape/useurl", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: searchUrl }),
    });
}


// const scrapeRecipe = () => {
//     setLoading(true);
//     const searchUrl = url;
//     fetch("http://localhost:9000/scrape/useurl", {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url: searchUrl }),
//     })
//         .then((response) => {
//             if (response.status >= 400) {
//                 setLoading(false);
//                 setErrorMessage("Sorry, we couldn't find that URL!");
//                 throw new Error("Server responded with an error");
//             }
//             return response.json();
//         })
//         .then((responseData) => {
//             setLoading(false);
//             const stepsArr = [...responseData.data.steps];
//             const stepsObj = {};
//             stepsArr.forEach(function (step, idx) {
//                 stepsObj[idx + 1] = step;
//             });

//             const ingredientsArray = [...responseData.data.ingredients];
//             const ingredientsObj = {};
//             ingredientsArray.forEach(function (ingredient, idx) {
//                 ingredientsObj[idx + 1] = ingredient;
//             });
//             //updateRecipe(ingredientsObj, stepsObj);
//             updateSteps(stepsObj);
//             updateIngredients(ingredientsObj);
//         });
// };