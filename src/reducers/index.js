import {combineReducers} from "redux";
import PersonReducer from "./people_reducer";
import SelectorReducer from "./selector_reducer";
import CourtReducer from "./court_reducer";

const rootReducer = combineReducers({
    selected: SelectorReducer,
    people: PersonReducer,
    courts: CourtReducer,
    // passwords: PasswordReducer
});

export default rootReducer;
