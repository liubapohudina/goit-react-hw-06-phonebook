import { ADD_CONTACTS, DELETE_CONTACTS, ADD_FILTER } from "./constans";
import { nanoid } from "nanoid";

export const addContancts = payload => {
    return {
        type: ADD_CONTACTS,
        payload: {
            id: nanoid(),
            ...payload,
        }
   }
}

export const addFilter = payload => {
    return {
        type: ADD_FILTER,
        payload: {
            ...payload,
        }
    }
}

export const deleteContacts = payload => {
    return {
        type: DELETE_CONTACTS,
        payload,
    }
}