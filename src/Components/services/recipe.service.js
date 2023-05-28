export async function fetchRecipe(recipe) {
    const id = sessionStorage.getItem('userId');
    return await fetch(`http://localhost:9000/recipes/${id}`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "recipe": recipe }),
    });
}