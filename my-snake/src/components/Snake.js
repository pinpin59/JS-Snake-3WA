import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setIsInit, setCanvas, randomNumbere } from "../actions/gameActions";
import {clear} from "@testing-library/user-event/dist/clear";


const Snake = () => {
    
    const [canvas, setCanvas] = useState('')
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)
    const [start, setStart] = useState()
    const snake = useRef('snake')
    const [ctx, setCtx] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');
        }, 3000);
        return () => clearInterval(interval);
    }, [setStart]);

    //mouvements
    window.onkeydown = function(event) {
        let keyPr = event.keyCode;

        const move = (direction, value) =>{
            if (direction === "Y"){
                return(
                    setY(y + value),
                    console.log(y)
                )
            }
        }
        switch(keyPr){
            case 38:
                setStart('ok')
                setY(y - 20)
                // setInterval(move("Y", -20), 1000);
                // const moveInterval = setInterval(console.log("okok"), 1000)
                // return () => clearInterval(moveInterval)

                break;
            case 40:
                // setY(y + 20)
                setInterval(move("Y", 20), 1000);
                break;
            default :

        }
        
    }

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

    //set CANVAS
    useEffect(()=>{
        if(canvas){
            setCanvas(snake.current);
            setCtx(canvas.getContext('2d'));
        }

    }, [canvas])

   // set CTX
    useEffect(()=>{
        if (ctx){
            setCtx(canvas.getContext('2d'));
            ctx.beginPath();
            ctx.fillStyle = "#789"
            ctx.fillRect(randomNumber(),randomNumber2(),20,20)
            ctx.beginPath();
            ctx.fillStyle = "#333"
            ctx.fillRect(0, 0, 800, 600)
        }
    })

   useEffect(() => {
    if(canvas){

        ctx.beginPath();
        ctx.fillStyle = "green"

        //Vers la D et G - Vers le H et B
        ctx.fillRect(x,y,20,20)
    }
   },[x ,y])


    return(
        <div>
          
            <canvas width="800" height="600" style={{border: "1px solid #000"}} ref={snake}>
        
            </canvas>
            
            <button onClick={() => {dispatch(setIsInit())}}>Lancer la partie</button>

            
        </div> 
    )
}

export default Snake;