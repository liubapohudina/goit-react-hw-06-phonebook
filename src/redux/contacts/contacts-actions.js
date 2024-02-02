import { ADD_CONTACTS, DELETE_CONTACTS } from "./contacts-constants";
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
export const deleteContacts = payload => {
    return {
        type: DELETE_CONTACTS,
        payload,
    }
}