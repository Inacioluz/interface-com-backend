import { useMutation } from "@tanstack/react-query"; 
import { PersonData } from "../Components/Interfaces/person-data";
import axios from "axios";


const postDate = (data: PersonData) => {
    return axios.post("https://localhost:8080/send-data", data)
}

export function useIdentityMutation(){
    const {mutate, isLoading, isSuccess, isError} = useMutation( {
        mutationFn: (data: PersonData) => postDate(data)
    })
    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}