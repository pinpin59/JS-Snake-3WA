import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setIsInit, setCanvas, randomNumbere } from "../actions/gameActions";


const Snake = () => {
    
    const [canvas, setCanvas] = useState('')
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)
    const snake = useRef('snake')

    const dispatch = useDispatch();

    window.onkeydown = function(event) {
        let keyPr = event.keyCode;
        console.log(keyPr);

        switch(keyPr){
            case 38: 
                setY(y - 20)
                break;
            case 40:
                setY(y + 20)
                break;
            default :

        }
        
    }    
    console.log('====================================');
    console.log(y,x);
    console.log('====================================');

    function randomNumber(){
        let number = (Math.floor(Math.random() * 78) + 1);
            while(number % 2){
             number = Math.floor(Math.random() * 10) + 1;
            }
            return number * 10
    }

    function randomNumber2(){
        let number = (Math.floor(Math.random() * 58) + 1);
            while(number % 2){
             number = Math.floor(Math.random() * 10) + 1;
            }
            return number * 10
    }
   useEffect(() => {
    setCanvas(snake.current);
   },[])


   useEffect(() => {
    if(canvas){
        
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.fillStyle = "#333"
        ctx.fillRect(0, 0, 800, 600)

        ctx.beginPath();
        ctx.fillStyle = "#789"
        ctx.fillRect(randomNumber(),randomNumber2(),20,20)

        ctx.beginPath();
        ctx.fillStyle = "green"
                    //Vers la D et G - Vers le H et B
        ctx.fillRect(x,y,20,20)
        console.log(ctx);

    }
    // console.log(isInit);
   },[canvas, x ,y])


    return(
        <div>
          
            <canvas width="800" height="600" style={{border: "1px solid #000"}} ref={snake}>
        
            </canvas>
            
            <button onClick={() => {dispatch(setIsInit())}}>Lancer la partie</button>

            
        </div> 
    )
}

export default Snake;