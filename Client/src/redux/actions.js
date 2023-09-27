import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)
            dispatch({
                type: ADD_FAV,
                payload: data,
            });
            return data;
        } catch (error) { throw error }
    };
};
// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
            dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error){throw error}
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}

