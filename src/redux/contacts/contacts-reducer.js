import { addContancts, deleteContacts } from "./contacts-actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = [];
const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContancts, (state, { payload }) => [...state, payload])
    .addCase(deleteContacts, (state, {payload}) => state.filter(item => item.id !== payload))
})
// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//       case addContancts.type:
//           return [...state, payload];
//         case deleteContacts.type: {
//           return  state.filter(item => item.id !== payload);
// }
//     default:
//       return state;
//   }
// }

export default contactsReducer;