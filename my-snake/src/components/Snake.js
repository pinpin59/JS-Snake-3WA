import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setIsInit } from "../actions/gameActions";


const Snake = () => {
    
    const [canvass, setCanvas] = useState(null)
    const {canvas} = useSelector(state => state)
    const {isInit} = useSelector(state => state)
    const snake = useRef('snake')
    const dispatch = useDispatch();
    
    useEffect(() => {
        //console.log(snake.current);
        console.log(isInit);
    },[])

    return(
        <div>
            {isInit ?
            <canvas width="800" height="600" ref={snake}>
    
            </canvas>
            :
            <button onClick={() => {dispatch(setIsInit())}}>Lancer la partie</button>
             }
            
        </div> 
    )
}

export default Snake;