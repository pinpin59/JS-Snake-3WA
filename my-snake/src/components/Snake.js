import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setIsInit, setCanvas } from "../actions/gameActions";


const Snake = () => {
    
    const [canvas, setCanvas] = useState('')
    const [ctx, setCtx] = useState()
    const snake = useRef('snake')
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     //console.log(snake.current);
    //     setContext(snake)
    // },[snake]) 
  
   useEffect(() => {
    setCanvas(snake.current);

   },[])

   useEffect(() => {
    // console.log("3");
     //console.log(canvas);
    console.log(canvas);
    if(canvas){
        console.log(canvas);
        let ctx = canvas.getContext('2d');
        let pomme = canvas.getContext('2d');

        ctx.beginPath();
        ctx.fillStyle = "#333"
        ctx.fillRect(0, 0, 800, 600)

        ctx.beginPath();
        ctx.fillStyle = "#789"
        ctx.fillRect(20,20,20,20)

     
        //let context = ctx.getContext("2D");
        //ctx.fillStyle = "#333"
    }
    // console.log(isInit);
   },[canvas])


    return(
        <div>
          
            <canvas width="800" height="600" style={{border: "1px solid #000"}} ref={snake}>
        
            </canvas>
            
            <button onClick={() => {dispatch(setIsInit())}}>Lancer la partie</button>

            
        </div> 
    )
}

export default Snake;