import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../services/usersApiService";
import { getUser, removeEmail, removeToken, setEmailInLocalStorage, setTokenInLocalStorage } from "../services/localStorageService";
import ROUTES from "../../routes/RoutesModel";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeUser from "../helpers/normalization/normalizeUser";
import useAxios from "../../hooks/useAxios.js"
export default function useUsers() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    useAxios();
    const handleLogin = useCallback(async (userLogin) => {
        setIsLoading(true);
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            setEmailInLocalStorage(userLogin.email);
            navigate(ROUTES.CARDS);
        } catch (error) {
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
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);

    const handleLogout = () => {
        removeEmail();
        removeToken();
        setUser(null);
    }

    const handleRegister = useCallback(async (userInfo) => {
        setIsLoading(true);
        try {
            const normalizeUserInfo = normalizeUser(userInfo);
            const signupData = signup(normalizeUserInfo);

            await handleLogin({ email: userInfo.email, password: userInfo.password });
        } catch (error) {

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
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);
    return ({ isLoading, error, handleLogin, handleLogout, handleRegister });
}