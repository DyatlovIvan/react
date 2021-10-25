import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
export default {
    title: 'input'
}
export  const UncontrolledInput = () =><input/>
export  const TrackValueUncontrolledInput = () => {
    const [value,setValue]=useState('')
    return <><input onChange={(e)=>setValue(e.currentTarget.value)}/> - {value}</>
}


export  const SelectedValue = () =>{
    const [selectValue,setSelectValue] = useState<string|undefined>(undefined)
    return <select value={selectValue} onChange={(e)=>setSelectValue(e.currentTarget.value)}>
        <option value="1">Moscow</option>
        <option value="2">Izhevsk</option>
        <option value="3">Minsk</option>
        <option value="4">SP</option>
    </select>

}

export  const ControlledInputWithFixedValue = () =><input value = {'controlled'}/>