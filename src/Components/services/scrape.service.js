// make database call
export async function searchUrl(url) {
    console.log('searchURL function running');
    // console.log('url: ', url);
    return await fetch("http://localhost:9000/scrape/useurl", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url }),
    });
}