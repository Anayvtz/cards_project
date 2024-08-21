import axios from "axios";


const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

export const createCard = async (card) => {

    try {
        const { data } = await axios.post(`${apiUrl}/cards`, card);
        return data;
    } catch (error) {
        console.log("in create card:" + error.message);
        console.error("Error making request:", error.message); // Log error message
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received for the request:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error setting up the request:", error.message);
        }
        /* return Promise.reject(error.message); */
        throw new Error(error.message);
    }
    return null;
};

export const getMyCards = async () => {
    console.log("get my cards");
    try {
        const response = await axios.get(`${apiUrl}/cards/my-cards`);
        console.log("after get my cards:" + response.data);

        const data = response.data;
        return data;
    } catch (error) {
        console.log("in getMyCard:" + error.message);
        console.error("Error making request:", error.message); // Log error message
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received for the request:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error setting up the request:", error.message);
        }
        /* return Promise.reject(error.message); */
        throw new Error(error.message);
    }
};