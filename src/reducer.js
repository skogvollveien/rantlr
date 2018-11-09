
export const ACTION_NEW_RANT = "new_rant";

export const newAction = (type, payload) => {
    return {
        type,
        payload
    };
}

export default(state={rants: []}, action) => {
    console.log(action)
    switch (action.type) {
        case ACTION_NEW_RANT:
            return {...state, rants: [...state.rants, ...action.payload]};
        default:
            return state;
    }
}

//
// state{
//  rants: [
//      r1,
//      r2,
//      r3
//  ],
//
// }
//
