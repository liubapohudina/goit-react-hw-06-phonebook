import { ADD_CONTACTS, DELETE_CONTACTS, ADD_FILTER } from "./constans";


const initialState = {
    contacts: [],
  filter: "",
}

const reducer = (state = initialState, { type, payload }) => {
  let contacts;
  let filter;
  switch (type) {
    case ADD_CONTACTS:
      contacts = state.contacts;
      return {
        contacts: [...contacts, payload],
        filter: state.filter,
      }
    case ADD_FILTER:
      filter = payload.filter;
      return {
        contacts: state.contacts,
        filter: filter,
      }
   case DELETE_CONTACTS: {
    return {
      contacts: state.contacts.filter(item => item.id !== payload),
      filter: state.filter,
  };
}
    default:
      return state;
  }
}

export default reducer;