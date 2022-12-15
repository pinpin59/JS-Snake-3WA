import { useEffect, useRef, useState } from "react";

const Snake = () => {
    
    const [canvas, setCanvas] = useState(null)
    const snake = useRef('snake')

    
    useEffect(() => {
        
    },[])

    return(
        <div>
            <canvas width="800" height="600" ref={snake}>
    
            </canvas>
        </div> 
    )
}

export default Snake;