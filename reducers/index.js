import { combineReducers } from "redux";

import {
	DATA
} from "../actions/";

const data = {
	data: []
};

const dataReducer = (state = data, action) => {
	switch (action.type) {
		case DATA:
			//Logic to update fullTagList with data - ACTION
			state = Object.assign({}, state, {
				data: action.data
			});
            return state;
        default:
            return state;
	}
};

const rootReducer = combineReducers({
	dataReducer
});

export default rootReducer;
