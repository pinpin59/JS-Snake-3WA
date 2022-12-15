const statInit = {
    canvas : null,
    context : null,
    score : 0
}

const gameReducer = (state = statInit, action = {} ) => {

    switch(action.type){
        case "SET_CANVAS" :

            return{
                ...state,
                canvas: action.payload.canvas
            }; 

        case "SET_CONTEXT" :
        
        return{
            ...state,
            context: action.payload.context
        };

        default:
            return(
                state
            )
    }
}

export default gameReducer;