import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


const Snake = () => {
    
    const [canvass, setCanvas] = useState(null)
    const {canvas} = useSelector(state => state)
    const snake = useRef('snake')
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log(canvas);
    },[])

    return(
        <div>
            <canvas width="800" height="600" ref={snake}>
    
            </canvas>
        </div> 
    )
}

export default Snake;