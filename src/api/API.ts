import axios from "axios"

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'accept': 'application/ld+json',
    },
    // withCredentials: true
});

export const instanceDoc = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    // withCredentials: true
});

export const patchInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/merge-patch+json'
    }
});
export const jwtConfig = () => {
    const jwt = JSON.parse(localStorage.getItem("jwt"))
    return {
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    }
}
