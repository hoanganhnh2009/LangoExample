import { combineReducers } from 'redux';

import { isAddingReducer as isAdding } from './isAddingReducer';

const reducer = combineReducers({
    isAdding
})

export default reducer