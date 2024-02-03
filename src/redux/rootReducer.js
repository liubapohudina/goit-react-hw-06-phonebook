import { combineReducers } from "redux";
import contactsSlice from "./contacts/contacts-slice";
import filterSlice from './filter/filter-slice';

// import contactsReducer from "./contacts/contacts-reducer";
 //import filterReducer from "./filter/filter-reducer";


const rootReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice,
})

export default rootReducer;
