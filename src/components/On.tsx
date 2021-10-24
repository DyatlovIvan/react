import { useState } from "react"

export function On() {
    
    let [on,setOn] = useState(false);

    function onHandler(value:boolean) {
        setOn(value);
    }
    const onStyle={
    width :'100px',
    height:'40px',
    boarder: '1px solid black',
    backgroundColor:on?'green':'white',
    marginLeft:'5px'

    }
    const offStyle ={
        width :'100px',
        height:'40px',
        boarder: '1px solid black',
        backgroundColor:on?'white':'red',
        marginLeft:'2px'
    }

    const onStatus ={
        width :'30px',
        height:'30px',
        boarder: '1px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor:on?'green':'red',
    }

    

    return(
    <div>
        <button style = {onStyle} onClick = {() =>{onHandler(true)}}>On</button>
        <button style = {offStyle} onClick = {() =>{onHandler(false)}}>Off</button>
        <span style = {onStatus}></span>
    </div>
    )
    
}