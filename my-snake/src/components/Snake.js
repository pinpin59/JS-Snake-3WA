import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setIsInit } from "../actions/gameActions";


const Snake = () => {
    
    const [canvas, setCanvas] = useState(null)
    const {isInit} = useSelector(state => state)
    const snake = useRef('snake')
    const dispatch = useDispatch();
    
    useEffect(() => {
        //console.log(snake.current);
        console.log(isInit);
    },[])

    useEffect(() => {
        setCanvas(snake);
        if(canvas){
            console.log(canvas.current);
            canvas.current.fillStyle = "#333"
            canvas.current.fillRect(100,300,50,100)
        }
    },[isInit])

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