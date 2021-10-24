import { useState } from "react"
type UncontrollOnType = {
    setOn:(value:boolean)=> void
    newOn:boolean
}

export function UncontrollOn(props:UncontrollOnType) {

    const onStyle={
    width :'100px',
    height:'40px',
    boarder: '1px solid black',
    backgroundColor:props.newOn?'green':'white',
    marginLeft:'5px'

    }
    const offStyle ={
        width :'100px',
        height:'40px',
        boarder: '1px solid black',
        backgroundColor:props.newOn?'white':'red',
        marginLeft:'2px'
    }

    const onStatus ={
        width :'30px',
        height:'30px',
        boarder: '1px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor:props.newOn?'green':'red',
    }

    

    return(
    <div>
        <button style = {onStyle} onClick = {() =>{props.setOn(!props.newOn)}}>On</button>
        <button style = {offStyle} onClick = {() =>{props.setOn(!props.newOn)}}>Off</button>
        <span style = {onStatus}></span>
    </div>
    )
    
}