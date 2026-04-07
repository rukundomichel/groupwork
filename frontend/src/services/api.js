const base_url = "http://localhost:5000/api";

export const CreateUser = async (username, password) => {
    try {
        const response = await fetch(`${base_url}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export const LoginUser = async (username, password) => {
    try {
        const response = await fetch(`${base_url}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
}

export const LogoutUser = async () => {
    try {
        const response = await fetch(`${base_url}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error logging out user:", error);
        throw error;
    }
}

export const CreateIntake = async (intake_name, start_date, end_date) => {
    try {
        const response = await fetch(`${base_url}/intake/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ intake_name, start_date, end_date})
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating intake:", error);
        throw error;
    }
}