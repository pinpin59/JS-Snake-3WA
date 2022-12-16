const statInit = {
    score : 0,
    context:null,
    Y :0,
    X:0
}

const gameReducer = (state = statInit, action = {} ) => {

    switch(action.type){

        case "SET_CTX":
            return{
                ...state,
                context : action.payload
            }

        case "RANDOM_NUMBER" : 
        
            let number = (Math.floor(Math.random() * 78) + 1);
            while(number % 2){
             number = Math.floor(Math.random() * 10) + 1;
            }
            return number * 10;
        
        case "DOWN_Y" :
            
        return{
            ...state,
            Y: action.payload
    
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