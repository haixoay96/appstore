const initialState = {
    developers: [],
    applications: []
};
function todoApp(state = initialState, action) {
    if(typeof state === undefined){
        return initialState;
    }
    switch(action.type){
        case 'ADD_DEVELOPER':
            state.push(action.name);
            return state;
            break;
        default:
            return state;
    }
}