import {Star} from "./Star";
import {useState} from "react";
import {UncontrolledStar} from "./UncontrolledStar";


export function UncontrollRating() {

    let [value, setValue] = useState(0)
    return (

        <div>
            <UncontrolledStar select={value > 0} setValue={()=>setValue(1)} />

            <UncontrolledStar select={value > 1} setValue={()=>setValue(2)} />

            <UncontrolledStar select={value > 2} setValue={()=>setValue(3)} />

            <UncontrolledStar select={value > 3} setValue={()=>setValue(4)} />

            <UncontrolledStar select={value > 4} setValue={()=>setValue(5)} />


        </div>
    )
}