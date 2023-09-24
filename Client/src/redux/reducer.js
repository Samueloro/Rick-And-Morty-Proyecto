import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
            };
        case FILTER:
            if (payload === 'ALL') return {
                ...state,
                myFavorites: state.allCharacters,
            }
            const filterGender = state.allCharacters.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: filterGender
            };
        case ORDER:
            let orderCopy = [...state.allCharacters];
            if (payload === "A") {
                orderCopy.sort(
                    (a, b) => {
                        if (a.id > b.id) return 1;
                        else return -1;
                    }
                )
            } else if (payload === "D") {
                orderCopy.sort(
                    (a, b) => {
                        if (a.id < b.id) return 1;
                        else return -1;
                    }
                )
            };
            return {
                ...state,
                myFavorites: orderCopy
            };
        default:
            return { ...state }
    };

};

export default reducer;