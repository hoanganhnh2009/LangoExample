export const isAddingReducer = (state = false, action) => {
    if (action.type === 'TOOGLE_ISADDING') return !state;
    return state;
}
