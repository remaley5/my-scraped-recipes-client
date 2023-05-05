// Sign up user
export async function fetchSignup(user) {
    return await fetch("http://localhost:9000/users/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": user }),
    });
}