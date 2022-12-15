const statInit = {
    canvas : null,
    context : null,
    score : 0,
    isInit : false
}

const gameReducer = (state = statInit, action = {} ) => {

    switch(action.type){
        case "SET_CANVAS" : 
            return{
                ...state,
                canvas: action.payload
            }; 

        case "SET_CONTEXT" :
        
        return{
            ...state,
            context: action.payload.context,
            isInit: !state.isInit
    
        };

        case "SET_IS_INIT" :
        
        return{
            isInit: !state.isInit
        };

        default:
            return(
                state
            )
    }
}

export default gameReducer;