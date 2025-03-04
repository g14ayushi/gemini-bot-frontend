import axios from "axios";

const API_URL = import.meta.env.VITE_APP_BACKEND_URL;;

export const fetchChatResponse = async (question) => {
    try{
        const response = await axios.post(API_URL, {question});
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
} 