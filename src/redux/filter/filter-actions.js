import { createAction } from "@reduxjs/toolkit"


export const addFilter = createAction('add/filter')

// export const addFilter = payload => {
//     return {
//         type: ADD_FILTER,
//         payload: {...payload},
//     }
// }