import { ADD_FILTER } from "./filter-constans";

const initialState = {
    filter: '',
}

const filterReducer = (state = initialState, { type, payload }) => {
    let filter;
    switch (type) {
        case ADD_FILTER:
            filter = payload.filter;
            return filter;
        default:
            return state;
    }
};

// const filterReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ADD_FILTER:
//             return payload;
//         default:
//             return state;
//     }
// };


export default filterReducer;