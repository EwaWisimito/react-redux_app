import { LOGIN, REGISTER_SUCCESS } from "./constants";



export const register = (apiResponse) =>({
    type: REGISTER_SUCCESS,
    data: apiResponse
});


export const login = () =>({
    type: LOGIN,
    
});