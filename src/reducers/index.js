import { combineReducers } from "redux";
import PersonReducer from "./people_reducer";

const rootReducer = combineReducers({
    people: PersonReducer,
});

export default rootReducer;
