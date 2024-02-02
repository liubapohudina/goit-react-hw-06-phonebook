import { ADD_FILTER } from "./filter-constans";


export const addFilter = payload => {
    return {
        type: ADD_FILTER,
        payload: {...payload},
    }
}