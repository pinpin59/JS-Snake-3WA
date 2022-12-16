const statInit = {
    score : 0
    
}

const gameReducer = (state = statInit, action = {} ) => {

    switch(action.type){
        case "RANDOM_NUMBER" : 
        
            let number = (Math.floor(Math.random() * 78) + 1);
            while(number % 2){
             number = Math.floor(Math.random() * 10) + 1;
            }
            return number * 10;
        
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