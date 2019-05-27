import { combineReducers } from "redux";
import PersonReducer from "./people_reducer";
import SelectorReducer from "./selector_reducer";

const rootReducer = combineReducers({
    selected: SelectorReducer,
    people: PersonReducer
});

export default rootReducer;
