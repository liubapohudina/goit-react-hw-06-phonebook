import { createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

export const addContancts = createAction('add/contacts', data => {
    return {
        payload: {
            id: nanoid(),
            ...data,
        }
    }
})

export const deleteContacts = createAction('delete/contacts')

// export const addContancts = payload => {
//     return {
//         type: ADD_CONTACTS,
//         payload: {
//             id: nanoid(),
//             ...payload,
//         }
//    }
// }
// export const deleteContacts = payload => {
//     return {
//         type: DELETE_CONTACTS,
//         payload,
//     }
// }