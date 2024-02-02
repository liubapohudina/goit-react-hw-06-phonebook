import { addFilter } from "./filter-actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}

const filterReducer = createReducer(initialState, builder => {
    builder
        .addCase(addFilter, (state, { payload }) => {
        let filter = payload.filter
        return filter})
})

// const filterReducer = (state = initialState, { type, payload }) => {
//     let filter;
//     switch (type) {
//         case addFilter.type:
//             filter = payload.filter;
//             return filter;
//         default:
//             return state;
//     }
// };



export default filterReducer;