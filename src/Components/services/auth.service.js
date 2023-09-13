// Sign up user
export async function fetchSignup(user) {
    return await fetch("http://localhost:9000/users/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": user }),
    });
}

export async function fetchLogin(user) {
    return await fetch("http://localhost:9000/users/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": user }),
    });
}