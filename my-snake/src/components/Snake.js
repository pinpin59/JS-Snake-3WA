import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setIsInit, setCanvas, randomNumbere, yDown, setCtx } from "../actions/gameActions";


const Snake = () => {
    
    const [canvas, setCanvas] = useState('')
    const [y, setY] = useState(0)
    const [x, setX] = useState(0)
    const [count, setCount] = useState(0);
    const {X,Y, ctxx} = useSelector(state => state)
    let ctx;
    const snake = useRef('snake')


    const dispatch = useDispatch();

    

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
        ctx = canvas.getContext('2d');
      
        
        ctx.beginPath();
        ctx.fillStyle = "#333"
        ctx.fillRect(0, 0, 800, 600)

        ctx.beginPath();
        ctx.fillStyle = "#789"
        ctx.fillRect(randomNumber(),randomNumber2(),20,20)
       
            ctx.beginPath();
            ctx.fillStyle = "green"
            ctx.fillRect(x,y,20,20)
        
        

    }
   },[canvas,y,x])

//    useEffect(() => {
//     window.onkeydown = function(event) {
                
//         //Vers la D et G - Vers le H et B
//         let keyPr = event.keyCode;
//         console.log(keyPr);

//         switch(keyPr){
//             case 38: 
//                 setY(count)
//             break;

//             case 40:
//                 yDown(20)
//                 console.log(Y);
//                 break;
//         default :

//         }
//     }    
// },[count])

   useEffect(() => {
    window.onkeydown = function(event) {
                
        //Vers la D et G - Vers le H et B
        let keyPr = event.keyCode;
        console.log(keyPr);
        let id;
        let moveDown;
        switch(keyPr){
            
            case 38: 
            moveDown = setInterval(() => setY((oldCount) => oldCount - 20), 500)
            return () => {
                clearInterval(moveDown);
              };
            case 40:
                id = setInterval(() => setY((oldCount) => oldCount + 20), 500)
                return () => {
                    clearInterval(id);
                  };
        default :

        }
    }    
    

  
  }, [canvas]);

   

    return(
        <div>
          
            <canvas width="800" height="600" style={{border: "1px solid #000"}} ref={snake}>
        
            </canvas>
            
            <button onClick={() => {dispatch(setIsInit())}}>Lancer la partie</button>
        {count}
            
        </div> 
    )
}

export default Snake;