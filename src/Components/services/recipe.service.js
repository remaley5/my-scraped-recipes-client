export async function fetchRecipe(recipe) {
    const id = sessionStorage.getItem('user');
    return await fetch(`http://localhost:9000/recipes/${id}`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        // HARDCODED 
        //----------------------
        body: JSON.stringify({ "recipe" : {"url": "https://test.com", "title": "test"}}),
        //-----------------------
    });
}