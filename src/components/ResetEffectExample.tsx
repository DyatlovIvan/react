import {useEffect, useState} from "react";

export const ResetEffectExample = () => {
    const [counter,setCounter] = useState(1)
    console.log('before ' + counter)
    useEffect(()=>{
        console.log('effect ' + counter)
        return()=>{
            console.log('reset ' + counter)
        }

    },[counter])
    return(
        <>
            {counter}
            <button onClick={()=>setCounter(counter+1)}>+</button>
        </>
    )
}